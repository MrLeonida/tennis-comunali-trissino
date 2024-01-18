"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faTrain, faMasksTheater, faFamily, faRacquet, faCircleCheck, faBadgePercent } from '@fortawesome/pro-solid-svg-icons'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/header';
import Warning from '../../components/warning';
import Footer from '../../components/footer';

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
    href: '/turismo',
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {

  return (
    <div className="bg-gray-900">
    
    <Warning />
    
    <Header />

      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/hero-image-min.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-6xl mx-5 md:mx-0">
              I nostri spazi, il tuo divertimento
            </h1>
            <p className="mt-6 text-md bg-slate-200/75 text-slate-900 font-light p-3.5 rounded-md mx-5 md:mx-0 sm:text-lg">
              Immerso nella natura, costeggiato dal Sile, a due passi da Treviso. Scarica l&apos;applicazione WanSports per prenotare la tua prossima partita!
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5 mx-5 md:mx-0">
              <div className="inline-flex">
                <a
                  href="https://apps.apple.com/it/app/wansport/id6445919117"
                  className="rounded-md bg-sky-600 px-4 py-3.5 text-sm font-regular text-slate-50 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  <FontAwesomeIcon icon={faAppStoreIos} className="mr-1.5" />
                  Scarica da Apple Store
                </a>
              </div>
              <div className="inline-flex">
                <a
                  href="https://play.google.com/store/apps/details?id=com.wansport.community"
                  className="rounded-md bg-sky-600 px-4 py-3.5 text-sm font-regular text-slate-50 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  <FontAwesomeIcon icon={faGooglePlay} className="mr-1.5" />
                  Scarica da Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>


      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Una vasta scelta di attività</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Sport, turismo, cultura, turismo...e tu quale scegli?
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-56 sm:pt-40 lg:pt-56"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-x-2.5 overflow-hidden text-sm leading-6 text-gray-300">
                <div className={post.classes}>
                  <FontAwesomeIcon icon={post.icon} className="h-6 w-6 text-slate-50 fa-lg" aria-hidden="true" />
                </div>
                <div className="text-lg font-bold text-slate-50">
                {post.title}
                </div>
              </div>
              <h3 className="mt-3 text-sm font-light leading-6 text-slate-50">
                <a href={post.href}>
                {post.description}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>


    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="/team-min.jpg"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-lime-500 sm:text-4xl">Tennis</h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                I nostri maestri saranno felici di indicarti l&apos;opzione più adatta alle tue esigenze. Che tu sia un futuro agonista oppure pronto a divertirti in campo, prenota la tua lezione di prova.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-slate-50 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3 items-center">
                    <FontAwesomeIcon icon={faCircleCheck} className="fa-sm" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-center">
              <a
                href="#"
                className="rounded-md bg-lime-500 px-4 py-3.5 text-sm font-regular text-slate-900 shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <FontAwesomeIcon icon={faRacquet} className="mr-1.5" />
                Visita l&apos;academy
              </a>
            </div>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-slate-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-50">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>


    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Approfitta dei vantaggi</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
          Richiedi la tua tessera DLF: con soli 12€ all’anno potrai accedere ad una vasta gamma di convenzioni dedicate, esperienze indimenticabili e vantaggi unici.
          </p>
          <div className="mt-10 flex items-center">
              <a
                href="#"
                className="rounded-md bg-sky-600 px-4 py-3.5 text-sm font-regular text-slate-50 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <FontAwesomeIcon icon={faBadgePercent} className="mr-1.5" />
                Guardale tutte
              </a>
            </div>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {offers.map((offers) => (
              <article key={offers.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={offers.image}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={offers.category.href}
                      className={offers.classes}
                    >
                      {offers.category.category}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                      <a href={offers.href}>
                        <span className="absolute inset-0" />
                        {offers.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{offers.description}</p>
                  </div>
                  <div className="mt-3 relative">
                      <img src={offers.logo} alt="" className="h-10" />
                    </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>


    <Footer />

    <Warning />

    </div>
  )
}
