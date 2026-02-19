import { DataWargaAccordion } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@layout/DanboxLayout";

const DataWargaPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Data Warga & Statistik" />
      <DataWargaAccordion />
    </DanboxLayout>
  );
};

export default DataWargaPage;
