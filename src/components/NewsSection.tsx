import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Cập nhật tài liệu mới cho kỳ Spring 2024",
      description: "Đã cập nhật đầy đủ tài liệu cho các môn MAD101, PRO192, WED201 theo curriculum mới nhất...",
      author: "Tuấn & Quân Team",
      date: "2024-01-15",
      category: "Cập nhật",
      featured: true
    },
    {
      id: 2,
      title: "Ra mắt dịch vụ ChatGPT PLUS giá rẻ",
      description: "Giờ đây bạn có thể sử dụng ChatGPT PLUS với giá chỉ 100,000đ/tháng, hỗ trợ học tập hiệu quả...",
      author: "Admin",
      date: "2024-01-12",
      category: "Dịch vụ mới",
      featured: false
    },
    {
      id: 3,
      title: "Hướng dẫn sử dụng Quizlet Plus hiệu quả",
      description: "Tips và tricks để tối ưu hóa việc học từ vựng và ghi nhớ kiến thức với Quizlet Plus...",
      author: "Tuấn",
      date: "2024-01-10",
      category: "Hướng dẫn",
      featured: false
    },
    {
      id: 4,
      title: "Thông báo lịch nghỉ Tết Nguyên Đán 2024",
      description: "Thông báo lịch nghỉ và hoạt động hỗ trợ trong dịp Tết Nguyên Đán. Chúc các bạn năm mới an khang...",
      author: "Admin",
      date: "2024-01-08",
      category: "Thông báo",
      featured: false
    },
    {
      id: 5,
      title: "Workshop online: Kỹ năng thuyết trình hiệu quả",
      description: "Tham gia workshop miễn phí về kỹ năng thuyết trình và giao tiếp trong môi trường học tập...",
      author: "Quân",
      date: "2024-01-05",
      category: "Sự kiện",
      featured: false
    },
    {
      id: 6,
      title: "Cộng đồng học lập trình đạt 1000+ thành viên",
      description: "Cảm ơn sự ủng hộ của các bạn! Cộng đồng học lập trình của chúng mình đã có hơn 1000 thành viên...",
      author: "Tuấn & Quân Team",
      date: "2024-01-01",
      category: "Cộng đồng",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Cập nhật": "bg-blue-100 text-blue-800",
      "Dịch vụ mới": "bg-green-100 text-green-800",
      "Hướng dẫn": "bg-purple-100 text-purple-800",
      "Thông báo": "bg-orange-100 text-orange-800",
      "Sự kiện": "bg-pink-100 text-pink-800",
      "Cộng đồng": "bg-indigo-100 text-indigo-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-20 px-4 bg-muted/30" id="news">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thông tin mới nhất
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cập nhật những thông tin, dịch vụ và sự kiện mới nhất từ Tuấn & Quân
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {news
              .filter(item => item.featured)
              .slice(0, 1)
              .map((item) => (
                <Card key={item.id} className="mb-8 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <Badge variant="secondary">Nổi bật</Badge>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {item.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.date).toLocaleDateString('vi-VN')}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Đọc thêm <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            
            {/* Regular News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news
                .filter(item => !item.featured)
                .slice(0, 4)
                .map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <Badge className={`${getCategoryColor(item.category)} w-fit mb-2`}>
                        {item.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{item.author}</span>
                        <span>{new Date(item.date).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thông báo quan trọng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {news
                  .filter(item => item.category === "Thông báo")
                  .slice(0, 3)
                  .map((item) => (
                    <div key={item.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                  ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sự kiện sắp tới</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {news
                  .filter(item => item.category === "Sự kiện")
                  .slice(0, 2)
                  .map((item) => (
                    <div key={item.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Xem tất cả tin tức
          </Button>
        </div>
      </div>
    </section>
  );
};