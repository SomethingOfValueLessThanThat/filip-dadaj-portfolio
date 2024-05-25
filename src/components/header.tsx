// Next.js imports
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between gap-4 py-8">
      <div className="flex flex-wrap gap-4">
        <Link href="/">home</Link>
        <Link href="/setup">setup</Link>
        <Link href="/about">about</Link>
      </div>
      <p>monospaced</p>
    </header>
  )
}
