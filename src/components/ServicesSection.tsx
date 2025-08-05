import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code, 
  Video, 
  GraduationCap, 
  FileText,
  Play,
  Edit,
  BarChart
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Rush Coursera",
    description: "Hỗ trợ chọn khóa học, theo dõi tiến độ, làm bài",
    price: "120k - 150k",
    cta: "Tư vấn Coursera miễn phí",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Tài liệu & Source Code",
    description: "Đề thi, tài liệu PDF, code C, Java, Python, DB,...",
    price: "50k - 70k",
    cta: "Xem tài liệu ngay",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Play,
    title: "Khóa học trực tuyến cấp tốc",
    description: "Rút gọn, dễ hiểu, dễ thi",
    price: "100k - 300k",
    cta: "Đăng ký khóa học",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Video,
    title: "Support LUK (Media)",
    description: "Dịch vụ media chuyên nghiệp cho sinh viên",
    price: "Xem chi tiết",
    cta: "Liên hệ team Media",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    subServices: [
      { name: "Edit video", price: "70k" },
      { name: "Script kịch bản", price: "40k" },
      { name: "Combo Full", price: "90k" },
      { name: "Làm bảng điểm", price: "10k" }
    ]
  },
  {
    icon: Code,
    title: "Project, Lab, Bài tập lớn",
    description: "Java, Python, Web, DB,...",
    price: "100k - 500k",
    cta: "Yêu cầu hỗ trợ",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }
];

export const ServicesSection = () => {
  const handleServiceClick = (serviceName: string) => {
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dịch vụ hỗ trợ học tập
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng mình cung cấp đầy đủ các dịch vụ từ A đến Z để hỗ trợ bạn thành công trong học tập
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
                <Badge variant="secondary" className="text-lg font-semibold py-1 px-3">
                  {service.price}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {service.subServices && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Chi tiết dịch vụ:</h4>
                    {service.subServices.map((sub, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span>{sub.name}</span>
                        <Badge variant="outline">{sub.price}</Badge>
                      </div>
                    ))}
                  </div>
                )}
                
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => handleServiceClick(service.title)}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ✨ Tất cả dịch vụ đều có cam kết chất lượng và hỗ trợ 24/7
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Liên hệ tư vấn miễn phí
          </Button>
        </div>
      </div>
    </section>
  );
};