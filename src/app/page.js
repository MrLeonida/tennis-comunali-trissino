"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildings, faPhone, faEnvelope } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import AppStore from '@/components/appStore';
import GooglePlay from '@/components/googlePlay';


const stats = [
  { id: 1, name: 'Campi in terra rossa con struttura fissa', value: '2' },
  { id: 2, name: 'Campi in erba sintetica con struttura fissa (anche calcetto)', value: '2' },
  { id: 3, name: 'Tesserati adulti e ragazzi, amatori ed agonisti', value: '50+' },
  { id: 4, name: 'Maestri qualificati con certificazioni FIT', value: 'Staff' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {

  async function handleSubmit(event) {
    const formData = new FormData(event.target)
    try {
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });
        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])
        alert('Grazie! L\'email è stata inviata correttamente. Ti ricontattiamo il prima possibile!');
    } catch (err) {
        console.error(err);
        alert("Ci dispiace! L'email non è stata inviata. Ti suggeriamo di contattarci con gli altri metodi indicati su questa pagina.");
    }
  };

  return (
    <div className="bg-slate-800">
    
    <Warning />
    
    <Header />

    <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/heroHome.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-700/50"></div>
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
              Il tennis come scuola di vita
            </h1>
            <p className="mt-6 text-md text-slate-100 font-medium mx-5 md:mx-0 sm:text-xl">
              Situato nel cuore del polo sportivo vicentino, il nostro club offre lezioni per ragazzi e adulti. Un ambiente accogliente e stimolante dove crescere e divertirsi!
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 mx-5 md:mx-0">
              <div className="inline-flex">
                <a href="https://apps.apple.com/it/app/wansport/id6445919117">
                  <AppStore />
                </a>
              </div>
              <div className="inline-flex">
                <a href="https://play.google.com/store/apps/details?id=com.wansport.community">
                  <GooglePlay />
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

      
      <div className="relative bg-slate-900">
      <div className="relative h-80 overflow-hidden bg-sky-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/heroTennis.jpg"
          alt=""
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-slate-700/50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-sky-500">I nostri valori, dentro e fuori dal campo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Scuola tennis per avviamento, perfezionamento ed agonistica</p>
          <p className="mt-6 text-base leading-7 text-slate-200">
            Il tennis è uno sport dove si cresce imparando il valore delle regole; una scuola di vita che insegna a lottare nel rispetto dell&apos;avversario e dei tuoi compagni. Condividiamo questo ideale tanto da trasformare la nostra passione per il tennis in una vera e propria professione.<br />Il nostro tennis club è sempre più parte attiva del polo tennistico vicentino, schierando uno staff in cui professionalità e competenza sono le parole d&apos;ordine.<br />Ogni giorno scendiamo in campo mettendo a disposizione il nostro bagaglio di competenze tecniche e le nostre qualità umane, per aiutare i nostri atleti a migliorare dentro e fuori dal campo.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">
              Il nostro polo sportivo
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
             Superfici diverse per creare un ambiente unico e stimolante per giocatori di tutti i livelli, dalle partite amichevoli agli allenamenti intensi. Inoltre, i nostri maestri possono vantare anni di esperienza nel campo ed una passione contagiosa per lo sport. Con il loro bagaglio tecnico saranno in grado di aiutarti a migliorare le tue abilità, affinare la tua tecnica e raggiungere i tuoi obiettivi di gioco. Che tu sia un principiante in cerca di apprendimento oppure un giocatore esperto in cerca di perfezionamento, i nostri maestri saranno al tuo fianco in ogni fase del tuo viaggio tennistico.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-sky-100 p-8">
                <dt className="text-sm font-semibold leading-6 text-sky-800">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-sky-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div> 

    
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-100 lg:w-1/2">
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Rimani in contatto</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Per contattarci o avere ulteriori informazioni potrai telefonare, scrivere una mail al nostro indirizzo oppure utilizzare i nostri canali social. Ti forniremo una risposta nel più breve tempo possibile.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-700">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Dove siamo</span>
                  <FontAwesomeIcon icon={faBuildings} className="text-sky-900 fa-lg" />
                </dt>
                <dd>
                  <span className="font-semibold text-sky-900">Dove siamo</span>
                  <br />
                  Via Palladio, 24
                  <br />
                  36070 Trissino (VI)
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefono</span>
                  <FontAwesomeIcon icon={faPhone} className="text-sky-900 fa-lg" />
                </dt>
                <dd>
                  <span className="font-semibold text-sky-900">Per chiamarci</span>
                  <br />
                  <a className="hover:text-slate-900 underline underline-offset-2" href="tel:+39 320 8080670">
                    +39 320 8080670
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FontAwesomeIcon icon={faEnvelope} className="text-sky-900 fa-lg" />
                </dt>
                <dd>
                  <span className="font-semibold text-sky-900">Per scriverci</span>
                  <br />
                  <a className="hover:text-slate-900 underline underline-offset-2" href="mailto:info@tenniscomunalitrissino.it">
                    info@tenniscomunalitrissino.it
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  Nome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                  Cognome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-slate-900">
                  Numero di telefono
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                  Messaggio
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-sky-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Invia il messaggio
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <Warning />

    </div>
  )
}
