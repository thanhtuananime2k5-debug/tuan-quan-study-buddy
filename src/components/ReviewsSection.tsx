import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      service: "Khóa học MAD101",
      rating: 5,
      comment: "Tài liệu rất chi tiết, giảng dạy dễ hiểu. Đã qua được môn MAD101 với điểm cao!",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Trần Thị B",
      service: "SRC ôn FE",
      rating: 5,
      comment: "Source code đầy đủ tất cả các môn, giúp mình ôn thi FE hiệu quả. Cảm ơn team!",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Lê Văn C",
      service: "Rush Coursera",
      rating: 5,
      comment: "Hoàn thành khóa Coursera trong thời gian ngắn, chất lượng tốt. Highly recommended!",
      date: "2024-01-08"
    },
    {
      id: 4,
      name: "Phạm Thị D",
      service: "Support LUK",
      rating: 5,
      comment: "Hỗ trợ làm bài tập LUK rất tận tình và chuyên nghiệp. Điểm số cải thiện rõ rệt!",
      date: "2024-01-05"
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      service: "ChatGPT PLUS",
      rating: 4,
      comment: "Dịch vụ ChatGPT PLUS hoạt động ổn định, hỗ trợ học tập hiệu quả. Giá cả hợp lý!",
      date: "2024-01-03"
    },
    {
      id: 6,
      name: "Đinh Thị F",
      service: "CANVA PRO",
      rating: 5,
      comment: "CANVA PRO giúp làm presentation đẹp mắt. Thiết kế chuyên nghiệp, dễ sử dụng!",
      date: "2024-01-01"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-background" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Đánh giá từ khách hàng
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Phản hồi chân thực từ sinh viên đã sử dụng dịch vụ của chúng mình
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="relative group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Quote className="h-6 w-6 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "{review.comment}"
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.service}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ⭐ Đánh giá trung bình: 4.9/5 từ 500+ khách hàng
          </p>
        </div>
      </div>
    </section>
  );
};