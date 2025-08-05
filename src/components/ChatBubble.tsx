import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import qrPayment from "@/assets/qr-payment.jpg";

const services = [
  "Rush Coursera",
  "Tài liệu & Source Code", 
  "Khóa học trực tuyến cấp tốc",
  "Support LUK (Media)",
  "Project, Lab, Bài tập lớn",
  "Tư vấn khác"
];

export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive"
      });
      return;
    }
    
    setShowPayment(true);
    toast({
      title: "Gửi yêu cầu thành công!",
      description: "Chúng mình sẽ liên hệ với bạn trong vòng 24h.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-14 h-14 rounded-full shadow-large hover:scale-110 transition-transform bg-gradient-to-r from-primary to-secondary"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-large border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">💬 Hỗ trợ nhanh</CardTitle>
              <CardDescription>Chúng mình có thể giúp gì cho bạn?</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="max-h-96 overflow-y-auto">
          {!showPayment ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Label htmlFor="chat-name" className="text-xs">Họ tên *</Label>
                <Input
                  id="chat-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Nhập họ tên"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="chat-email" className="text-xs">Gmail *</Label>
                <Input
                  id="chat-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="chat-service" className="text-xs">Dịch vụ *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="chat-message" className="text-xs">Yêu cầu</Label>
                <Textarea
                  id="chat-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Mô tả yêu cầu..."
                  rows={3}
                  className="text-sm"
                />
              </div>
              
              <Button type="submit" className="w-full" size="sm">
                <Send className="w-4 h-4 mr-2" />
                Gửi yêu cầu
              </Button>
            </form>
          ) : (
            <div className="space-y-4 text-center">
              <div className="text-green-600 font-semibold">
                ✅ Yêu cầu đã được gửi!
              </div>
              
              <div>
                <img 
                  src={qrPayment} 
                  alt="QR Payment"
                  className="w-32 h-32 mx-auto rounded-lg"
                />
              </div>
              
              <div className="text-sm space-y-1">
                <p className="font-semibold">BIDV - 8816861222</p>
                <p className="font-semibold">Cao Thanh Quân</p>
                <p className="text-xs text-muted-foreground">
                  Chuyển khoản và gửi bill để được xử lý nhanh nhất
                </p>
              </div>
              
              <Button 
                onClick={() => {
                  setShowPayment(false);
                  setFormData({ name: "", email: "", service: "", message: "" });
                }}
                size="sm"
                variant="outline"
                className="w-full"
              >
                Gửi yêu cầu mới
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};