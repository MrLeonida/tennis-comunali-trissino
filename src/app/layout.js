import { Poppins } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const fontFamily = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ['latin'] })

export const metadata = {
  title: 'Tennis Comunali Trissino',
  description: 'Tennis Comunali Trissino',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#115e59"></meta>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={fontFamily.className}>{children}</body>
    </html>
  )
}
