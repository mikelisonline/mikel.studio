import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import MusicCard from "@/components/MusicCard";
import PhotoCard from "@/components/PhotoCard";
import SectionHeader from "@/components/SectionHeader";
import Divider from "@/components/Divider";
import { projects } from "@/data/projects";
import { albums } from "@/data/music";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        {/* Hero */}
        <Hero />

        <Divider />

        {/* Projects */}
        <section>
          <SectionHeader labelKey="sections.projects" />
          <Carousel>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Carousel>
        </section>

        <Divider />

        {/* Music */}
        <section>
          <SectionHeader labelKey="sections.music" />
          <Carousel>
            {albums.map((album) => (
              <MusicCard key={album.id} album={album} />
            ))}
          </Carousel>
        </section>

        <Divider />

        {/* Photography */}
        <section>
          <SectionHeader labelKey="sections.photography" />
          <Carousel>
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </Carousel>
        </section>
      </main>
    </div>
  );
}
