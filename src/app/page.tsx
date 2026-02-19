import { SambutanSection } from "@/components/About";
import { AsetPreview } from "@/components/Causes";
import { Contact1 } from "@/components/Contact";
import { CounterSection1 } from "@/components/CounterSection";
import { HeroSlider1 } from "@/components/HeroSlider";
import { News1 } from "@/components/News";
import { Service1 } from "@/components/Service";
import { Team1 } from "@/components/Team";
import DanboxLayout from "@layout/DanboxLayout";

const page = () => {
  return (
    <DanboxLayout header={1} footer={1}>
      <HeroSlider1 />
      <SambutanSection />
      <CounterSection1 />
      <Service1 />
      <AsetPreview />
      <Team1 />
      <News1 />
      <Contact1 />
    </DanboxLayout>
  );
};

export default page;
