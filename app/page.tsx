import { About } from "@/sections/About";
import { Categories } from "@/sections/Categories";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About preview />
      <Services limit={3} showCta />
      <Categories limit={4} showCta />
      <WhyChooseUs />
      <Contact showForm={false} />
    </>
  );
}
