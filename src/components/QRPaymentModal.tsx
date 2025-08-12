import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// Using the new QR image uploaded by user

interface QRPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRPaymentModal = ({ isOpen, onClose }: QRPaymentModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Ủng hộ Tuấn & Quân
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4 p-4">
          <div className="relative">
            <img 
              src="/lovable-uploads/144e9be9-c110-4cd2-9fe8-119e115c8789.png" 
              alt="QR Payment - Cao Thanh Tuấn BIDV" 
              className="w-72 h-auto aspect-[9/16] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold">CAO THANH TUẤN</p>
            <p className="text-muted-foreground">8816861222</p>
            <p className="text-sm text-muted-foreground">
              Quét mã QR để ủng hộ chúng mình nhé! 💖
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};