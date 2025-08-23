import Link from "next/link";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="bg-gray-700 ">
      <h1>Projects</h1>
      <div className="flex flex-col items-start ">
        <Link href="">Campgrounds - A full stack web applications</Link>
        <Link href="">Ai Blog Application - A full stack web applications</Link>
        <Link href="">
          Quote Generator Website - A full stack web applications
        </Link>
      </div>
    </div>
  );
}
