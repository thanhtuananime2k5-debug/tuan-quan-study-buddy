import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: string;
  data: any;
  userEmail?: string;
  userName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data, userEmail, userName }: NotificationRequest = await req.json();
    
    let subject = "";
    let htmlContent = "";

    switch (type) {
      case "contact_request":
        subject = "Yêu cầu liên hệ mới từ website";
        htmlContent = `
          <h2>Yêu cầu liên hệ mới</h2>
          <p><strong>Tên:</strong> ${data.full_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Dịch vụ:</strong> ${data.service}</p>
          <p><strong>Tin nhắn:</strong></p>
          <p>${data.message}</p>
        `;
        break;
      
      case "new_order":
        subject = "Đơn hàng mới từ website";
        htmlContent = `
          <h2>Đơn hàng mới</h2>
          <p><strong>Mã đơn:</strong> ${data.order_code}</p>
          <p><strong>Khách hàng:</strong> ${data.customer_name}</p>
          <p><strong>Email:</strong> ${data.customer_email}</p>
          <p><strong>Tổng tiền:</strong> ${data.total_amount.toLocaleString()}đ</p>
          <p><strong>Sản phẩm:</strong></p>
          <ul>
            ${data.items.map((item: any) => `<li>${item.name} - ${item.quantity}x - ${item.price.toLocaleString()}đ</li>`).join('')}
          </ul>
        `;
        break;
        
      case "forum_post":
        subject = "Câu hỏi mới trên diễn đàn";
        htmlContent = `
          <h2>Câu hỏi mới trên diễn đàn</h2>
          <p><strong>Tiêu đề:</strong> ${data.title}</p>
          <p><strong>Tác giả:</strong> ${data.author_name}</p>
          <p><strong>Email:</strong> ${data.author_email || 'Không có'}</p>
          <p><strong>Danh mục:</strong> ${data.category}</p>
          <p><strong>Nội dung:</strong></p>
          <p>${data.content}</p>
        `;
        break;
        
      case "review":
        subject = "Đánh giá mới từ khách hàng";
        htmlContent = `
          <h2>Đánh giá mới</h2>
          <p><strong>Tên:</strong> ${data.customer_name}</p>
          <p><strong>Email:</strong> ${data.customer_email || 'Không có'}</p>
          <p><strong>Môn học:</strong> ${data.subject}</p>
          <p><strong>Đánh giá:</strong> ${'⭐'.repeat(data.rating)} (${data.rating}/5)</p>
          <p><strong>Nội dung:</strong></p>
          <p>${data.content}</p>
        `;
        break;
        
      default:
        subject = "Thông báo từ website";
        htmlContent = `<p>${JSON.stringify(data)}</p>`;
    }

    const emailResponse = await resend.emails.send({
      from: "Website Tuấn & Quân <onboarding@resend.dev>",
      to: ["lequan12305@gmail.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);