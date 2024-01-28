"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faLocationPin, faHouseTree } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';

const features = [
  {
    name: 'Passione per la natura',
    description: 'Il GEAM si distingue per la sua comunità di ferrovieri appassionati di montagna. Gestito da un Comitato Tecnico, il gruppo organizza settimanalmente diverse escursioni, adattandosi alle esigenze e ai livelli di esperienza dei partecipanti.',
    icon: faTree,
  },
  {
    name: 'Il punto di ritrovo',
    description: 'Ogni giovedì, il GEAM si ritrova presso la sede sociale del D.L.F., diventando un punto di aggregazione per i soci. Qui, si svolgono periodiche proiezioni di diapositive, creando un ambiente coinvolgente per gli amanti della montagna.',
    icon: faLocationPin,
  },
  {
    name: 'Casa vivaio',
    description: 'Il GEAM gestisce con dedizione la "Casa Vivaio", un rifugio situato sopra Tambre, con 16 posti letto. Oltre a diventare un luogo di ritrovo, la casa ospita una settimana dedicata ai ragazzi con escursioni e attività culturali, promuovendo la conoscenza e il rispetto dell\'ambiente naturale.',
    icon: faHouseTree,
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
                  Esplora la natura: escursionismo con passione
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Benvenuto nella nostra sezione dedicata all&apos;escursionismo, un&apos;opportunità emozionante per connettersi con la natura e scoprire scenari mozzafiato. Unisciti a noi nelle nostre avventure all&apos;aria aperta, esplorando sentieri panoramici e vivendo esperienze indimenticabili immersi nella bellezza della natura.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroEscursionismo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Amore per la montagna</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Esplorando le vette: la storia affascinante del GEAM
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nella vibrante atmosfera degli anni &apos;70, un gruppo di ferrovieri condivise la passione per la montagna, dando vita al GEAM. Nonostante gli inizi informali, la passione comune per la natura selvaggia e le vette incontaminate li guidò a formare ufficialmente il gruppo nel 1979. Il GEAM cresceva come una famiglia di amici, accomunati dalla gioia di esplorare le Dolomiti e le valli circostanti. Nel corso degli anni, il GEAM ha adottato nuove tecnologie per organizzare escursioni e documentare le avventure, ma l&apos;amore per la montagna rimane inalterato. Il gruppo ha attraversato generazioni, trasmettendo la passione ai figli e ai nipoti, garantendo una continuità che riflette il rispetto eterno per la maestosità della natura.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <a href="/associazione" className="text-indigo-600 underline underline-offset-2">
              Vai al sito del GEAM <span aria-hidden="true">&rarr;</span>
            </a>
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

    <Banner />

    </main>
    
    <Faq />
    
    <Footer />

    <Warning />


    </div>
  )
}
