import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import FromSection from "./components/FromSection"; // Import the new component
import BlogSection from "./components/BlogSection";
import GallerySection from "./components/GallerySection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <GallerySection />
        <FromSection /> {/* Use the new component */}
        <Footer />
      </div>
    </main>
  );
}
