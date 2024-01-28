"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faLeaf, faTrain, faCamera } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Banner from '@/components/banner';
import Faq from '@/components/faq';

const highligths = [
  {
    title: 'Viaggiando con passione',
    text: 'Esplora il mondo con le nostre avvincenti gite turistiche, anche in collaborazione con Bontur Viaggi.',
    icon: faPlane,
  },
  {
    title: 'Natura ed avventura',
    text: 'Dalle escursioni montane alle passeggiate culturali, esploriamo insieme il mondo che ci circonda.',
    icon: faLeaf,
  },
  {
    title: 'Costruendo mondi in miniatura',
    text: 'Sperimenta l\'arte del fermodellismo con la costruzione di plastici e la partecipazione alle nostre mostre.',
    icon: faTrain,
  },
  {
    title: 'Catturando istanti, creando memorie',
    text: 'Scopri l\'arte della fotografia attraverso corsi formativi e partecipa alle nostre emozionanti mostre.',
    icon: faCamera,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div className="bg-slate-50">
    
    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    
    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Esplora il mondo culturale DLF
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Nel corso degli anni, le Associazioni del Dopolavoro Ferroviario hanno organizzato eventi di rilievo nazionale, diventando un punto di riferimento nelle realtà cittadine.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/imageCultura1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/imageCultura2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageCultura3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/imageCultura4.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageCultura5.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4f46e5] to-[#0d9488] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <p className="mt-6 text-2xl font-semibold leading-10 text-white">
                    Tariffe ed orari per i soci
                </p>
                <p className="mt-2 text-md leading-6 text-slate-100">
                    <span className='font-medium'>Fermodellismo:</span> 15,00€
                </p>
                <p className="mt-2 text-md leading-6 text-slate-100">
                  <span className='font-medium'>Fotografia:</span> 15,00€ (ritrovo il lunedì sera)
                </p>
                <figcaption className="mt-6 text-sm leading-6 text-slate-300 underline underline-offset-2">
                  <a href="/contatti">
                    Contattaci per maggiori informazioni <span aria-hidden="true">&rarr;</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-800">L&apos;essenza del DLF</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                I valori e le attività della nostra associazione
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                La cultura è un pilastro fondamentale nel DLF, con la preservazione della memoria, la prospettiva aperta sul mondo e l&apos;utilizzo della tecnologia come strumento chiave.Le attività culturali, come concorsi fotografici, competizioni letterarie e mostre, riflettono l&apos;impegno del DLF nel soddisfare le diverse esigenze dei suoi soci.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {highligths.map((highligth) => (
                  <li key={highligth.title} className="flex gap-x-3">
                    <FontAwesomeIcon icon={highligth.icon} className="mt-1 h-5 w-5 flex-none text-teal-800 fa-lg" />
                    <span>
                      <strong className="font-semibold text-gray-900">{highligth.title}</strong>. {highligth.text}</span>
                  </li>
                ))}
              </ul>
                <p className="mt-8">
                Crediamo nel favorire la collaborazione, abbracciare la diversità e coltivare un ambiente in cui ogni membro del team prospera. Unisciti a noi mentre affrontiamo insieme il futuro del lavoro, guidati dall&apos;impegno per l&apos;innovazione, l&apos;inclusività e il successo di ciascun individuo nella nostra dinamica comunità remota.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a href="/associazione" className="text-base font-semibold leading-7 text-teal-800 underline underline-offset-2">
                Approfondisci la nostra realtà <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
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
