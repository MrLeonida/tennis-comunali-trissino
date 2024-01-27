"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTieHair, faUserTieHairLong, faUserGroupSimple } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';

const timeline = [
  {
    name: 'Fondazione del DLF',
    description: 'La ferrovia, simbolo di cambiamento sociale, ispira nel 1925 il Dopolavoro Ferroviario, il più grande e pionieristico dopolavoro. I ferrovieri, dopo il lavoro, trovano nel DLF la possibilità di partecipare a iniziative culturali e sportive.',
    date: '1925-1935',
    dateTime: '1925-01',
  },
  {
    name: 'Crescita ed attività del DLF',
    description: 'La rete ferroviaria e lo spirito di corpo accelerano la crescita del DLF, con 273 sedi e 135 mila soci nel 1935. Negli anni \'70 e \'90, trasformazioni significative portano autonomia, investimenti e gestione delle mense ferroviarie.',
    date: '1935-1970',
    dateTime: '1935-01',
  },
  {
    name: 'Nascita dell\'associazione nazionale',
    description: 'Nel 1995, il DLF diventa Associazione Nazionale, rispondendo alla trasformazione delle Ferrovie dello Stato. La riforma statutaria riflette l\'evoluzione verso il "non-profit" e il coinvolgimento nel "terzo settore"',
    date: '1995',
    dateTime: '1995-01',
  },
  {
    name: 'Trasformazioni e nuovi orizzonti',
    description: 'Dal 2000, sfide sulla valorizzazione degli immobili spingono il DLF a pagare canoni locativi e acquisire parte degli immobili. Con quasi 100 anni di storia, la struttura matura anticipa nuovi orizzonti con la Società Patrimonio DLF e la prossima "Fondazione DLF".',
    date: '2000-oggi',
    dateTime: '2000-01',
  },
]
const people = [
  {
    name: 'Badami Alessandro',
    role: 'Presidente',
    icon: faUserTieHair,
  },
  {
    name: 'Busato Daniela',
    role: 'Vice presidente',
    icon: faUserTieHairLong,
  },
  {
    name: 'Terziario Michele',
    role: 'Amministratore',
    icon: faUserTieHair,
  },
  {
    name: 'Consiglieri',
    role: 'Bertocco Vittorio\nBaratta Nicoletta\nVerdone Maria Giuseppina\nVisentin Roberto',
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
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Radici solide, iniziative dinamiche, un&apos;unione di soci in continua crescita.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Attraverso iniziative sportive, culturali, e ricreative, miriamo a potenziare l&apos;utilizzo del tempo libero, migliorare le condizioni di crescita culturale e sociale degli iscritti, e favorire l&apos;armonizzazione della vita associativa attraverso lo scambio di valori ed esperienze, coinvolgendo non solo gli associati ma anche le loro famiglie.
                </p>
              </div>
              <img
                src="/heroAssociazioneMin.jpg"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-slate-50 sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32 mt-24 sm:mt-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Incontra il nostro team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Il nostro team è il cuore pulsante dietro le attività coinvolgenti e le iniziative che rendono il nostro dopolavoro un luogo vibrante e accogliente. Conosci le persone appassionate e dedite che lavorano instancabilmente per creare un&apos;esperienza unica per i nostri soci.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <FontAwesomeIcon icon={person.icon} className="h-16 w-16 text-indigo-600 fa-2xl" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600" style={{whiteSpace: 'pre-wrap'}}>{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We approach the workplace as something that adds to our lives and adds value to world.
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu.
              Cras purus nibh cursus sit eu in id. Integer vel nibh.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Vel labore deleniti veniam consequuntur sunt nobis.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  We’re proud that our customers have made over $8 billion in total revenue.
                </p>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                <p className="mt-2 text-base leading-7 text-indigo-200">
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>


      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>


    </main>


    <Footer />

    <Warning />


    </div>
  )
}
