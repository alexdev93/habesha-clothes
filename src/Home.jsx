/** @jsxImportSource @emotion/react */
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import PromoBanner from "./components/PromoBanner";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";

// Dummy products
// const dummyProducts = [
//   { id: 1, name: "T-shirt", price: "29.99", image: "/images/tshirt.jpg" },
//   { id: 2, name: "Jeans", price: "49.99", image: "/images/jeans.jpg" },
//   { id: 3, name: "Jacket", price: "89.99", image: "/images/jacket.jpg" },
// ];

// Dummy categories
// const categories = ["Men", "Women", "Accessories"];

export default function Home() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <div style={{ height: "6.75rem" }} /> {/* Spacer for fixed navbar */}
      <div
        style={{
          position: "relative",
          overflow: "auto",
          width: "100vw",
        }}
      >
        <HeroSection
          title="Style Redefined"
          subtitle="Discover the latest trends in fashion"
          buttonText="Shop Now"
          image="/images/hero-banner.jpg"
        />
        <Footer />
      </div>
      {/* 
      <CategorySection categories={categories} />
      <ProductSection title="New Arrivals" products={dummyProducts} />
      <PromoBanner
        discountCode="FIRST20"
        message="20% OFF on First Order"
        buttonText="Shop Now"
      />
      <NewsletterSection />
       */}
    </div>
  );
}
