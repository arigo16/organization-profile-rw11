import { WilayahSection } from "@/components/Event";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

const WilayahPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Gambaran Wilayah" />
      <WilayahSection />
    </DanboxLayout>
  );
};

export default WilayahPage;
