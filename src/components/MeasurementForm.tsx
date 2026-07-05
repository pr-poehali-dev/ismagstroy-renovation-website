import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const SEND_REQUEST_URL = 'https://functions.poehali.dev/05ab45c7-2131-485b-b1fa-0ea9807501f0';

const MeasurementForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
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
        body: JSON.stringify({
          name,
          phone,
          address,
          area,
          message,
          type: 'Заявка на бесплатный замер и расчёт стоимости',
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Не удалось отправить заявку');
      }

      toast({
        title: 'Заявка отправлена!',
        description: 'Замерщик свяжется с вами для согласования времени.',
      });
      setName('');
      setPhone('');
      setAddress('');
      setArea('');
      setMessage('');
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
    <section id="measurement" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display uppercase tracking-widest text-accent text-sm font-semibold">— Бесплатный замер</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl leading-none mt-3 mb-6">
              Рассчитаем<br />стоимость<br />бесплатно
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              Оставьте заявку — приедем на объект, снимем замеры и подготовим точную смету
              без обязательств с вашей стороны.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: 'CalendarCheck', text: 'Выезд замерщика в удобное время' },
                { icon: 'Calculator', text: 'Точная смета с учётом всех работ' },
                { icon: 'ShieldCheck', text: 'Без скрытых платежей и обязательств' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={20} className="text-accent" />
                  </span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
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
            </div>
            <Input
              placeholder="Адрес объекта"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              placeholder="Площадь, м²"
              value={area}
              onChange={(e) => setArea(e.target.value)}
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
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full h-14 mt-2"
            >
              {loading ? (
                <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
              ) : (
                <Icon name="Ruler" size={18} className="mr-2" />
              )}
              Заказать бесплатный замер
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MeasurementForm;
