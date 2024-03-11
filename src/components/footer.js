"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Tennis-Comunali-Trissino-100091829936615/',
    icon: faFacebook
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {

  return (

    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-600">
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} className="fa-lg" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Tennis Comunali Trissino, tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>

  )
}