// Next.js imports
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// Styles imports
import '../styles/globals.css'

// Components imports
import Header from '@/components/header'
import Footer from '@/components/footer'

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Filip Dadaj portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-black font-sans text-base tracking-tight text-white antialiased selection:bg-violet-300 selection:text-violet-900">
        <main className="relative m-auto max-w-[540px] px-5">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
