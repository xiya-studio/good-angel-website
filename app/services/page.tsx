import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="OUR SERVICES"
          title="我們提供的專業學習內容"
          description="從購屋策略、稅務觀念到資產配置，建立完整的不動產財商思維。"
        />

        <Services />
      </main>

      <Footer />
    </>
  );
}
