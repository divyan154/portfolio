import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-700">
        Hi, I'm Divyansh 👋
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Full Stack Developer | Building things for the web
      </p>
      <Link
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg
        shadow hover:bg-blue-700"
      >
        View Projects
      </Link>
    </section>
  );
}
