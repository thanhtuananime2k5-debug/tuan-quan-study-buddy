import { useState, useEffect } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  in_stock: boolean;
}

export const ServicesSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('in_stock', true)
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Không thể tải dữ liệu sản phẩm');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getServiceIcon = (name: string) => {
    if (name.toLowerCase().includes('coursera')) return GraduationCap;
    if (name.toLowerCase().includes('tài liệu') || name.toLowerCase().includes('source')) return FileText;
    if (name.toLowerCase().includes('khóa học')) return Play;
    if (name.toLowerCase().includes('project') || name.toLowerCase().includes('java') || name.toLowerCase().includes('python') || name.toLowerCase().includes('web')) return Code;
    if (name.toLowerCase().includes('edit') || name.toLowerCase().includes('script') || name.toLowerCase().includes('media')) return Video;
    if (name.toLowerCase().includes('bảng điểm')) return BarChart;
    return BookOpen;
  };

  const handleServiceClick = (product: Product) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill the service in contact form
      setTimeout(() => {
        const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = product.name;
          serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }
  };

  if (loading) {
    return (
      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dịch vụ hỗ trợ học tập
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-16 w-16 bg-muted rounded-full mx-auto mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2" />
                  <div className="h-3 bg-muted rounded w-full mb-2" />
                  <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
                </CardHeader>
                <CardContent>
                  <div className="h-10 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          {products.map((product) => {
            const IconComponent = getServiceIcon(product.name);
            return (
              <Card 
                key={product.id} 
                className="group hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-soft"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                  <Badge variant="secondary" className="text-lg font-semibold py-1 px-3">
                    {formatPrice(product.price)}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => handleServiceClick(product)}
                  >
                    Đặt dịch vụ ngay
                  </Button>
                </CardContent>
              </Card>
            );
          })}
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