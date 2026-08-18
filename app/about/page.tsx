import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="ABOUT GOOD ANGEL"
          title="認識好天使"
          description="我們結合不動產實務、財商教育與人才培育，讓不同背景的夥伴在學習、交流與實務累積中，逐步建立自己的專業方向。"
        />

        <About />
      </main>

      <Footer />
    </>
  );
}
