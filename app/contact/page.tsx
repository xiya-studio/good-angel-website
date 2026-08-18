import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="CONTACT US"
          title="與我們聯絡"
          description="無論你想進一步了解好天使、加入團隊，或洽詢合作相關事宜，都歡迎透過電話或 Email 與我們聯繫。"
        />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
