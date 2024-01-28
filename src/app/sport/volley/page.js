"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball, faMedal, faUserGroupSimple } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

const features = [
  {
    name: 'Formazione tecnica specializzata',
    description: 'Approfitta delle nostre sessioni di formazione mirate, guidate da allenatori esperti. Affina le tue abilità di palleggio, schiacciata e difesa mentre ti immergi in un ambiente supportivo e appassionato.',
    icon: faVolleyball,
  },
  {
    name: 'Competizioni entusiasmanti',
    description: 'Partecipa alle nostre emozionanti competizioni interne e esterne. Sfida te stesso e fai crescere la tua esperienza di gioco, creando momenti memorabili sul campo da volley insieme alla nostra squadra.',
    icon: faMedal,
  },
  {
    name: 'Spirito di squadra ed amicizia',
    description: 'Oltre al campo, coltiva amicizie solide e uno spirito di squadra che va al di là del gioco. Condividi momenti indimenticabili fuori dal campo, rafforzando i legami con i tuoi compagni di squadra e creando ricordi che dureranno una vita.',
    icon: faUserGroupSimple,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {

  return (
    <div className="bg-slate-50">
    
    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    
    <div className="bg-white">

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Il volley nel cuore dell&apos;azione DLF
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Scopri la passione e l&apos;energia dello sport con la nostra vibrante comunità di giocatori di volley. Unisciti a noi per vivere momenti di sfida, divertimento e amicizia, dove la pallavolo diventa una vera e propria esperienza di squadra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroVolley.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Esplosione di energia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gioca, impara e vivi l&apos;entusiasmo con noi!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La nostra squadra di appassionati atleti ti invita a unirti alle nostre sessioni di allenamento coinvolgenti e a partecipare a emozionanti partite. Con un&apos;atmosfera accogliente e un impegno comune per il divertimento, il nostro campo da volley diventa il luogo ideale per coltivare le tue abilità sportive e creare legami duraturi. Sia che tu sia un principiante o un giocatore esperto, troverai la tua dimensione nella nostra squadra di volley DLF.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FontAwesomeIcon icon={feature.icon} className="flex-none text-indigo-800 fa-md" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    </main>
    
    <Faq />
    
    <Footer />

    <Warning />


    </div>
  )
}
