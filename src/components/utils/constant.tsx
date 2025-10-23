import htmlIcon from '@/assets/competences/langage/html.png'
import cssIcon from '@/assets/competences/langage/css-3.png'
import jsIcon from '@/assets/competences/langage/js.png'
import typeScriptIcon from '@/assets/competences/langage/typescript.png'
import phpIcon from '@/assets/competences/langage/php.png'
import sqlIcon from '@/assets/competences/langage/sql-server.png'
import javaIcon from '@/assets/competences/langage/java.png'
import mysqlIcon from '@/assets/competences/databases/mysql.png'
import bootstrapIcon from '@/assets/competences/frameworks/bootstrap.png'
import tailwindIcon from '@/assets/competences/frameworks/tailwind-icon.png'
import reactIcon from '@/assets/competences/frameworks/react.svg'
import nextIcon from '@/assets/competences/frameworks/next.ico'
// import angularIcon from '@/assets/competences/frameworks/angular.png'
import laravelIcon from '@/assets/competences/frameworks/laravel.png'
import vscodeIcon from '@/assets/competences/outils/vs-code.png'
import androidStudioIcon from '@/assets/competences/outils/android-studio.webp'
import intellijIcon from '@/assets/competences/outils/intellij.webp'
import gitIcon from '@/assets/competences/outils/git.png'
import githubIcon from '@/assets/competences/outils/github.png'

export const langageLists = [
  { 'icon': htmlIcon,       'text': 'HTML',       'color': 'text-orange-500' },
  { 'icon': cssIcon,        'text': 'CSS',        'color': 'text-blue-500' },
  { 'icon': jsIcon,         'text': 'JavaScript', 'color': 'text-yellow-400' },
  { 'icon': typeScriptIcon, 'text': 'TypeScript', 'color': 'text-blue-700' },
  { 'icon': phpIcon,        'text': 'PHP',        'color': 'text-purple-700' },
  { 'icon': sqlIcon,        'text': 'SQL',        'color': 'text-gray-500' },
  { 'icon': javaIcon,       'text': 'Java',       'color': 'text-red-700' },
];

export const frameworkLists = [
  { 'icon': bootstrapIcon, 'text': 'Bootstrap', 'color': 'text-purple-700' },
  { 'icon': tailwindIcon,  'text': 'Tailwind',  'color': 'text-[#30bdf6]' },
  { 'icon': reactIcon,     'text': 'React',     'color': 'text-cyan-500' },
  { 'icon': nextIcon,      'text': 'Next.js',   'color': 'text-black' },
  // { 'icon': angularIcon,   'text': 'Angular',   'color': 'text-[#f10859]' },
  { 'icon': laravelIcon,   'text': 'Laravel',   'color': 'text-red-500' },
];

export const outilLists = [
  { 'icon': vscodeIcon,        'text': 'VS Code', 'color': 'text-[#22a6f2]' },
  { 'icon': androidStudioIcon, 'text': 'Android Studio',  'color': 'text-[#3ddc84]' },
  { 'icon': intellijIcon,      'text': 'IntelliJ IDEA',     'color': 'text-[#f44336]' },
  { 'icon': gitIcon,           'text': 'Git',   'color': 'text-[#f1502f]' },
  { 'icon': githubIcon,        'text': 'Github',   'color': 'text-black' },
];

export const databasesLists = [
  { 'icon': mysqlIcon, 'text': 'MySQL', 'color': 'text-green-700' },
];