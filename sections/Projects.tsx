import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "A full-stack web app where users can create, review, and browse campgrounds.",
      image: "/yelpcamp.png",
      tech: ["Node.js", "Express", "MongoDB", "AWS"],
      link: "https://yelp-camp-ttec-bebtvss9l-divyan154s-projects.vercel.app/",
      github: "https://github.com/divyan154/yelpcamp",
    },
    {
      title: "Ai blog Application",
      description:
        "A full stack app which leverages Gemini Api to generate blogs.",
      image: "/aiapp.png",
      tech: ["Next.js", "Clerk", "AppWrite", "Tailwind CSS"],
      link: "https://aiblog-app-taupe.vercel.app/",
      github: "https://github.com/divyan154/aiblogApp",
    },
    {
      title: "Learning Management System",
      description: "A Platform like udemy Where anyone can learn anything.",
      image: "/lms.png",
      tech: ["Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://learning-management-system-sepia-one.vercel.app/",
      github: "https://github.com/divyan154/learning-management-system",
    },
    {
      title: "Job Board",
      description:
        "A centralized platform where employers can post a job and seekers can apply to a job.",
      image: "/jobboard.png",
      tech: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
      link: "https://job-board-puce-six.vercel.app/",
      github: "https://github.com/divyan154/job-board",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-10 lg:px-20 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-[90rem] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
