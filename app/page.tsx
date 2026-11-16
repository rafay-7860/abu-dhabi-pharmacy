import { About } from "@/sections/About";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { VisitLocation } from "@/sections/VisitLocation";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About preview />
      <VisitLocation />
      <Services limit={3} showCta />
      <Categories limit={4} showCta />
      <WhyChooseUs />
      <Contact showForm={false} />
    </>
  );
}
