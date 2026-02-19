import PageBanner from "@/components/PageBanner";
import { VolunteersPage } from "@/components/Volunter";
import DanboxLayout from "@layout/DanboxLayout";

const TeamPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Struktur Pengurus" />
      <VolunteersPage />
    </DanboxLayout>
  );
};

export default TeamPage;
