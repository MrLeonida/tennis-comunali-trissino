"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBells } from '@fortawesome/pro-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Warning() {

  return (

    <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
    <p className="text-sm leading-6 text-white">
        <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
        Questo sito web è in costruzione, torna a trovarci a Marzo 2024 per scoprire tutte le novità.
    </p>
  </div>

  )
}