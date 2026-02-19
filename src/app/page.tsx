import { SambutanSection } from "@/components/About";
import { AsetPreview } from "@/components/Causes";
import { Contact } from "@/components/Contact";
import { CounterSection } from "@/components/CounterSection";
import { HeroSlider1 } from "@/components/HeroSlider";
import { News1 } from "@/components/News";
import { Service1 } from "@/components/Service";
import { Team } from "@/components/Team";
import DanboxLayout from "@layout/DanboxLayout";

const page = () => {
  return (
    <DanboxLayout header={1} footer={1}>
      <HeroSlider1 />
      <SambutanSection />
      <CounterSection />
      <Service1 />
      <AsetPreview />
      <Team />
      <News1 />
      <Contact />
    </DanboxLayout>
  );
};

export default page;
