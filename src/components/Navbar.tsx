
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <div className="font-bold text-xl">TEMPEST</div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300">Link 1</a>
        <a href="#" className="hover:text-gray-300">Link 2</a>
        <a href="#" className="hover:text-gray-300">Link 3</a>
        <a href="#" className="hover:text-gray-300">Link 4</a>
      </div>
      <div className="flex items-center space-x-6">
        <Button variant="ghost" size="icon" className="text-white">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <User className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
