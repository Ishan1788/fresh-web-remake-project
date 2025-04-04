
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] bg-gray-900 text-white overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{ backgroundImage: "url('/lovable-uploads/6887a9b3-9958-4e09-b67a-9e1b22e275ee.png')" }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-md px-8 sm:px-16">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          The future of sports is here
        </h1>
        <p className="mb-8 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6">
            Discover Us
          </Button>
        </div>
        
        {/* Posts tag */}
        <div className="absolute bottom-4 left-8 sm:left-16 flex items-center text-purple-400 text-sm">
          <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
          Posts Tall
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
