import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import USPBar from "@/components/USPBar";
import Categories from "@/components/Categories";
import Menu from "@/components/Menu";
import FreshBanner from "@/components/FreshBanner";
import Story from "@/components/Story";
import Sustainability from "@/components/Sustainability";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <USPBar />
        <Categories />
        <Menu />
        <FreshBanner />
        <Story />
        <Sustainability />
        <Gallery />
        <Testimonials />
        <OrderCTA />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
