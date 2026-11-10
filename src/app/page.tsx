import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main className="bg-[#fcfaf7] ">
        <Navbar />
        <Hero/>
      </main>
    </div>
  );
}