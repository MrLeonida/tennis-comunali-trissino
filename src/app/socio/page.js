"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, CheckIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBells, faChevronDown, faTennisBall, faWater, faFutbol, faUniformMartialArts, faVolleyball, faArrowRight, faUserGroup, faMedal, faTrain, faMasksTheater, faFamily, faRacquet, faCircleCheck, faBadgePercent, faPaperPlane, faCalendarPlus } from '@fortawesome/pro-solid-svg-icons'
import { faAppStoreIos, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const products = [
  { name: 'Tennis', description: 'Scendi in campo con Treviso Tennis Team', href: '#', icon: faTennisBall },
  { name: 'Canottaggio', description: 'Unisciti ad una scuola ai vertici nazionali', href: '#', icon: faWater },
  { name: 'Calcetto', description: 'Chiama gli amici, il pallone lo mettiamo noi', href: '#', icon: faFutbol },
  { name: 'Karate', description: 'Allaccia la cintura e sali sul tatami', href: '#', icon: faUniformMartialArts },
  { name: 'Volley', description: 'Divertiti con la nostra squadra amatoriale', href: '#', icon: faVolleyball },
]
const callsToAction = [
  { name: 'Tutti gli sport', href: '#', icon: faMedal }
]
const company = [
  { name: 'Treviso e Belluno', href: '/associazione' },
  { name: 'Nazionale', href: 'https://nazionale.dlf.it/' },
  { name: 'Diventa socio', href: '/socio' },
  { name: 'News', href: '#' },
  { name: 'Contatti', href: '#' },
]
const app = [
  { name: 'App Store', href: 'https://apps.apple.com/it/app/wansport/id6445919117' },
  { name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wansport.community' },
]
const posts = [
  {
    id: 1,
    title: 'Sport',
    href: '#',
    description: 'Da sempre inteso come attività ludica e di intrattenimento per eccellenza, lo sport costituisce un momento importante di formazione, di benessere fisico e di aggregazione.',
    imageUrl: '/sport-min.jpg',
    classes: 'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-amber-500 group-hover:bg-amber-400',
    icon: faMedal,
  },
  {
    id: 2,
    title: 'Turismo',
    href: '#',
    description: 'Il turismo è un punto di forza delle attività del Dopolavoro Ferroviario. Una tradizione storica che ha visto crescere la partecipazione, l’aggregazione e l’entusiasmo dei soci ferrovieri e non solo.',
    imageUrl: '/turismo-min.jpg',
    classes: 'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue-500 group-hover:bg-blue-400',
    icon: faTrain,
  },
  {
    id: 3,
    title: 'Cultura',
    href: '#',
    description: 'La conservazione della memoria comune, la visione del mondo come spazio aperto, la tecnica vissuta come strumento ma non come fine, questo è il nostro approccio verso le attività culturali.',
    imageUrl: '/cultura-min.jpg',
    classes: 'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-emerald-500 group-hover:bg-emerald-400',
    icon: faMasksTheater,
  },
  {
    id: 4,
    title: 'Servizi',
    href: '#',
    description: 'Il settore dei servizi è indispensabile per assolvere alla finalità del DLF, esso permette di offrire spazi ed opportunità ai soci mettendo a loro disposizione gli strumenti necessari allo sviluppo.',
    imageUrl: '/servizi-min.jpg',
    classes: 'flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-red-500 group-hover:bg-red-400',
    icon: faFamily,
  },
]
const benefits = [
  'Scuola tennis riconosciuta FIT',
  'Corsi per principianti',
  'Corsi livello intermedio',
  'Corsi di perfezionamento',
  'Lezioni individuali o di gruppo',
  'Allenamenti squadre agonisti',
]
const stats = [
  { id: 1, name: 'Campi da gioco', value: '5' },
  { id: 2, name: 'Iscritti scuola tennis', value: '100+' },
  { id: 3, name: 'Tesserati agonisti', value: '50+' },
  { id: 4, name: 'Squadre agonistiche', value: '4' },
]
const offers = [
  {
    id: 1,
    title: 'Sconto del 25%',
    href: '#',
    description: 'Abbigliamento e calzature sportive per ogni attività.',
    image: '/adidas.jpg',
    logo: '/adidas-logo.png',
    classes: 'relative z-10 rounded-full bg-amber-500 px-3 py-1.5 font-medium text-slate-50 hover:bg-amber-400',
    category: {
      href: "#",
      category: "Sport",
    }
  },
  {
    id: 2,
    title: 'Fino al 10%',
    href: '#',
    description: 'Soggiorna nei migliori hotel e appartamenti del mondo.',
    image: '/booking.jpg',
    logo: '/booking-logo.png',
    classes: 'relative z-10 rounded-full bg-blue-500 px-3 py-1.5 font-medium text-slate-50 hover:bg-blue-400',
    category: {
      href: "#",
      category: "Turismo",
    }
  },
  {
    id: 3,
    title: 'Sconto di 10€',
    href: '#',
    description: 'Serie TV e film Disney, Marvel, Pixar, Star Wars e tanto altro ancora.',
    image: '/disney.jpg',
    logo: '/disney-logo.png',
    classes: 'relative z-10 rounded-full bg-emerald-500 px-3 py-1.5 font-medium text-slate-50 hover:bg-emerald-400',
    category: {
      href: "#",
      category: "Cultura",
    }
  },
  {
    id: 4,
    title: 'Sconto del 20%',
    href: '#',
    description: 'Tecnologia all\'avanguardia per la pulizia della casa.',
    image: '/dyson.jpg',
    logo: '/dyson-logo.png',
    classes: 'relative z-10 rounded-full bg-red-500 px-3 py-1.5 font-medium text-slate-50 hover:bg-red-400',
    category: {
      href: "#",
      category: "Servizi",
    }
  },
]
const navigation = {
  main: [
    { name: 'Chi siamo', href: '#' },
    { name: 'Sport', href: '#' },
    { name: 'Turismo', href: '#' },
    { name: 'Cultura', href: '#' },
    { name: 'Servizi', href: '#' },
    { name: 'Contatti', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/dopolavoroferroviariotv',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dlftennistreviso/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

const timeline = [
  {
    name: 'Founded company',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-slate-50">
    
    <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
      <p className="text-sm leading-6 text-white">
          <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
          Questo sito web è in costruzione, torna a trovarci nel 2024 per scoprire le novità.
      </p>
    </div>
    
      <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Associazione DLF Treviso</span>
            <img className="h-8 w-auto" src="/logo-multi-color.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
              Associazione
              <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-slate-50 p-2 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
              Sport
              <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-slate-50 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-200 group-hover:bg-slate-100">
                        <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-slate-600 group-hover:text-sky-600 fa-lg" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-slate-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-slate-100">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                    >
                      <FontAwesomeIcon icon={item.icon} className="fa-sm text-slate-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
            Turismo
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
            Cultura
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
            Servizi
          </a>


        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          <Popover.Group>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
                Prenota con l&apos;app
                <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
              </Popover.Button>
              <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-56 rounded-xl bg-slate-50 p-2 shadow-lg ring-1 ring-gray-900/5">
                {app.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Popover>
          </Popover.Group>

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

              <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Associazione
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Sport
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Turismo
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Cultura
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Servizi
                </a>

                
              </div>

              <Disclosure as="div" className="-mx-3 py-6">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Prenota con l&apos;app
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {app.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

    <main className="isolate bg-slate-50">


    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>


    </main>

    <div className="bg-slate-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Vuoi rimanere aggiornato sulle ultime novità? Iscriviti alla newsletter!</h2>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Indirizzo e-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Inserisci la tua e-mail"
            />
          <div className="flex items-center">
              <a
                href="#"
                className="rounded-md bg-sky-600 px-4 py-3.5 text-sm font-regular text-slate-50 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-1.5" />
                Iscriviti
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            Ci teniamo molto alla privacy dei tuoi dati. Leggi la nostra{' '}
            <a href="#" className="font-semibold text-sky-600 hover:text-sky-500">
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>


    <footer className="bg-slate-200">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-slate-600 hover:text-slate-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Associazione DLF Treviso-Belluno.<br />Via Giuseppe Benzi, 86 - 31100 Treviso (TV)<br />Tel. +39 0422 401540<br />Tutti i diritti sono riservati.
        </p>
      </div>
    </footer>

    <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
      <p className="text-sm leading-6 text-white">
          <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
          Questo sito web è in costruzione, torna a trovarci nel 2024 per scoprire le novità.
      </p>
    </div>


    </div>
  )
}
