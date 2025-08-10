import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QRPaymentModal } from "./QRPaymentModal";
import { Home, BookOpen, MessageSquare, GraduationCap, Heart, Youtube, Facebook, Phone, Mail } from "lucide-react";
import avatarImage from "@/assets/anime-avatar.jpg";

export const SidebarNavigation = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Sidebar Navigation - Fixed Position */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        {/* Profile Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-xl border border-border max-w-[280px]">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary">
              <img 
                src={avatarImage} 
                alt="Avatar Tuấn & Quân" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Tuấn & Quân</h3>
            <p className="text-sm text-muted-foreground">Chia sẻ kiến thức lập trình</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group w-full max-w-[200px]"
          >
            <Home className="h-5 w-5" />
            <span className="text-sm font-medium">Trang chủ</span>
          </button>
          
          <button
            onClick={() => scrollToSection('services')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group w-full max-w-[200px]"
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium">Khóa học</span>
          </button>
          
          <button
            onClick={() => window.open('https://chatgpt.com', '_blank')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group w-full max-w-[200px]"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-medium">Chat với AI</span>
          </button>
          
          <button
            onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group w-full max-w-[200px]"
          >
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-medium">Vào học ngay</span>
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mb-6">
          <button 
            onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
            className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Youtube className="h-5 w-5" />
          </button>
          <button 
            onClick={() => window.open('https://facebook.com', '_blank')}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Facebook className="h-5 w-5" />
          </button>
          <button 
            onClick={() => window.open('tel:0375020190', '_blank')}
            className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
          </button>
          <button 
            onClick={() => window.open('mailto:lequan12305@gmail.com', '_blank')}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="h-5 w-5" />
          </button>
        </div>
        
        {/* Support Button */}
        <button
          onClick={() => setShowQRModal(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group w-full max-w-[200px]"
        >
          <Heart className="h-5 w-5" />
          <span className="text-sm font-medium">Ủng hộ</span>
        </button>
      </div>

      <QRPaymentModal 
        isOpen={showQRModal} 
        onClose={() => setShowQRModal(false)} 
      />
    </>
  );
};