import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  Clock, 
  Search,
  Plus,
  User,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from "lucide-react";

export const ForumSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  const forumPosts = [
    {
      id: 1,
      title: "Làm thế nào để học hiệu quả môn MAD101?",
      content: "Mình đang gặp khó khăn với môn MAD101, có ai có kinh nghiệm học môn này không? Chia sẻ tips với mình nhé!",
      author: "NguyenVanA",
      category: "MAD101",
      replies: 8,
      views: 156,
      likes: 12,
      timeAgo: "2 giờ trước",
      status: "answered",
      isSticky: true
    },
    {
      id: 2,
      title: "Source code bài tập PRO192 có đầy đủ không?",
      content: "Mình cần source code cho các bài tập PRO192, không biết có đầy đủ tất cả các lab không?",
      author: "TranThiB",
      category: "PRO192",
      replies: 15,
      views: 289,
      likes: 23,
      timeAgo: "4 giờ trước",
      status: "answered"
    },
    {
      id: 3,
      title: "Coursera certificate có được công nhận không?",
      content: "Mọi người cho mình hỏi certificate từ Coursera có được các công ty công nhận không?",
      author: "LeVanC",
      category: "Coursera",
      replies: 6,
      views: 134,
      likes: 9,
      timeAgo: "6 giờ trước",
      status: "pending"
    },
    {
      id: 4,
      title: "Hướng dẫn sử dụng ChatGPT Plus cho việc học",
      content: "Mình vừa mua ChatGPT Plus, có ai có kinh nghiệm sử dụng để hỗ trợ học tập không? Share tips nhé!",
      author: "PhamThiD",
      category: "ChatGPT",
      replies: 22,
      views: 445,
      likes: 31,
      timeAgo: "8 giờ trước",
      status: "answered"
    },
    {
      id: 5,
      title: "Làm thế nào để pass FE với điểm cao?",
      content: "Sắp thi FE rồi, mọi người có kinh nghiệm gì để đạt điểm cao không? Chia sẻ kinh nghiệm với mình!",
      author: "HoangVanE",
      category: "FE",
      replies: 34,
      views: 678,
      likes: 45,
      timeAgo: "1 ngày trước",
      status: "answered"
    },
    {
      id: 6,
      title: "CANVA Pro có những tính năng gì hay?",
      content: "Đang cân nhắc mua CANVA Pro, có ai đã sử dụng chưa? Có đáng không?",
      author: "DinhThiF",
      category: "CANVA",
      replies: 12,
      views: 201,
      likes: 18,
      timeAgo: "1 ngày trước",
      status: "pending"
    }
  ];

  const categories = [
    "Tất cả", "MAD101", "PRO192", "WED201", "Coursera", 
    "ChatGPT", "CANVA", "FE", "Khác"
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <HelpCircle className="h-4 w-4 text-orange-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "answered":
        return "Đã trả lời";
      case "pending":
        return "Chờ trả lời";
      default:
        return "Chưa xử lý";
    }
  };

  return (
    <section className="py-20 px-4 bg-background" id="forum">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diễn đàn hỏi đáp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nơi sinh viên chia sẻ kinh nghiệm, đặt câu hỏi và hỗ trợ lẫn nhau
          </p>
        </div>
        
        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm câu hỏi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            onClick={() => setShowNewQuestion(!showNewQuestion)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Đặt câu hỏi mới
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary/10"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* New Question Form */}
            {showNewQuestion && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Đặt câu hỏi mới</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Tiêu đề câu hỏi..." />
                  <Textarea 
                    placeholder="Mô tả chi tiết câu hỏi của bạn..."
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <Button size="sm">Đăng câu hỏi</Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowNewQuestion(false)}
                    >
                      Hủy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Forum Posts */}
            {forumPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {post.isSticky && (
                          <Badge variant="secondary" className="text-xs">
                            📌 Ghim
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(post.status)}`}>
                          {getStatusIcon(post.status)}
                          <span className="ml-1">{getStatusText(post.status)}</span>
                        </Badge>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="font-medium">{post.author}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.timeAgo}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {post.replies}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {post.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center mt-8">
              <Button variant="outline">
                Xem thêm câu hỏi
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Thống kê diễn đàn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tổng câu hỏi:</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Đã trả lời:</span>
                  <span className="font-semibold text-green-600">1,156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Thành viên:</span>
                  <span className="font-semibold">1,000+</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Câu hỏi nổi bật</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {forumPosts
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 3)
                  .map((post) => (
                    <div key={post.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.views} lượt xem</span>
                        <span>•</span>
                        <span>{post.replies} trả lời</span>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quy tắc diễn đàn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Tôn trọng các thành viên khác</li>
                  <li>• Đặt câu hỏi rõ ràng, cụ thể</li>
                  <li>• Không spam hoặc quảng cáo</li>
                  <li>• Chia sẻ kiến thức tích cực</li>
                  <li>• Tìm kiếm trước khi đặt câu hỏi</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};