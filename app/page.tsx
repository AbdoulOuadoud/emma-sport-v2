import PromoBar from "@/components/home/PromoBar";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import WhyEmma from "@/components/home/WhyEmma";
import CTABand from "@/components/home/CTABand";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <FeaturedProducts />
        <Categories />
        <WhyEmma />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
