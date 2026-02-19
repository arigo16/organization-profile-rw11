import PageBanner from "@/components/PageBanner";
import { TransparansiInfaqSection } from "@/components/TransparansiInfaq";
import DanboxLayout from "@layout/DanboxLayout";

const TransparansiInfaqPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Transparansi Infaq" />
      <TransparansiInfaqSection />
    </DanboxLayout>
  );
};

export default TransparansiInfaqPage;
