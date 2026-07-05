import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const SEND_REQUEST_URL = 'https://functions.poehali.dev/05ab45c7-2131-485b-b1fa-0ea9807501f0';

interface RequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestDialog = ({ open, onOpenChange }: RequestDialogProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(SEND_REQUEST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Не удалось отправить заявку');
      }

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setName('');
      setPhone('');
      setMessage('');
      onOpenChange(false);
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: err instanceof Error ? err.message : 'Попробуйте позже',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display uppercase text-2xl">Оставить заявку</DialogTitle>
          <DialogDescription>
            Расскажите о своём объекте — рассчитаем стоимость и перезвоним.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Телефон"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Textarea
            placeholder="Комментарий (необязательно)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full h-12"
          >
            {loading ? (
              <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
            ) : (
              <Icon name="Send" size={18} className="mr-2" />
            )}
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDialog;