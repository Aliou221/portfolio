import todolistImage from '@/assets/realisations/to-do-list.png'
import meteoImage from '@/assets/realisations/meteo.png'
import portfolioImage from '@/assets/realisations/portfolio.png'
import snakeImage from '@/assets/realisations/snake-game.png'
import biblioImage from '@/assets/realisations/bibliotheque.png'
import biblioLaravelImage from '@/assets/realisations/bibliotheque-laravel.png'
import challengeImage from '@/assets/realisations/challenge.png'
import aerkThiesImage from '@/assets/realisations/aerk-thies.png'
import quizzAppImage from '@/assets/realisations/quizz-js.png'
import cahierTextImage from '@/assets/realisations/cahier-de-text.png'
import { 
    bootstrapColor, 
    cssColor, 
    flatlafColor, 
    htmlColor, 
    javaColor, 
    jdbcColor, 
    jsColor, 
    laravelColor, 
    miglayoutColor, 
    phpColor, 
    reactColor, 
    tailwindColor 
  } from "./colors";

export const realisationsLists = [
  {
    imageUrl: portfolioImage,
    title: 'Mon Portfolio',
    description: "Version recent de mon portfolio présentant mon parcours, mes compétences et mes réalisations en développement web. Design moderne, responsive et épuré.",
    techno: [
      { label: 'HTML',       style: htmlColor },
      { label: 'CSS',        style: cssColor },
      { label: 'JavaScript', style: jsColor }
    ],
    site: 'https://cisse221-portfolio.vercel.app/',
    github: 'https://github.com/Aliou221/Me-Portfolio'
  },
  {
    imageUrl: meteoImage,
    title: 'App Météo',
    description: "Application affichant en temps réel la température, l’humidité et la vitesse du vent pour n’importe quelle ville, avec une interface claire et intuitive.",
    techno: [
      { label: 'HTML',       style: htmlColor },
      { label: 'CSS',        style: cssColor },
      { label: 'JavaScript', style: jsColor }
    ],
    site: 'https://app-meteo-lime.vercel.app/',
    github: 'https://github.com/Aliou221/AppMeteo'
  },
  {
    imageUrl: biblioImage,
    title: 'Gestion de Bibliothèque',
    description: "Plateforme permettant d’ajouter, modifier et supprimer des utilisateurs et des livres, ainsi que de gérer les emprunts et les retours. Architecture MVC et programmation orientée objet.",
    techno: [
      { label: 'HTML',       style: htmlColor },
      { label: 'CSS',        style: cssColor },
      { label: 'JavaScript', style: jsColor },
      { label: 'PHP',        style: phpColor }
    ],
    site: 'https://cisse221-bibliotheque.free.nf/',
    github: 'https://github.com/Aliou221/gestion-bibliotheque-php'
  },
  {
    imageUrl: snakeImage,
    title: 'Jeu du Serpent',
    description: "Reproduction du jeu classique du serpent en JavaScript, avec plusieurs niveaux de difficulté et gestion des meilleurs scores pour plus de challenge.",
    techno: [
      { label: 'HTML',       style: htmlColor },
      { label: 'Bootstrap',  style: bootstrapColor },
      { label: 'JavaScript', style: jsColor }
    ],
    site: 'https://snake-game-plum-one.vercel.app/',
    github: 'https://github.com/Aliou221/snake-game'
  },
  {
    imageUrl: quizzAppImage,
    title: 'App de Quizz',
    description: "Application de quiz en JavaScript pour débutants, permettant d’évaluer ses connaissances et d’obtenir une note sur 20 à la fin.",
    techno: [
      { label: 'HTML',         style: htmlColor },
      { label: 'Tailwind CSS', style: tailwindColor },
      { label: 'JavaScript',   style: jsColor }
    ],
    site: 'https://my-quiz-app-js.vercel.app/',
    github: 'https://github.com/Aliou221/My-Quiz-App'
  },
  {
    imageUrl: todolistImage,
    title: 'To-Do List',
    description: "Application de gestion de tâches permettant d’ajouter, de marquer comme terminées et de supprimer des tâches. Les données sont sauvegardées dans le Local Storage pour assurer la persistance entre les sessions.",
    techno: [
      { label: 'React.js',     style: reactColor },
      { label: 'Tailwind CSS', style: tailwindColor }
    ],
    site: 'https://to-do-list-221.vercel.app/',
    github: 'https://github.com/Aliou221/ToDoList'
  },
  {
    imageUrl: biblioLaravelImage,
    title: 'Gestion de Bibliothèque (Laravel)',
    description: "Version avancée de la plateforme de gestion de bibliothèque, développée avec Laravel. Gestion complète des utilisateurs, des livres et des emprunts, avec une interface moderne et sécurisée.",
    techno: [
      { label: 'Laravel',      style: laravelColor },
      { label: 'Tailwind CSS', style: tailwindColor },
      { label: 'JavaScript',   style: jsColor }
    ],
    site: '#',
    github: 'https://github.com/Aliou221/bibliotheque'
  },
  {
    imageUrl: challengeImage,
    title: 'Challenge H24Code',
    description: "Challenge visant à créer des extraits de code en HTML, CSS et PHP, avec affichage du titre et de la description pour chaque snippet. Il est possible de filtrer les codes par catégorie et de copier facilement chaque extrait.",
    techno: [
      { label: 'React.js',     style: reactColor },
      { label: 'Tailwind CSS', style: tailwindColor },
      { label: 'Laravel',      style: laravelColor }
    ],
    site: '#',
    github: 'https://github.com/Aliou221/h24-code-challenge'
  },
  {
    imageUrl: aerkThiesImage,
    title: 'AERK-THIES',
    description: "Plateforme web pour l’association AERK-THIES : dépôt de documents, forum étudiant, gestion des utilisateurs et des rôles, développée avec Laravel et Tailwind.",
    techno: [
      { label: 'Laravel',      style: laravelColor },
      { label: 'Tailwind CSS', style: tailwindColor },
      { label: 'JavaScript',   style: jsColor }
    ],
    site: 'https://aerk-thies.rf.gd/?i=2',
    github: '#'
  },
  {
    imageUrl: cahierTextImage,
    title: 'Gestion de Cahier de Texte',
    description: "Application de gestion de cahier de texte réalisée en Java avec Swing et MVC : gestion des enseignants, responsables, cours et validations.",
    techno: [
      { label: 'Java',      style: javaColor },
      { label: 'Swing',     style: cssColor },
      { label: 'JDBC',      style: jdbcColor },
      { label: 'FlatLaf',   style: flatlafColor },
      { label: 'MigLayout', style: miglayoutColor }
    ],
    site: '#',
    github: 'https://github.com/Aliou221/cahier_de_texte'
  }
];