import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/4399c35d-93fd-4da6-9074-210e4a6d6f0a/files/82cbdd63-7270-48cd-9edb-79e758158c75.jpg";

const characters = [
  {
    name: "Eleven",
    role: "Телепат",
    desc: "Беглянка из секретной лаборатории с телекинетическими способностями",
    emoji: "🔴",
  },
  {
    name: "Mike Wheeler",
    role: "Лидер",
    desc: "Сердце группы, первым встретил Одиннадцать и поверил в её силу",
    emoji: "📻",
  },
  {
    name: "Jim Hopper",
    role: "Шериф",
    desc: "Главный шериф Хокинса, скрывающий тёмное прошлое и защищающий детей",
    emoji: "🔦",
  },
  {
    name: "Will Byers",
    role: "Пропавший",
    desc: "Мальчик, похищенный в Перевёрнутый мир и связанный с тёмными силами",
    emoji: "🎮",
  },
  {
    name: "Dustin Henderson",
    role: "Изобретатель",
    desc: "Гений науки и радио, всегда находит нестандартный выход из ситуации",
    emoji: "🧲",
  },
  {
    name: "Max Mayfield",
    role: "Бунтарка",
    desc: "Бесстрашная новенькая с тёмными тайнами и невероятной силой воли",
    emoji: "🛹",
  },
];

const news = [
  {
    date: "Февраль 2026",
    tag: "ОФИЦИАЛЬНО",
    title: "Stranger Things 5: Финальный сезон",
    text: "Netflix подтвердил дату выхода последнего сезона. Создатели обещают грандиозный финал и ответы на все вопросы.",
  },
  {
    date: "Январь 2026",
    tag: "НОВОСТЬ",
    title: "Возвращение любимых персонажей",
    text: "Братья Дафер намекнули на возвращение нескольких персонажей, которых фанаты считали потерянными навсегда.",
  },
  {
    date: "Декабрь 2025",
    tag: "ЗА КАДРОМ",
    title: "Съёмки завершены в Атланте",
    text: "Главная съёмочная группа закончила работу над финальными сценами. Монтаж и спецэффекты продолжаются.",
  },
];

const messages = [
  { user: "ElvenFan_88", time: "2 мин назад", text: "Кто думает, что Уилл снова окажется в Перевёрнутом мире в финале?! 😱", likes: 24 },
  { user: "HawkinsLocal", time: "15 мин назад", text: "Только что пересмотрел 4 сезон. Сцена с Максом и Kate Bush — шедевр. До сих пор мурашки.", likes: 47 },
  { user: "DemogorgonHunter", time: "1 час назад", text: "Теория: Векна — это не финальный злодей. Есть кто-то ещё выше в иерархии Перевёрнутого мира.", likes: 89 },
  { user: "ElevenPowers", time: "3 час назад", text: "Какой ваш любимый момент всего сериала? Мой — когда Одиннадцать останавливает поезд.", likes: 63 },
];

type Section = "home" | "characters" | "news" | "community";

