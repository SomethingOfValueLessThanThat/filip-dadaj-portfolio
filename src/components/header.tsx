// Next.js imports
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap gap-4 py-8">
      <Link href="/" className='hover:text-neutral-400 transition-all'>home</Link>
      <Link href="/setup" className='hover:text-neutral-400 transition-all'>setup</Link>
      <Link href="/about" className='hover:text-neutral-400 transition-all'>about</Link>
    </header>
  )
}
