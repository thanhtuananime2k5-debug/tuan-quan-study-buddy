import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  Zap, 
  Video, 
  Edit3,
  Palette,
  Beaker,
  MessageSquare,
  Folder
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Hỗ trợ chứng chỉ Coursera",
    description: "Hướng dẫn chọn khóa học, theo dõi tiến độ, hỗ trợ làm bài và lấy chứng chỉ nhanh.",
    icon: GraduationCap,
    cta: "Tư vấn Coursera miễn phí",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Tài liệu & Source Code",
    description: "Cung cấp đề thi cũ, bài giải mẫu, tài liệu PDF, và mã nguồn các chương trình cài đặt, cơ sở dữ liệu, mạng,...",
    icon: FileText,
    cta: "Xem tài liệu ngay",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Khóa học cấp tốc trực tuyến",
    description: "Các khóa học rút gọn (2-5h) giúp thi hiệu quả, nhiệm vụ và hiểu bài nhanh.",
    icon: Zap,
    cta: "Đăng ký khóa cấp tốc",
    color: "bg-orange-500"
  },
  {
    id: 4,
    title: "Support LUK",
    description: "Bao gồm 3 nhánh: Edit video (cắt ghép, chỉnh sửa video bài thuyết trình), Viết kịch bản (nội dung video thuyết trình, học thuật), Thiết kế slide (PowerPoint đẹp, đúng chuẩn học thuật)",
    icon: Video,
    cta: "Liên hệ team Media",
    color: "bg-purple-500",
    subServices: [
      { name: "Edit video", icon: Edit3 },
      { name: "Viết kịch bản", icon: MessageSquare },
      { name: "Thiết kế slide", icon: Palette }
    ]
  },
  {
    id: 5,
    title: "Project, Lab, bài tập lớn",
    description: "Hỗ trợ làm dự án, viết báo cáo, hoàn thiện bài lab theo môn học cụ thể (Java, Python, Web, DB,...)",
    icon: Beaker,
    cta: "Yêu cầu hỗ trợ",
    color: "bg-red-500"
  }
];

export const ServicesSection = () => {
  const scrollToContact = (serviceName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill the service in contact form
      setTimeout(() => {
        const serviceSelect = document.querySelector('[data-radix-select-trigger]') as HTMLElement;
        if (serviceSelect) {
          serviceSelect.click();
          setTimeout(() => {
            const serviceOption = Array.from(document.querySelectorAll('[data-radix-select-item]')).find(
              item => item.textContent?.includes(serviceName)
            ) as HTMLElement;
            if (serviceOption) {
              serviceOption.click();
            }
          }, 100);
        }
      }, 500);
    }
  };

  return (
    <section className="py-20 px-4 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dịch vụ của Tuấn & Quân
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hỗ trợ toàn diện cho sinh viên từ học tập đến kỹ năng mềm
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-3 ${service.color} rounded-full w-16 h-16 flex items-center justify-center`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                
                {/* Sub-services for Support LUK */}
                {service.subServices && (
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {service.subServices.map((sub, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        <sub.icon className="h-3 w-3" />
                        {sub.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className={`w-full ${service.color} hover:opacity-90 text-white font-semibold py-3`}
                  onClick={() => scrollToContact(service.title)}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Folder className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground">
              ✨ Tất cả dịch vụ đều có cam kết chất lượng và hỗ trợ 24/7
            </p>
          </div>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Liên hệ tư vấn miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};