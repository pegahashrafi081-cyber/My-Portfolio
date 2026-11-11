import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <main className="bg-[#fcfaf7] ">
        <Navbar />
        <Hero/>
        <Work/>
        <Services/>
        <About/>
        <Blog/>
        <Contact/>
      </main>
    </div>
  );
}
