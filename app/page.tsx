import { Feature } from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16 px-10 md:py-20 md:px-20">
      <Hero />
      <Feature />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
