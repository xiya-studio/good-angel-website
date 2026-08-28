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
          eyebrow="OUR EXPERTISE"
          title="專業，從理解到實踐"
          description="從不動產實務、財商思維到專業成長，我們把知識、經驗與團隊交流串成一條能持續累積的成長路徑。"
          number="02"
          backgroundText="EXPERTISE"
        />

        <Services />
      </main>

      <Footer />
    </>
  );
}
