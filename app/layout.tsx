import type { Metadata } from 'next'
import Navbar from './ui/navbar'
import Footer from './ui/footer'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Leo',
  description: 'Leo website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className="bg-theme text-white relative w-full min-h-full grid">
        <Navbar/>
        <main className="pt-16 pb-12 xl:px-72 p-4 grid gap-4">
          {children}
        </main>
        <Footer/>   
      </body>
    </html>
  )
}
