import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import CarouselItem from "@/components/CarouselItem";
import ProjectCard from "@/components/ProjectCard";
import MusicCard from "@/components/MusicCard";
import PhotoCard from "@/components/PhotoCard";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { albums } from "@/data/music";
import { photos } from "@/data/photos";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <Hero />

      {/* Sections */}
      <div className="mt-32 space-y-16 md:space-y-32">
        {/* Projects */}
        <Carousel headlineKey="sections.projects">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              colSpan={{ large: 4, medium: 8, small: 10 }}
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </Carousel>

        <Divider />

        {/* Music */}
        <Carousel headlineKey="sections.music">
          {albums.map((album) => (
            <CarouselItem
              key={album.id}
              colSpan={{ large: 3, medium: 5, small: 8 }}
            >
              <MusicCard album={album} />
            </CarouselItem>
          ))}
        </Carousel>

        <Divider />

        {/* Photography */}
        <Carousel headlineKey="sections.photography">
          {photos.map((photo) => (
            <CarouselItem
              key={photo.id}
              colSpan={{ large: 4, medium: 5, small: 10 }}
            >
              <PhotoCard photo={photo} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      {/* Footer */}
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
