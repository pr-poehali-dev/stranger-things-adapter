import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4399c35d-93fd-4da6-9074-210e4a6d6f0a/files/6871d620-a08f-4049-add5-783a5fa7c4b7.jpg";
const GANG_IMG = "https://cdn.poehali.dev/projects/4399c35d-93fd-4da6-9074-210e4a6d6f0a/files/e78190db-8036-4a58-8e90-ef7a99c9f736.jpg";

const factions = [
  { name: "Grove Street", tag: "GSF", color: "#22c55e", desc: "Зелёные держат юг города. Верность улице — закон крови.", emoji: "🟢" },
  { name: "Ballas", tag: "BLS", color: "#a855f7", desc: "Пурпурные контролируют рынок. Деньги важнее жизни.", emoji: "🟣" },
  { name: "Los Santos Vagos", tag: "LSV", color: "#eab308", desc: "Жёлтые — восток города. Быстрые деньги, быстрые машины.", emoji: "🟡" },
  { name: "Russian Mafia", tag: "RUS", color: "#ef4444", desc: "Русская мафия держит бизнес. Слово дороже контракта.", emoji: "🔴" },
  { name: "LSPD", tag: "COP", color: "#3b82f6", desc: "Полиция или коррупция — разницы нет на этих улицах.", emoji: "🔵" },
  { name: "Vagabundos", tag: "VGB", color: "#f97316", desc: "Нелегалы без территории. Зарабатывают мелкими делами.", emoji: "🟠" },
];

const features = [
  { icon: "Car", title: "200+ машин", desc: "Уникальный автопарк с кастомизацией, тюнингом и угоном в реальном времени" },
  { icon: "Building2", title: "Бизнесы", desc: "Покупай заправки, магазины, казино — строй свою криминальную империю" },
  { icon: "Shield", title: "Банды и территории", desc: "Захватывай районы, воюй за наркоторговлю и рэкет" },
  { icon: "Users", title: "10 000+ игроков", desc: "Онлайн-серверы с живым сообществом 24/7" },
  { icon: "Briefcase", title: "Работы", desc: "Таксист, дальнобойщик, медик или бандит — выбирай путь сам" },
  { icon: "Zap", title: "События", desc: "Ежедневные ивенты, дерби, гонки и полицейские погони" },
];

const news = [
  { tag: "ОБНОВЛЕНИЕ", date: "Февраль 2026", title: "Патч 2.4 — Новый район и бизнесы", text: "Открылся северный район с новыми территориями, 12 новых бизнесов и переработанная система банд." },
  { tag: "ИВЕНТ", date: "Январь 2026", title: "Турнир по дерби — призовой фонд 500к", text: "Ежегодный турнир на разбитие машин. Регистрация открыта. Победитель получает уникальный автомобиль." },
  { tag: "НОВОСТЬ", date: "Декабрь 2025", title: "Античит обновлён", text: "Полностью переработана система защиты от читов. Банволна — 2400 игроков получили постоянный бан." },
];

const reviews = [
  { user: "Dmitry_Volkov", rank: "Лидер банды", text: "Играю три года. Лучший SAMP сервер в СНГ — атмосфера, RP, живые игроки. Ничего лучше не видел.", stars: 5 },
  { user: "xXShadowXx", rank: "Таксист", text: "Начал с нуля, стал владельцем трёх бизнесов за полгода. Реальная экономика, реальная игра.", stars: 5 },
  { user: "NightCrawler", rank: "Коп", text: "Полицейская фракция — это отдельный кайф. Погони, допросы, коррупция. Всё как в кино.", stars: 4 },
];

type Section = "home" | "factions" | "features" | "community";

const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "factions", label: "Фракции" },
  { id: "features", label: "Возможности" },
  { id: "community", label: "Сообщество" },
];

