import {
  SejarahSection,
  VisiMisiSection,
  ProfilWilayahPreview,
} from "@/components/About";
import { CounterSection } from "@/components/CounterSection";
import { Gallery1 } from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
import { Team } from "@/components/Team";
import DanboxLayout from "@layout/DanboxLayout";

const AboutPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Tentang Kami" />
      <SejarahSection />
      <VisiMisiSection />
      <CounterSection />
      <ProfilWilayahPreview />
      <Team />
      <Gallery1 />
    </DanboxLayout>
  );
};

export default AboutPage;
