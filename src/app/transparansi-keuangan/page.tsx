import PageBanner from "@/components/PageBanner";
import { TransparansiKeuanganSection } from "@/components/TransparansiKeuangan";
import DanboxLayout from "@layout/DanboxLayout";

const TransparansiKeuanganPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Transparansi Keuangan" />
      <TransparansiKeuanganSection />
    </DanboxLayout>
  );
};

export default TransparansiKeuanganPage;
