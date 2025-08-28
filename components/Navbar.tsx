export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="flex gap-6">
        <a href="#about" className="hover:bg-sky-700">
          About
        </a>
        <a href="#projects" className="hover:bg-sky-700">
          Projects
        </a>
        <a href="#contact" className="hover:bg-sky-700">
          Contact
        </a>
      </div>
    </nav>
  );
}