const ONLINE = 4217;

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([
    { user: "BigSmoke_", rank: "Ветеран", text: "Кто ищет банду на севере — пишите в лс. Grove принимает.", time: "5 мин назад", likes: 31 },
    { user: "IvanKapo", rank: "Русская мафия", rank_color: "#ef4444", text: "Продаю бизнес на Гроув стрит — заправка + склад. 800к. Серьёзным покупателям.", time: "22 мин назад", likes: 14 },
    { user: "OfficerReed", rank: "LSPD", rank_color: "#3b82f6", text: "Напоминаю всем — зона у порта снова горячая. Несколько арестов за час. Будьте осторожны 😂", time: "1 час назад", likes: 58 },
    { user: "SpeedDemon", rank: "Гонщик", text: "Завтра неофициальные гонки по трассе 1. Ставки принимаются. Пишите сюда.", time: "3 часа назад", likes: 77 },
  ]);

  const handlePost = () => {
    if (!msg.trim()) return;
    setPosts([{ user: "Гость", rank: "Новичок", text: msg, time: "только что", likes: 0 }, ...posts]);
    setMsg("");
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white font-montserrat overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.97), transparent)" }}>
        <button onClick={() => setActive("home")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center font-oswald font-black text-black text-sm">BR</div>
          <span className="font-oswald text-lg font-bold tracking-[0.2em] uppercase group-hover:text-yellow-400 transition-colors">
            BLACK<span className="text-yellow-400"> RUSSIA</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActive(item.id)}
              className={`font-oswald text-xs tracking-widest uppercase transition-all duration-300 ${active === item.id ? "text-yellow-400" : "text-gray-400 hover:text-white"}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-green-900/30 border border-green-800/40 px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-oswald text-xs text-green-400 tracking-widest">{ONLINE.toLocaleString()} онлайн</span>
          </div>
          <button className="font-oswald text-xs uppercase tracking-widest px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition-colors">
            Играть
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/96 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => { setActive(item.id); setMenuOpen(false); }}
              className={`font-oswald text-2xl tracking-widest uppercase ${active === item.id ? "text-yellow-400" : "text-gray-300"}`}>
              {item.label}
            </button>
          ))}
          <button className="font-oswald text-sm uppercase tracking-widest px-8 py-3 bg-yellow-500 text-black font-bold mt-4">
            Играть бесплатно
          </button>
        </div>
      )}

      {/* ─── HOME ─── */}
      {active === "home" && (
        <>
          {/* HERO */}
          <section className="relative h-screen flex items-end overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,6,6,0.9) 0%, rgba(6,6,6,0.4) 60%, rgba(6,6,6,0.7) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060606 0%, transparent 50%)" }} />

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)" }} />

            <div className="relative z-10 px-6 md:px-16 pb-24 max-w-5xl">
              <div className="flex items-center gap-3 mb-5 animate-fade-in opacity-0">
                <div className="h-px w-12 bg-yellow-500" />
                <span className="font-oswald text-xs tracking-[0.5em] text-yellow-500 uppercase">SA:MP Ролевой сервер</span>
              </div>
              <h1 className="font-oswald text-7xl md:text-[120px] font-black leading-none uppercase mb-2 animate-fade-in opacity-0 delay-100"
                style={{ textShadow: "0 0 60px rgba(234,179,8,0.3)" }}>
                BLACK
              </h1>
              <h1 className="font-oswald text-7xl md:text-[120px] font-black leading-none uppercase mb-8 animate-fade-in opacity-0 delay-200"
                style={{ color: "#eab308", textShadow: "0 0 40px rgba(234,179,8,0.6)" }}>
                RUSSIA
              </h1>
              <p className="font-montserrat text-base md:text-lg text-gray-300 max-w-lg leading-relaxed mb-10 animate-fade-in opacity-0 delay-300">
                Криминальный мир San Andreas на русском. Стройте империю, захватывайте территории, зарабатывайте или умирайте.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 delay-500">
                <button className="font-oswald text-sm uppercase tracking-widest px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 30px rgba(234,179,8,0.35)" }}>
                  Начать играть
                </button>
                <button onClick={() => setActive("features")} className="font-oswald text-sm uppercase tracking-widest px-10 py-4 border border-white/20 text-white hover:border-yellow-500/60 transition-all">
                  Возможности
                </button>
              </div>
            </div>

            {/* Server IP */}
            <div className="absolute bottom-8 right-6 md:right-12 text-right animate-fade-in opacity-0 delay-700">
              <div className="font-oswald text-xs text-gray-600 tracking-widest mb-1">СЕРВЕР</div>
              <div className="font-oswald text-sm text-yellow-500 tracking-widest" style={{ fontVariantNumeric: "tabular-nums" }}>
                samp.blackrussia.ru:7777
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {[
                { num: "10K+", label: "Игроков в сутки" },
                { num: "2019", label: "Год запуска" },
                { num: "200+", label: "Видов машин" },
                { num: "6", label: "Банд и фракций" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0a0a0a] p-8 text-center hover:bg-[#0f0f0f] transition-colors">
                  <div className="font-oswald text-4xl font-black text-yellow-400 mb-2">{s.num}</div>
                  <div className="font-montserrat text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURES PREVIEW */}
          <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-oswald text-xs text-yellow-500 tracking-[0.4em] uppercase mb-2">Геймплей</p>
                <h2 className="font-oswald text-4xl font-bold uppercase">Что тебя ждёт</h2>
              </div>
              <button onClick={() => setActive("features")} className="hidden md:flex items-center gap-2 font-oswald text-xs text-gray-500 hover:text-yellow-400 tracking-widest uppercase transition-colors">
                Все возможности <Icon name="ArrowRight" size={14} />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {features.slice(0, 3).map((f) => (
                <div key={f.title} className="bg-[#0a0a0a] border border-white/5 p-6 hover:border-yellow-900/50 transition-all group">
                  <div className="w-10 h-10 bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                    <Icon name={f.icon} fallback="Zap" size={18} className="text-yellow-400" />
                  </div>
                  <h3 className="font-oswald text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">{f.title}</h3>
                  <p className="font-montserrat text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GANG BANNER */}
          <section className="my-12 relative overflow-hidden h-64 md:h-80">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${GANG_IMG})` }} />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <p className="font-oswald text-xs text-yellow-500 tracking-[0.5em] uppercase mb-3">6 уникальных фракций</p>
                <h2 className="font-oswald text-4xl md:text-6xl font-black uppercase mb-4">Выбери свою сторону</h2>
                <button onClick={() => setActive("factions")} className="font-oswald text-xs uppercase tracking-widest px-8 py-3 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all">
                  Смотреть фракции
                </button>
              </div>
            </div>
          </section>

          {/* NEWS */}
          <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto">
            <p className="font-oswald text-xs text-yellow-500 tracking-[0.4em] uppercase mb-2">Обновления</p>
            <h2 className="font-oswald text-4xl font-bold uppercase mb-10">Новости сервера</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {news.map((n) => (
                <div key={n.title} className="border border-white/5 bg-[#0a0a0a] p-6 hover:border-yellow-900/40 transition-all group cursor-pointer">
                  <div className="flex gap-3 items-center mb-3">
                    <span className="font-oswald text-xs text-yellow-500 border border-yellow-900/60 px-2 py-0.5 tracking-widest">{n.tag}</span>
                    <span className="text-xs text-gray-600">{n.date}</span>
                  </div>
                  <h3 className="font-oswald text-base font-bold mb-2 group-hover:text-yellow-400 transition-colors">{n.title}</h3>
                  <p className="font-montserrat text-xs text-gray-500 leading-relaxed">{n.text}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ─── FACTIONS ─── */}
      {active === "factions" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs text-yellow-500 tracking-[0.4em] uppercase mb-3">Банды и фракции</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase mb-4">Выбери сторону</h1>
            <p className="font-montserrat text-gray-400 max-w-lg">Каждая фракция — своя история, территория и правила. Одни делают деньги, другие делают законы.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {factions.map((f, i) => (
              <div key={f.name}
                className="relative bg-[#0a0a0a] border border-white/5 p-6 hover:border-white/15 transition-all group cursor-pointer overflow-hidden animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute top-0 left-0 w-1 h-full transition-all group-hover:w-1.5" style={{ backgroundColor: f.color }} />
                <div className="pl-4">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-3xl">{f.emoji}</span>
                    <span className="font-oswald text-xs tracking-widest border px-2 py-0.5" style={{ color: f.color, borderColor: f.color + "40" }}>{f.tag}</span>
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2 transition-colors" style={{ color: active === "factions" ? "white" : "white" }}
                    onMouseEnter={e => (e.currentTarget.style.color = f.color)}
                    onMouseLeave={e => (e.currentTarget.style.color = "white")}>
                    {f.name}
                  </h3>
                  <p className="font-montserrat text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-oswald tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: f.color }}>
                    Вступить <Icon name="ArrowRight" size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── FEATURES ─── */}
      {active === "features" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs text-yellow-500 tracking-[0.4em] uppercase mb-3">Геймплей</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase mb-4">Возможности</h1>
            <p className="font-montserrat text-gray-400 max-w-lg">Полноценный ролевой мир с живой экономикой, криминалом и реальными игроками</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {features.map((f, i) => (
              <div key={f.title}
                className="bg-[#0a0a0a] border border-white/5 p-7 hover:border-yellow-900/50 transition-all group animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors">
                  <Icon name={f.icon} fallback="Zap" size={22} className="text-yellow-400" />
                </div>
                <h3 className="font-oswald text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{f.title}</h3>
                <p className="font-montserrat text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border border-yellow-900/40 bg-[#0a0a0a] p-10 text-center"
            style={{ boxShadow: "0 0 40px rgba(234,179,8,0.05)" }}>
            <h2 className="font-oswald text-3xl md:text-5xl font-black uppercase mb-4">Готов начать?</h2>
            <p className="font-montserrat text-gray-400 mb-8 max-w-md mx-auto">Подключайся прямо сейчас. Регистрация бесплатная, старт моментальный.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="font-oswald text-sm uppercase tracking-widest px-12 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold transition-all hover:scale-105"
                style={{ boxShadow: "0 0 25px rgba(234,179,8,0.3)" }}>
                Играть бесплатно
              </button>
              <div className="font-oswald text-sm text-gray-600 tracking-widest">samp.blackrussia.ru:7777</div>
            </div>
          </div>
        </div>
      )}

      {/* ─── COMMUNITY ─── */}
      {active === "community" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs text-yellow-500 tracking-[0.4em] uppercase mb-3">Игроки</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-black uppercase mb-4">Сообщество</h1>
            <p className="font-montserrat text-gray-400">Обсуждай игру, ищи напарников, торгуй бизнесом</p>
          </div>

          {/* Отзывы */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {reviews.map((r) => (
              <div key={r.user} className="bg-[#0a0a0a] border border-white/5 p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-yellow-400" />
                  ))}
                </div>
                <p className="font-montserrat text-sm text-gray-300 leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <div className="font-oswald text-sm text-white">{r.user}</div>
                  <div className="font-montserrat text-xs text-gray-600">{r.rank}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Post form */}
          <div className="border border-white/8 bg-[#0a0a0a] p-5 mb-6">
            <textarea
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder="Напиши что-нибудь сообществу — ищешь банду, продаёшь бизнес или просто хочешь поговорить..."
              className="w-full bg-transparent font-montserrat text-sm text-white placeholder-gray-700 resize-none outline-none border-b border-white/8 pb-3 mb-3 min-h-[72px]"
            />
            <div className="flex justify-between items-center">
              <span className="font-oswald text-xs text-gray-700 tracking-widest">BLACK RUSSIA COMMUNITY</span>
              <button onClick={handlePost} disabled={!msg.trim()}
                className="font-oswald text-xs uppercase tracking-widest px-5 py-2 bg-yellow-500 hover:bg-yellow-400 disabled:opacity-30 text-black font-bold transition-colors disabled:cursor-not-allowed">
                Отправить
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="flex flex-col gap-3">
            {posts.map((p, i) => (
              <div key={i} className="border border-white/5 bg-[#0a0a0a] p-5 hover:border-white/10 transition-colors animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-900/30 flex items-center justify-center font-oswald text-yellow-600 text-xs font-bold">
                      {p.user[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-oswald text-sm text-white">{p.user}</div>
                      <div className="font-montserrat text-xs" style={{ color: p.rank_color ?? "#6b7280" }}>{p.rank}</div>
                    </div>
                  </div>
                  <span className="font-montserrat text-xs text-gray-700">{p.time}</span>
                </div>
                <p className="font-montserrat text-sm text-gray-300 leading-relaxed mb-3">{p.text}</p>
                <div className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors cursor-pointer w-fit">
                  <Icon name="ThumbsUp" size={13} />
                  <span className="font-oswald text-xs">{p.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 md:px-16 py-10 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-yellow-500 flex items-center justify-center font-oswald font-black text-black text-xs">BR</div>
            <span className="font-oswald text-sm text-gray-600 tracking-widest uppercase">Black Russia © 2026</span>
          </div>
          <div className="flex gap-6">
            {navItems.map(item => (
              <button key={item.id} onClick={() => setActive(item.id)}
                className="font-oswald text-xs text-gray-700 hover:text-gray-400 tracking-widest uppercase transition-colors">
                {item.label}
              </button>
            ))}
          </div>
          <div className="font-oswald text-xs text-gray-700 tracking-widest">samp.blackrussia.ru</div>
        </div>
      </footer>
    </div>
  );
}
