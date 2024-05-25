// Next.js imports
import Link from 'next/link'

// Icons imports
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="pt-11 text-2xl font-semibold">hola, I&apos;m Filip</h1>
      <p className="pt-8">
        I’m a Front-end developer and UI/UX designer, driven by optimism and a passion for building cool stuff. At{' '}
        <Link href="/" className="underline">
          Sikmo.cz
        </Link>
        , I bring creativity and innovation to life, crafting engaging digital experiences that inspire.
      </p>
      <div className="flex flex-col gap-4 pt-8">
        <Link href="/">
          <span className="pr-4 text-neutral-400">February 14, 2024</span>Tnyli: url shortener with branded links
        </Link>
        <Link href="/">
          <span className="pr-4 text-neutral-400">January 12, 2024</span> Marali-receptury: bar list & drink tutorials
        </Link>
        <Link href="/">
          <span className="pr-4 text-neutral-400">September 5, 2023</span>Pismoletka: touch typing interactive web-app
        </Link>
      </div>
      <div className="flex gap-4 pt-16">
        <Link href="/" className="flex">
          <ArrowUpRight strokeWidth="1.5" />
          github
        </Link>
        <Link href="/" className="flex">
          <ArrowUpRight strokeWidth="1.5" />
          view source
        </Link>
      </div>
    </>
  )
}
