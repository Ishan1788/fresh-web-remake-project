
import { Search, Bell, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-5xl font-black tracking-wider mb-16">SUCCESS ISN'T GIVEN</h2>
          <FeaturedProducts />
          <div className="flex justify-center mt-12">
            <Button className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-8 py-6">
              <ShoppingBag className="mr-2 h-5 w-5" />
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
