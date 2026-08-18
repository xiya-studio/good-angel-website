import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          eyebrow="OUR PEOPLE"
          title="認識我們的團隊"
          description="來自不同背景與專業領域的夥伴，在交流、協作與實務累積中彼此學習，一起建立屬於好天使的團隊文化。"
        />

        <Team />
      </main>

      <Footer />
    </>
  );
}
