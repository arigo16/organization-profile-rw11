import {
  SejarahSection,
  VisiMisiSection,
  ProfilWilayahPreview,
} from "@/components/About";
import { CounterSection1 } from "@/components/CounterSection";
import { Gallery1 } from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";
import { Team2 } from "@/components/Team";
import DanboxLayout from "@layout/DanboxLayout";

const AboutPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Tentang Kami" />
      <SejarahSection />
      <VisiMisiSection />
      <CounterSection1 />
      <ProfilWilayahPreview />
      <Team2 />
      <Gallery1 />
    </DanboxLayout>
  );
};

export default AboutPage;
