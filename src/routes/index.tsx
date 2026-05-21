import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search, X, Megaphone, ChevronDown, Star, Rocket, Gift, UserPlus, LogIn, User,
  Flame, Dices, Link2, Fish, Spade, Trophy, FlaskConical, Clock, Heart, Send, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const BG = "#1e2a3a";
const BG_DARK = "#172230";
const BG_SIDE = "#4a6080";
const GOLD = "#f5c518";

const categories = [
  { id: "hot", label: "Hot", icon: Flame },
  { id: "slot", label: "Slot", icon: Dices },
  { id: "blockchain", label: "Blockchain", icon: Link2 },
  { id: "fishing", label: "Fishing", icon: Fish },
  { id: "cards", label: "Cards", icon: Spade },
  { id: "sports", label: "Sports", icon: Trophy },
  { id: "demo", label: "Demo", icon: FlaskConical },
  { id: "recent", label: "Recent", icon: Clock },
  { id: "favorites", label: "Favorites", icon: Heart },
];

const hotGames = [
  "Fortune Tiger", "Fortune Rabbit", "Fortune Ox", "Fortune Mouse",
  "Wild Bandito", "Treasures Aztec", "Lucky Neko", "Mahjong Ways", "Caishen Wins",
];
const slotProviders = ["PP Slots", "PG Slots", "JILI", "CQ9", "Spribe", "Habanero"];
const blockGames = ["Crash X", "Aviator", "Mines", "Plinko", "Limbo", "Dice"];
const fishGames = ["Bombing Fish", "Jackpot Fishing", "Mega Fish", "All-Star Fish", "Boom Legend", "Fish Hunter"];
const cardGames = ["Baccarat", "Dragon Tiger", "Sic Bo", "Poker", "Andar Bahar", "Teen Patti"];
const sportGames = ["Football", "Basketball", "Tennis", "eSports", "Cricket", "Boxing"];

const winners = Array.from({ length: 12 }, (_, i) => ({
  game: ["Fortune Rabbit 2", "Fortune Tiger", "Lucky Neko", "Wild Bandito", "Mahjong Ways"][i % 5],
  user: `Mar***${100 + i}`,
  mult: [98, 120, 76, 215, 48, 312, 88, 56][i % 8],
}));

function GameCard({ name, idx }: { name: string; idx: number }) {
  const hues = [12, 200, 280, 340, 50, 160];
  const h = hues[idx % hues.length];
  return (
    <div className="relative">
      <div
        className="aspect-square rounded-lg overflow-hidden flex items-end p-1.5"
        style={{ background: `linear-gradient(135deg, hsl(${h} 70% 35%), hsl(${(h + 40) % 360} 70% 20%))` }}
      >
        <div className="text-[9px] text-white/80 font-semibold bg-black/40 px-1 rounded">HOT</div>
      </div>
      <button className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/40 flex items-center justify-center">
        <Star className="w-3 h-3 text-white/80" />
      </button>
      <div className="mt-1 text-[11px] text-white truncate">{name}</div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-3 pt-4 pb-2">
      <h2 className="text-white font-semibold text-sm flex items-center gap-1">
        <span className="w-1 h-4 rounded" style={{ background: GOLD }} />
        {title}
      </h2>
      <button className="text-xs text-white/60 flex items-center gap-0.5">
        All <ChevronDown className="w-3 h-3 -rotate-90" />
      </button>
    </div>
  );
}

function GameGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 px-3">
      {items.map((g, i) => <GameCard key={g + i} name={g} idx={i} />)}
    </div>
  );
}

function LoadMore() {
  return (
    <div className="px-3 mt-3">
      <button className="w-full py-2 rounded-md text-xs text-white/70 border border-white/15 bg-white/5">
        Load More
      </button>
    </div>
  );
}

