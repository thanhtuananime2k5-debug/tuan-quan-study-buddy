import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/anime-coding-hero.jpg";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center px-4 py-12 pt-20 lg:py-20 lg:pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Tuấn & Quân
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Việc gì khó có Tuấn và Quân lo
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
            🎓 Hỗ trợ sinh viên đại học trong học tập, ôn thi và kỹ năng mềm – từ A đến Z, 
            tuyệt đối nói không với gian lận!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="green" 
              size="hero"
              className="group"
              onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop, behavior: 'smooth' })}
            >
              Đặt dịch vụ ngay
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="hero"
              onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
              className="group"
            >
              <Youtube className="mr-2" />
              Tham gia ngay
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-300">
            <span>🏆 Cộng đồng học lập trình 1000+ thành viên</span>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={heroAvatar} 
              alt="Tuấn & Quân - Study Buddy Avatar"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl shadow-large transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-bounce">
              ✨ Đáng tin cậy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};