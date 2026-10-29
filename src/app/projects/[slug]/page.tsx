import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.name} | Md Asraful Islam`
      : "Project Not Found",
    description: project?.description,
  };
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="section">
      <div className="container project-details">
        <Link href="/#projects" className="text-link">
          ← Back to Projects
        </Link>

        <div className="details-heading">
          <p className="eyebrow">PROJECT DETAILS</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>

        <Image
          src={project.image}
          alt={`${project.name} homepage screenshot`}
          width={1600}
          height={850}
          priority
          sizes="(max-width: 1140px) 92vw, 1100px"
          className="details-image"
        />

        <div className="button-group details-buttons">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Live Project ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            Client GitHub ↗
          </a>
        </div>

        <section className="details-section">
          <h2>Main Technology Stack</h2>

          <div className="technology-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="details-section">
          <h2>Development Challenges</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="details-section">
          <h2>Future Improvements & Plans</h2>
          <p>{project.futurePlans}</p>
        </section>
      </div>
    </main>
  );
}