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
        <Link href="https://www.sikmo.cz/" className="underline">
          šikmo
        </Link>
        , I bring creativity and innovation to life, crafting engaging digital experiences that inspire.
      </p>
      <div className="flex flex-col gap-4 pt-8">
        <Link href="https://tny.li/" className="text-balance">
          <span className="pr-4 text-neutral-400 max-sm:block">February 14, 2024</span>Tnyli: url shortener with branded
          links
        </Link>
        <Link href="https://marali-receptury.vercel.app/" className="text-balance">
          <span className="pr-4 text-neutral-400 max-sm:block">January 12, 2024</span> Marali-receptury: bar list &
          drink tutorials
        </Link>
        <Link href="https://pismoletka.vercel.app/" className="text-balance">
          <span className="pr-4 text-neutral-400 max-sm:block">September 5, 2023</span>Pismoletka: touch typing
          interactive web-app
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 pt-16">
        <Link href="https://github.com/SomethingOfValueLessThanThat" className="flex">
          <ArrowUpRight strokeWidth="1.5" />
          github
        </Link>
        <Link href="https://github.com/SomethingOfValueLessThanThat/filip-dadaj-portfolio" className="flex">
          <ArrowUpRight strokeWidth="1.5" />
          view source
        </Link>
      </div>
    </>
  )
}
