import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import RequestDialog from '@/components/RequestDialog';
import MeasurementForm from '@/components/MeasurementForm';

const services = [
  { icon: 'Hammer', title: 'Демонтаж', desc: 'Аккуратно снимаем старое покрытие, стены и перегородки. Вывоз мусора включён.' },
  { icon: 'Wrench', title: 'Черновая отделка', desc: 'Стяжка, штукатурка, электрика и разводка коммуникаций под ключ.' },
  { icon: 'PaintRoller', title: 'Финишная отделка', desc: 'Покраска, обои, укладка плитки и напольных покрытий. Идеальные поверхности.' },
  { icon: 'Droplets', title: 'Сантехника', desc: 'Установка и подключение сантехники, монтаж систем водоснабжения.' },
  { icon: 'Zap', title: 'Электрика', desc: 'Разводка проводки, установка розеток, выключателей и электрощитов.' },
];

const works = [
  { img: 'https://cdn.poehali.dev/projects/53abd73f-9826-4a17-b8cb-f689448c09fb/bucket/5fff1925-a2a1-4496-9f14-20363898c5d0.jpg', title: 'Санузел', tag: 'Сантехника + плитка' },
  { img: 'https://cdn.poehali.dev/projects/53abd73f-9826-4a17-b8cb-f689448c09fb/bucket/9735c7d9-051b-4090-9b05-a85b7bcea275.jpg', title: 'Кухня-гостиная', tag: 'Ремонт под ключ' },
  { img: 'https://cdn.poehali.dev/projects/53abd73f-9826-4a17-b8cb-f689448c09fb/bucket/c38560d0-152c-4cea-88d3-38260dd48c8d.jpg', title: 'Ванная комната', tag: 'Сантехника + плитка', rotate: true },
];

const advantages = [
  { name: 'FileText', title: 'Работаем по договору', desc: 'Прозрачные условия, фиксированная смета без скрытых доплат.' },
  { name: 'ShieldCheck', title: 'Гарантия на работы', desc: 'Отвечаем за качество каждого этапа и даём гарантию на результат.' },
  { name: 'Clock', title: 'Точно в срок', desc: 'Соблюдаем график и сдаём объект в оговорённые сроки.' },
  { name: 'Users', title: 'Своя бригада', desc: 'Постоянная команда мастеров с опытом более 10 лет.' },
];

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground noise-bg overflow-x-hidden">
      <RequestDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-md bg-accent flex items-center justify-center">
              <Icon name="Building2" size={20} className="text-accent-foreground" />
            </span>
            <span className="font-display font-bold text-2xl tracking-tight">ISMAG<span className="text-accent">STROY</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#works" className="hover:text-accent transition-colors">Работы</a>
            <a href="#measurement" className="hover:text-accent transition-colors">Замер</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button
            onClick={() => setDialogOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6"
          >
            Оставить заявку
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-secondary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Ремонт и отделка в Москве
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl mb-6">
              Превращаем<br />
              пространство<br />
              в <span className="text-accent">комфорт</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Выполняем полный цикл работ: от демонтажа и черновой отделки до финишных
              покрытий и установки сантехники. По договору, с фиксированной сметой и гарантией.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setDialogOpen(true)}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 text-base h-14"
              >
                Рассчитать стоимость
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <a href="#works">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-2 font-semibold w-full">
                  Наши работы
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl -rotate-3" />
            <img
              src="https://cdn.poehali.dev/projects/53abd73f-9826-4a17-b8cb-f689448c09fb/files/c4cd07b7-f069-4cdb-9098-a6503a3f610f.jpg"
              alt="Ремонт под ключ"
              className="relative rounded-3xl w-full aspect-square object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl">
              <div className="font-display font-bold text-4xl">10<span className="text-accent">+</span></div>
              <div className="text-sm opacity-80">лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-primary text-primary-foreground py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8 font-display font-medium uppercase text-xl tracking-wider">
              {['Демонтаж', 'Черновая отделка', 'Финишные работы', 'Сантехника', 'Электрика', 'Плитка'].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  {t} <Icon name="Asterisk" size={20} className="text-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-display uppercase tracking-widest text-accent text-sm font-semibold">— Что мы делаем</span>
              <h2 className="font-display font-bold uppercase text-4xl md:text-6xl leading-none mt-3">Полный цикл<br />работ</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg">
              От первого удара до заселения — весь ремонт выполняем сами, без подрядчиков со стороны.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:-translate-y-2"
                style={{ animation: `fade-in 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary group-hover:bg-accent flex items-center justify-center mb-6 transition-colors">
                  <Icon name={s.icon} size={26} className="group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-2xl uppercase mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
                <span className="absolute top-6 right-6 font-display font-bold text-5xl text-secondary group-hover:text-accent/20 transition-colors">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-display uppercase tracking-widest text-accent text-sm font-semibold">— Наши работы</span>
              <h2 className="font-display font-bold uppercase text-4xl md:text-6xl leading-none mt-3">Готовые<br />объекты</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg">
              Несколько примеров ремонта, который мы выполнили под ключ в Москве.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{ animation: `fade-in 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className={`w-full h-full ${w.rotate ? 'rotate-180' : ''}`}>
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase mb-2">
                    {w.tag}
                  </span>
                  <h3 className="font-display font-bold uppercase text-2xl text-white">{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="about" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <span className="font-display uppercase tracking-widest text-accent text-sm font-semibold">— Почему мы</span>
            <h2 className="font-display font-bold uppercase text-4xl md:text-6xl mt-3">Доверьте ремонт<br />профессионалам</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <div key={a.title} className="text-center" style={{ animation: `fade-in 0.6s ease-out ${i * 0.1}s both` }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-5">
                  <Icon name={a.name} size={30} className="text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl uppercase mb-3">{a.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MeasurementForm />

      {/* CTA / Contacts */}
      <section id="contacts" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="relative bg-accent text-accent-foreground rounded-3xl px-8 py-16 md:p-20 overflow-hidden">
            <Icon name="Building2" size={320} className="absolute -right-16 -bottom-16 opacity-10" />
            <div className="relative max-w-2xl">
              <h2 className="font-display font-bold uppercase text-4xl md:text-6xl leading-none mb-6">
                Получите результат<br />точно в срок
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Оставьте заявку — рассчитаем стоимость, составим смету и подготовим договор.
                Бесплатный выезд замерщика по Москве.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setDialogOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base font-semibold"
                >
                  <Icon name="Phone" size={18} className="mr-1" />
                  Заказать звонок
                </Button>
                <a href="tel:+79062321323" className="inline-flex items-center gap-2 font-display font-semibold text-2xl md:text-3xl">
                  +7 (906) 232-13-23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
              <Icon name="Building2" size={18} className="text-accent-foreground" />
            </span>
            <span className="font-display font-bold text-xl">ISMAG<span className="text-accent">STROY</span></span>
          </div>
          <p className="text-muted-foreground text-sm">Ремонт и отделка под ключ · Москва</p>
          <div className="flex gap-4 text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors"><Icon name="Send" size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Icon name="Instagram" size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Icon name="Phone" size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;