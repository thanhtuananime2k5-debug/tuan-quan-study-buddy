-- Create forum_posts table
CREATE TABLE public.forum_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  category TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  is_sticky BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create forum_replies table
CREATE TABLE public.forum_replies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  is_solution BOOLEAN DEFAULT false,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create news_posts table
CREATE TABLE public.news_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT,
  author TEXT NOT NULL DEFAULT 'Admin',
  category TEXT NOT NULL,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  semester TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Forum posts are viewable by everyone" ON public.forum_posts FOR SELECT USING (true);
CREATE POLICY "Anyone can create forum posts" ON public.forum_posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can manage forum posts" ON public.forum_posts FOR ALL USING (true);

CREATE POLICY "Forum replies are viewable by everyone" ON public.forum_replies FOR SELECT USING (true);
CREATE POLICY "Anyone can create forum replies" ON public.forum_replies FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can manage forum replies" ON public.forum_replies FOR ALL USING (true);

CREATE POLICY "News posts are viewable by everyone" ON public.news_posts FOR SELECT USING (published = true);
CREATE POLICY "Admin can manage news posts" ON public.news_posts FOR ALL USING (true);

CREATE POLICY "Reviews are viewable by everyone" ON public.reviews FOR SELECT USING (approved = true);
CREATE POLICY "Anyone can create reviews" ON public.reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can manage reviews" ON public.reviews FOR ALL USING (true);

-- Add triggers for updated_at
CREATE TRIGGER update_forum_posts_updated_at BEFORE UPDATE ON public.forum_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_forum_replies_updated_at BEFORE UPDATE ON public.forum_replies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_news_posts_updated_at BEFORE UPDATE ON public.news_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.news_posts (title, description, category, featured) VALUES
('Cập nhật tài liệu mới cho kỳ Spring 2024', 'Đã cập nhật đầy đủ tài liệu cho các môn MAD101, PRO192, WED201 theo curriculum mới nhất...', 'Cập nhật', true),
('Ra mắt dịch vụ ChatGPT PLUS giá rẻ', 'Giờ đây bạn có thể sử dụng ChatGPT PLUS với giá chỉ 100,000đ/tháng, hỗ trợ học tập hiệu quả...', 'Dịch vụ mới', false),
('Thông báo lịch nghỉ Tết Nguyên Đán 2024', 'Thông báo lịch nghỉ và hoạt động hỗ trợ trong dịp Tết Nguyên Đán. Chúc các bạn năm mới an khang...', 'Thông báo', false);

INSERT INTO public.forum_posts (title, content, author_name, category, status, is_sticky, views, likes) VALUES
('Làm thế nào để học hiệu quả môn MAD101?', 'Mình đang gặp khó khăn với môn MAD101, có ai có kinh nghiệm học môn này không? Chia sẻ tips với mình nhé!', 'NguyenVanA', 'MAD101', 'answered', true, 156, 12),
('Source code bài tập PRO192 có đầy đủ không?', 'Mình cần source code cho các bài tập PRO192, không biết có đầy đủ tất cả các lab không?', 'TranThiB', 'PRO192', 'answered', false, 289, 23);

INSERT INTO public.forum_replies (post_id, content, author_name, is_solution) VALUES
((SELECT id FROM public.forum_posts WHERE title = 'Làm thế nào để học hiệu quả môn MAD101?' LIMIT 1), 'Mình khuyên bạn nên làm nhiều bài tập thực hành, đặc biệt là các bài về graph theory. Team Tuấn & Quân có tài liệu rất chi tiết!', 'HocVienA', true),
((SELECT id FROM public.forum_posts WHERE title = 'Source code bài tập PRO192 có đầy đủ không?' LIMIT 1), 'Có đầy đủ hết bạn ơi! Mình đã mua và pass môn với điểm A. Recommend!', 'SinhVienB', false);