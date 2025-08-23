import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="flex gap-6">
        <Link href="/" className="hover:bg-sky-700">
          Home
        </Link>
        <Link href="/about" className="hover:bg-sky-700">
          About
        </Link>
        <Link href="/projects" className="hover:bg-sky-700">
          Projects
        </Link>
        <Link href="/contact" className="hover:bg-sky-700">
          Contact
        </Link>
      </div>
    </nav>
  );
}
