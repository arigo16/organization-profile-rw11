import { DaftarAsetTab } from "@/components/Causes";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

const AsetPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Daftar Aset" />
      <DaftarAsetTab />
    </DanboxLayout>
  );
};

export default AsetPage;
