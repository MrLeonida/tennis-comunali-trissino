"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof, faWreathLaurel, faFutbol } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

const features = [
  {
    name: 'Allenamenti professionali',
    description: 'Partecipa ai no stri allenamenti per migliorare le tue capacità nel calcetto. I nostri istruttori esperti ti guideranno attraverso esercizi mirati e strategie di gioco.',
    icon: faFutbol,
  },
  {
    name: 'Competizioni agonistiche e amichevoli',
    description: 'Prendi parte alle nostre competizioni e mettiti alla prova contro i migliori giocatori della zona. Affronta sfide avvincenti, mostra le tue abilità e competi per la gloria sul campo da calcetto.',
    icon: faWreathLaurel,
  },
  {
    name: 'Campo coperto',
    description: 'Il nostro circolo offre un campo da calcetto sintetico coperto, consentendoti di giocare e allenarti indipendentemente dalle condizioni meteorologiche.',
    icon: faPeopleRoof,
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
                  Calcetto: Passione, Squadra e Competizione
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Entra in campo con il Calcetto, dove la passione per il gioco si unisce alla competizione e allo spirito di squadra. Che tu sia un calciatore esperto o stia iniziando il tuo percorso nel mondo del calcio, c&apos;è un posto per te nella nostra squadra!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroCalcetto.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Vivi l&apos;adrenalina</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Eleva il tuo gioco al prossimo livello
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Affina le tue abilità e migliora la tua tecnica con i nostri allenamenti dedicati. Il Calcetto non è solo competizione, ma anche un&apos;opportunità per crescere come giocatore. Sotto la guida di allenatori esperti, potrai perfezionare il tuo stile di gioco e acquisire nuove competenze che faranno la differenza sul campo.
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