function Index() {
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [activeCat, setActiveCat] = useState("hot");
  const [bannerIdx, setBannerIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setBannerIdx((i) => (i + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    carouselRef.current?.scrollTo({ left: bannerIdx * (carouselRef.current.clientWidth), behavior: "smooth" });
  }, [bannerIdx]);

  return (
    <div className="min-h-screen w-full flex justify-center" style={{ background: BG_SIDE }}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%);} 100% { transform: translateX(-100%);} }
        .marquee-track { animation: marquee 22s linear infinite; }
        @keyframes vscroll { 0% { transform: translateY(0);} 100% { transform: translateY(-50%);} }
        .vscroll-track { animation: vscroll 18s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <div
        className="relative w-full max-w-[430px] min-h-screen text-white pb-20"
        style={{ background: BG, fontFamily: "Inter, Roboto, -apple-system, system-ui, sans-serif" }}
      >
        {/* A. Top download banner */}
        {showBanner && (
          <div className="flex items-center gap-2 px-2 py-1.5" style={{ background: "#0f1822" }}>
            <button onClick={() => setShowBanner(false)} className="text-white/60">
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] text-white/80 flex-1 truncate">
              <span className="font-bold text-white">PG VIP.cc</span>
              <span className="mx-1 text-white/40">|</span>
              Baixar o APP
              <span className="mx-1 text-white/40">|</span>
              <span style={{ color: GOLD }}>Receba agora</span>
            </div>
            <button
              className="text-[11px] font-bold px-2.5 py-1 rounded"
              style={{ background: GOLD, color: "#000" }}
            >
              Download now
            </button>
          </div>
        )}

        {/* B. Header */}
        <div className="flex items-center justify-between px-3 py-2.5" style={{ background: BG }}>
          <div className="flex items-center gap-1">
            <span
              className="font-black text-lg tracking-tight"
              style={{ color: GOLD, textShadow: "0 1px 0 rgba(0,0,0,0.4)" }}
            >
              PGVIP
            </span>
            <span className="text-xs text-white/70 font-semibold">.cc</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* C. Promo carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-3 gap-2"
        >
          {[0, 1, 2, 3].map((i) => {
            const grads = [
              "linear-gradient(120deg,#c91f1f,#7a0e0e)",
              "linear-gradient(120deg,#1a6cff,#0b2e7a)",
              "linear-gradient(120deg,#d4a017,#7a5a0a)",
              "linear-gradient(120deg,#1aa05a,#0a4a2a)",
            ];
            const titles = ["100% Bônus de Boas-vindas", "Mega Jackpot Diário", "Cashback 20%", "Indique e Ganhe"];
            return (
              <div
                key={i}
                className="snap-center shrink-0 w-full rounded-xl h-32 flex flex-col justify-center px-4"
                style={{ background: grads[i] }}
              >
                <div className="text-[10px] uppercase tracking-widest text-white/70">Promoção</div>
                <div className="text-lg font-extrabold leading-tight">{titles[i]}</div>
                <div className="text-[11px] text-white/80 mt-1">Toque para participar →</div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-1 mt-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all"
              style={{ width: bannerIdx === i ? 16 : 6, background: bannerIdx === i ? GOLD : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>

        {/* D. Marquee */}
        <div className="mt-3 mx-3 flex items-center gap-2 px-2 py-1.5 rounded-md" style={{ background: BG_DARK }}>
          <Megaphone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
          <div className="overflow-hidden flex-1">
            <div className="marquee-track whitespace-nowrap text-[11px] text-white/80">
              【PGVIP】❤️ As recompensas de recarga de 4 de maio foram distribuídas! Resgate as suas agora! ❤️
            </div>
          </div>
        </div>

        {/* E. Grand Prize Record */}
        <div className="mt-3 mx-3 rounded-md p-2" style={{ background: BG_DARK }}>
          <div className="flex items-center gap-1 mb-1.5">
            <Trophy className="w-3.5 h-3.5" style={{ color: GOLD }} />
            <span className="text-xs font-semibold">Grand Prize Record</span>
          </div>
          <div className="h-16 overflow-hidden relative">
            <div className="vscroll-track">
              {[...winners, ...winners].map((w, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                  <span className="text-white/90 w-1/3 truncate">{w.game}</span>
                  <span className="text-white/60 w-1/3 text-center truncate">Congrats {w.user}</span>
                  <span className="font-bold w-1/3 text-right" style={{ color: GOLD }}>win {w.mult}x</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* F. Quick access */}
        <div className="mt-3 mx-3 grid grid-cols-6 gap-1.5">
          <button className="col-span-1 py-1.5 rounded text-[11px] font-bold" style={{ background: GOLD, color: "#000" }}>
            Login
          </button>
          <button className="col-span-1 py-1.5 rounded text-[11px] font-bold border" style={{ borderColor: GOLD, color: GOLD }}>
            Register
          </button>
          {[
            { label: "Invite", icon: Gift },
            { label: "VIP", icon: Trophy },
            { label: "Support", icon: MessageCircle },
          ].map(({ label, icon: Icon }) => (
            <button key={label} className="flex flex-col items-center justify-center gap-0.5 text-[10px] text-white/80">
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
          <button className="flex flex-col items-center justify-center gap-0.5 text-[10px] text-white/80">
            <ChevronDown className="w-4 h-4" />
            More
          </button>
        </div>

        {/* G. Category tabs */}
        <div className="mt-4 flex overflow-x-auto no-scrollbar px-3 gap-1.5 border-b border-white/5 pb-2">
          {categories.map(({ id, label, icon: Icon }) => {
            const active = activeCat === id;
            return (
              <button
                key={id}
                onClick={() => setActiveCat(id)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] shrink-0 transition"
                style={{
                  background: active ? GOLD : "rgba(255,255,255,0.06)",
                  color: active ? "#000" : "rgba(255,255,255,0.8)",
                  fontWeight: active ? 700 : 500,
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>

        {/* H. Game grids */}
        <div className="mt-2">
          <SectionHeader title="Hot" />
          <GameGrid items={hotGames} />
          <div className="px-3 mt-2 text-[11px] text-white/60">9/62 Hot games</div>
          <LoadMore />

          <SectionHeader title="Slot" />
          <div className="grid grid-cols-3 gap-2 px-3">
            {slotProviders.map((p, i) => (
              <div key={p} className="aspect-square rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: `linear-gradient(135deg, hsl(${i * 50} 60% 30%), #1a2330)` }}>
                {p}
              </div>
            ))}
          </div>
          <LoadMore />

          <SectionHeader title="Blockchain" />
          <GameGrid items={blockGames} />
          <LoadMore />

          <SectionHeader title="Fishing" />
          <GameGrid items={fishGames} />
          <LoadMore />

          <SectionHeader title="Cards" />
          <GameGrid items={cardGames} />
          <LoadMore />

          <SectionHeader title="Sports" />
          <GameGrid items={sportGames} />
          <LoadMore />
        </div>

        {/* I. Footer */}
        <footer className="mt-8 px-3 pb-6" style={{ background: BG_DARK }}>
          <div className="grid grid-cols-3 gap-3 pt-4 text-[11px] text-white/60">
            <div>
              <div className="text-white font-semibold mb-1.5">Casino</div>
              {["Event", "Mission", "Rebate", "Unclaimed", "VIP", "Invite"].map((l) => (
                <div key={l} className="py-0.5">{l}</div>
              ))}
            </div>
            <div>
              <div className="text-white font-semibold mb-1.5">Games</div>
              {["Hot", "Slot", "Blockchain", "Fishing", "Cards", "Sports", "Demo"].map((l) => (
                <div key={l} className="py-0.5">{l}</div>
              ))}
            </div>
            <div>
              <div className="text-white font-semibold mb-1.5">Support</div>
              {["Online Support", "Help Center", "Reward Feedback"].map((l) => (
                <div key={l} className="py-0.5">{l}</div>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-white text-xs font-semibold mb-2">License Compliance</div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-[11px]">
                +18
              </div>
              <div className="text-[10px] text-white/50 leading-tight">
                Apenas para maiores de 18 anos. Jogue com responsabilidade.
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-white text-xs font-semibold mb-2">Official Channel</div>
            <div className="flex gap-2">
              {[Send, MessageCircle, Heart].map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white/80" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-[10px] text-white/30 text-center">© 2026 PGVIP.cc — All rights reserved</div>
        </footer>

        {/* J. Bottom tab bar */}
        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] grid grid-cols-5 border-t border-white/10 z-30"
          style={{ background: "#0f1822" }}
        >
          {[
            { label: "TOP", icon: Rocket },
            { label: "Offers", icon: Gift },
            { label: "Register", icon: UserPlus, highlight: true },
            { label: "Login", icon: LogIn },
            { label: "Profile", icon: User },
          ].map(({ label, icon: Icon, highlight }) => (
            <button key={label} className="flex flex-col items-center justify-center py-2 gap-0.5">
              <Icon className="w-5 h-5" style={{ color: highlight ? GOLD : "rgba(255,255,255,0.7)" }} />
              <span className="text-[10px]" style={{ color: highlight ? GOLD : "rgba(255,255,255,0.7)" }}>
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Welcome modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
            <div
              className="w-full max-w-[360px] rounded-2xl p-5 relative"
              style={{ background: BG_DARK, border: `2px solid ${GOLD}`, boxShadow: `0 0 30px rgba(245,197,24,0.3)` }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="text-center mb-3">
                <div className="text-lg font-extrabold" style={{ color: GOLD }}>Bem-vindo à PGVIP</div>
                <div className="text-[11px] text-white/60 mt-1">Novos domínios oficiais</div>
              </div>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {["pgvip.cc", "pgvip1.cc", "pgvip2.cc", "pgvip3.cc", "pgvip-app.cc"].map((d) => (
                  <div key={d} className="flex items-center justify-between bg-white/5 px-3 py-2 rounded text-xs">
                    <span className="font-mono">{d}</span>
                    <button className="text-[10px] px-2 py-0.5 rounded" style={{ background: GOLD, color: "#000", fontWeight: 700 }}>
                      Visit
                    </button>
                  </div>
                ))}
              </div>
              <label className="flex items-center gap-2 mt-4 text-[11px] text-white/70">
                <input type="checkbox" className="accent-yellow-400" />
                Don't show again today
              </label>
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-3 py-2 rounded-md text-sm font-bold"
                style={{ background: GOLD, color: "#000" }}
              >
                Enter Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