const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "characters", label: "Персонажи" },
  { id: "news", label: "Новости" },
  { id: "community", label: "Сообщество" },
];

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [communityMessages, setCommunityMessages] = useState(messages);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setCommunityMessages([
      {
        user: "Гость",
        time: "только что",
        text: newMessage,
        likes: 0,
      },
      ...communityMessages,
    ]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-[#080808] font-montserrat text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)" }}>
        <button
          onClick={() => setActive("home")}
          className="font-oswald text-xl font-bold tracking-[0.25em] text-white uppercase hover:text-red-500 transition-colors"
        >
          STRANGER<span className="text-red-600"> THINGS</span>
        </button>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`font-oswald text-sm tracking-widest uppercase transition-all duration-300 ${
                active === item.id
                  ? "text-red-500 text-glow-red"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setMenuOpen(false); }}
              className={`font-oswald text-2xl tracking-widest uppercase ${
                active === item.id ? "text-red-500" : "text-gray-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HOME */}
      {active === "home" && (
        <div>
          {/* HERO */}
          <section className="relative h-screen flex items-end pb-24 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.2) 100%)" }}
            />
            <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

            <div className="relative z-10 px-6 md:px-16 max-w-4xl">
              <p className="font-oswald text-xs tracking-[0.4em] text-red-500 uppercase mb-4 animate-fade-in opacity-0 delay-100">
                Хокинс, Индиана • 1983
              </p>
              <h1 className="font-oswald text-6xl md:text-9xl font-bold leading-none uppercase mb-6 animate-fade-in opacity-0 delay-200">
                STRANGER<br />
                <span className="text-red-600 text-glow-red animate-flicker">THINGS</span>
              </h1>
              <p className="font-montserrat text-base md:text-lg text-gray-300 max-w-xl leading-relaxed mb-8 animate-fade-in opacity-0 delay-300">
                В маленьком городке происходят сверхъестественные события. Группа детей, шериф и их семьи сталкиваются с тайными экспериментами, монстрами из параллельного измерения и силами, которые нельзя объяснить.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 delay-500">
                <button
                  onClick={() => setActive("characters")}
                  className="font-oswald tracking-widest text-sm uppercase px-8 py-3 bg-red-700 hover:bg-red-600 text-white transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: "0 0 20px rgba(204,0,0,0.4)" }}
                >
                  Персонажи
                </button>
                <button
                  onClick={() => setActive("community")}
                  className="font-oswald tracking-widest text-sm uppercase px-8 py-3 border border-white/30 text-white hover:border-white/80 hover:text-white transition-all duration-300"
                >
                  Сообщество
                </button>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40 animate-fade-in opacity-0 delay-700">
              <span className="font-oswald text-xs tracking-widest uppercase text-gray-400">Scroll</span>
              <div className="w-px h-12 bg-gray-600 animate-pulse" />
            </div>
          </section>

          {/* ABOUT */}
          <section className="px-6 md:px-16 py-24 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {[
                { icon: "Tv", label: "5 сезонов", desc: "Захватывающей истории о тайнах Хокинса" },
                { icon: "Users", label: "Миллионы", desc: "Фанатов по всему миру объединились в сообщество" },
                { icon: "Star", label: "Культовый", desc: "Сериал, изменивший жанр научной фантастики" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0e0e0e] p-8 hover:bg-[#121212] transition-colors">
                  <Icon name={item.icon} fallback="Star" size={28} className="text-red-600 mb-4" />
                  <div className="font-oswald text-2xl font-bold mb-2">{item.label}</div>
                  <div className="font-montserrat text-sm text-gray-400 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* LATEST NEWS */}
          <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-oswald text-3xl uppercase tracking-widest">
                Последние <span className="text-red-600">новости</span>
              </h2>
              <button onClick={() => setActive("news")} className="font-oswald text-xs text-gray-500 hover:text-red-400 tracking-widest uppercase transition-colors flex items-center gap-2">
                Все новости <Icon name="ArrowRight" size={14} />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {news.map((item) => (
                <div key={item.title} className="border border-white/8 bg-[#0e0e0e] p-6 hover:border-red-900/50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-oswald text-xs text-red-500 tracking-widest">{item.tag}</span>
                    <span className="text-xs text-gray-600">{item.date}</span>
                  </div>
                  <h3 className="font-oswald text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* CHARACTERS */}
      {active === "characters" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs tracking-[0.4em] text-red-500 uppercase mb-3">Хокинс, Индиана</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">
              Персонажи
            </h1>
            <p className="text-gray-400 font-montserrat max-w-lg">Люди, которые сражаются против тьмы — каждый со своей историей и болью</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map((char, i) => (
              <div
                key={char.name}
                className="bg-[#0e0e0e] border border-white/5 p-6 hover:border-red-900/60 transition-all duration-300 group cursor-pointer animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{char.emoji}</div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-oswald text-xl font-bold group-hover:text-red-400 transition-colors">{char.name}</h3>
                  <span className="font-oswald text-xs text-red-600 tracking-widest uppercase">{char.role}</span>
                </div>
                <p className="font-montserrat text-sm text-gray-400 leading-relaxed">{char.desc}</p>
                <div className="mt-4 h-px bg-white/5 group-hover:bg-red-900/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEWS */}
      {active === "news" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs tracking-[0.4em] text-red-500 uppercase mb-3">Обновления</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">Новости</h1>
            <p className="text-gray-400 font-montserrat">Всё о последнем сезоне и жизни сериала</p>
          </div>

          <div className="flex flex-col gap-6">
            {[...news, {
              date: "Ноябрь 2025",
              tag: "ТЕОРИЯ",
              title: "Что такое на самом деле Перевёрнутый мир?",
              text: "Фанаты собрали все улики из четырёх сезонов и выдвинули новую теорию о природе Перевёрнутого мира и его связи с реальным миром.",
            }, {
              date: "Октябрь 2025",
              tag: "КУЛЬТУРА",
              title: "Stranger Things изменил поп-культуру 80-х навсегда",
              text: "Как сериал возродил интерес к музыке, играм и эстетике восьмидесятых у нового поколения зрителей по всему миру.",
            }].map((item, i) => (
              <article
                key={item.title}
                className="border-b border-white/8 pb-6 group cursor-pointer animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-oswald text-xs text-red-500 tracking-widest border border-red-900/50 px-2 py-0.5">{item.tag}</span>
                  <span className="font-montserrat text-xs text-gray-600">{item.date}</span>
                </div>
                <h2 className="font-oswald text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{item.title}</h2>
                <p className="font-montserrat text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* COMMUNITY */}
      {active === "community" && (
        <div className="pt-28 px-6 md:px-16 pb-24 max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-oswald text-xs tracking-[0.4em] text-red-500 uppercase mb-3">Фанаты</p>
            <h1 className="font-oswald text-5xl md:text-7xl font-bold uppercase mb-4">Сообщество</h1>
            <p className="text-gray-400 font-montserrat">Обсуждай теории, делись впечатлениями, находи единомышленников</p>
          </div>

          {/* Post form */}
          <div className="border border-white/10 bg-[#0e0e0e] p-4 mb-8">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Поделись своей теорией или мнением о сериале..."
              className="w-full bg-transparent font-montserrat text-sm text-white placeholder-gray-600 resize-none outline-none border-b border-white/10 pb-3 mb-3 min-h-[72px]"
            />
            <div className="flex justify-between items-center">
              <span className="font-oswald text-xs text-gray-600 tracking-wider">HAWKINS FAN CLUB</span>
              <button
                onClick={handleSend}
                disabled={!newMessage.trim()}
                className="font-oswald text-xs uppercase tracking-widest px-5 py-2 bg-red-700 hover:bg-red-600 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
              >
                Отправить
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-4">
            {communityMessages.map((msg, i) => (
              <div
                key={i}
                className="border border-white/5 bg-[#0e0e0e] p-5 hover:border-white/15 transition-colors animate-fade-in opacity-0"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-900/40 flex items-center justify-center">
                      <Icon name="User" size={12} className="text-red-400" />
                    </div>
                    <span className="font-oswald text-sm text-white">{msg.user}</span>
                  </div>
                  <span className="font-montserrat text-xs text-gray-600">{msg.time}</span>
                </div>
                <p className="font-montserrat text-sm text-gray-300 leading-relaxed mb-3">{msg.text}</p>
                <div className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors cursor-pointer w-fit">
                  <Icon name="Heart" size={13} />
                  <span className="font-oswald text-xs">{msg.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 md:px-16 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-sm tracking-widest text-gray-600 uppercase">
            Stranger Things Fan Site © 2026
          </div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="font-oswald text-xs text-gray-700 hover:text-gray-400 tracking-widest uppercase transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="font-montserrat text-xs text-gray-700">
            Не аффилирован с Netflix
          </div>
        </div>
      </footer>
    </div>
  );
}