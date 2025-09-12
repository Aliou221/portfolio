import { TitleSection } from "./ui/utils";
import CardContact from "./utils/card-contact";
import FormContact from "./utils/formContact";

export default function Contact() {

  return (
    <section className="min-h-screen" id="contact">
      <TitleSection title="Contactez-moi !" />
      <p className="text-gray-300 md:text-left text-center font-medium my-4">
        Vous avez un projet en tête ? Discutons-en ensemble !
      </p>

      <div className="flex flex-col md:flex-row gap-6 my-9">
        <div className="flex-1 flex flex-col gap-4">
          <CardContact
            icon="email"
            title="Email"
            link="mailto:alioudev221@gmail.com"
            subtitle="alioudev221@gmail.com"
          />
          <CardContact
            icon="tel"
            title="Téléphone"
            link="tel:+221760124302"
            subtitle="(+221) 76 012 43 02"
          />
          <CardContact
            icon="position"
            title="Localisation"
            subtitle="HLM SARA, KAOLACK"
          />
        </div>

        <FormContact/>
      </div>
    </section>
  );
}
