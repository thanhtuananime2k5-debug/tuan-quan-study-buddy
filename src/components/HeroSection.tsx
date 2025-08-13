import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/anime-coder-workspace.jpg";
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
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-tight animate-fade-in drop-shadow-2xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tuấn & Quân
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold animate-fade-in">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Việc gì khó có Tuấn và Quân lo
            </span>
          </h2>
        </div>
        
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 max-w-4xl mx-auto animate-fade-in drop-shadow-lg font-medium">
          🎓 Hỗ trợ sinh viên đại học trong học tập, ôn thi và kỹ năng mềm – từ A đến Z, 
          tuyệt đối nói không với gian lận!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            variant="green" 
            size="hero"
            className="group text-xl px-8 py-4"
            onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop, behavior: 'smooth' })}
          >
            Đặt dịch vụ ngay
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="hero"
            onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
            className="group text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-black"
          >
            <Youtube className="mr-2" />
            Tham gia ngay
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-lg text-gray-300 animate-fade-in">
          <span>🏆 Cộng đồng học lập trình 1000+ thành viên</span>
        </div>
      </div>
    </section>
  );
};