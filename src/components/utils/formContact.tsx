import { Card, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../ui/button'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

export default function FormContact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("Erreur de configuration serveur.");
      return;
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage("Veuillez remplir tous les champs !");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current!, publicKey)
      .then(() => {
        setSuccessMessage("Message envoyé avec succès !");

        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setErrorMessage("Échec de l'envoi du message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card className="flex-1 anime backdrop-blur-2xl border bg-[#55555531] p-5 border-zinc-600 shadow-md transition-all">
      <CardTitle className="text-xl text-white mb-4">
        Envoyez-moi un message
      </CardTitle>

      {errorMessage && (
        <p className="text-red-500 p-3 mb-3 rounded-md text-sm bg-red-200/20 flex items-center gap-1">
          <InformationCircleIcon className='size-6'/>
          {errorMessage}
        </p>
      )}

      {successMessage && (
        <p className="text-green-500 text-sm p-3 mb-3 rounded-md bg-green-200/20 flex items-center gap-1">
          <CheckCircleIcon className='size-6'/>
          {successMessage}
        </p>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex gap-3 md:flex-row flex-col">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="name" className="text-white">Nom complet</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete='off'
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              autoComplete='off'
              name="email"
              type="email"
              placeholder="mon@email.com"
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject" className="text-white">Sujet</Label>
          <Input
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            id="subject"
            name="subject"
            type="text"
            placeholder="Sujet de votre message"
            className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-white">Message</Label>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            name="message"
            rows={4}
            placeholder="Votre message..."
            className="bg-transparent border-gray-600 text-white resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-gray-900 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </Button>
      </form>
    </Card>
  )
}