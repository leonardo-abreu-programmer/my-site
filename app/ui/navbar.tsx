import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bg-theme top-0 left-0 h-16 grid grid-cols-3 justify-items-center w-full xl:px-96 p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  )
}
