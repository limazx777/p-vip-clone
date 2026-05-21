import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search, X, Megaphone, ChevronDown, Star, Rocket, Gift, User, Copy, Download,
  Fish, Spade, Trophy, Clock, Heart, Send, MessageCircle, HelpCircle, Wallet,
  ArrowDownToLine, Sparkles, Headphones, MoreHorizontal, ChevronRight,
} from "lucide-react";
import banner1 from "@/assets/banner_1.png";
import banner2 from "@/assets/banner_2.png";
import banner3 from "@/assets/banner_3.png";
import banner4 from "@/assets/banner_4.png";
import banner5 from "@/assets/banner_5.png";
import banner6 from "@/assets/banner_6.png";
import banner7 from "@/assets/banner_7.png";
import gameTigresa from "@/assets/game-tigresa.avif";
import gameDragon from "@/assets/game-dragon.avif";
import gameFortuneHouse from "@/assets/game-fortune-house.avif";
import gameRabbit from "@/assets/game-rabbit.avif";
import pgTigrin from "@/assets/pg-tigrin.avif";
import pgTouro from "@/assets/pg-touro.avif";
import pgDragao from "@/assets/pg-dragao.avif";
import pgFortuneHouse2 from "@/assets/pg-fortune-house-2.avif";
import pgMax from "@/assets/pg-max.avif";
import pgMystic from "@/assets/pg-mystic-guardians.avif";
import pgRabbit from "@/assets/pg-rabbit.avif";

const BANNERS = [banner6, banner7, banner1, banner2, banner3, banner4, banner5];

export const Route = createFileRoute("/")({ component: Index });

const BG = "#1e2a3a";
const BG_DARK = "#172230";
const BG_CARD = "#26344a";
const BG_SIDE = "#4a6080";
const GOLD = "#f5c518";
const BLUE_LINK = "#5b8dd6";

const partners = [
  { name: "PGVIP", grad: "linear-gradient(135deg,#3a5a8a,#1c2a40)" },
  { name: "PG.bot", grad: "linear-gradient(135deg,#d4a017,#8a6a0a)" },
  { name: "HRbet", grad: "linear-gradient(135deg,#0d6b3a,#063a1f)" },
  { name: "JHbet", grad: "linear-gradient(135deg,#7a3aff,#3a1a8a)" },
  { name: "W8bet", grad: "linear-gradient(135deg,#c9a84c,#7a5e0a)" },
  { name: "7t777", grad: "linear-gradient(135deg,#0a0a0a,#2a2a2a)" },
];

const categories = [
  { id: "popular", label: "Popular", icon: Sparkles },
  { id: "slots", label: "Slots", icon: () => <span className="text-[11px] font-black" style={{ color: GOLD }}>777</span> },
  { id: "blockchain", label: "Blockchain", icon: () => <span>🎲</span> },
  { id: "pescaria", label: "Pescaria", icon: Fish },
  { id: "cartas", label: "Cartas", icon: Spade },
  { id: "esporte", label: "Esporte", icon: Trophy },
  { id: "recente", label: "Recente", icon: Clock },
  { id: "favoritos", label: "Favoritos", icon: Star },
];

const popularGames: { name: string; img?: string; tag?: "PG" | "WG" | "HOT" | "NEW" }[] = [
  { name: "Fortune Tiger", img: gameTigresa, tag: "WG" },
  { name: "Dragon Treasure", img: gameDragon, tag: "WG" },
  { name: "Fortune House", img: gameFortuneHouse, tag: "WG" },
  { name: "Fortune Horse", tag: "WG" },
  { name: "Fortune Horse", tag: "WG" },
  { name: "PG Slots", tag: "PG" },
  { name: "Fortune Rabbit", img: pgRabbit, tag: "PG" },
  { name: "Fortune Tiger", img: pgTigrin, tag: "PG" },
  { name: "Fortune Dragon", img: pgDragao, tag: "PG" },
  { name: "Mythical Guardians", img: pgMystic, tag: "PG" },
  { name: "Fortune Ox", img: pgTouro, tag: "PG" },
  { name: "Marble Run", tag: "NEW" },
];

const slotProviderCards = [
  { name: "PG Slots", grad: "linear-gradient(180deg,#ff6b35,#c4151c)" },
  { name: "WG Slots", grad: "linear-gradient(180deg,#ff8aa8,#c4151c)" },
  { name: "TADA Slots", grad: "linear-gradient(180deg,#ff5577,#a4101a)" },
  { name: "PP Slots", grad: "linear-gradient(180deg,#ff7a2f,#a4101a)" },
  { name: "MarbleX Slots", grad: "linear-gradient(180deg,#2d6cff,#0a2a8a)" },
  { name: "JDB Slots", grad: "linear-gradient(180deg,#ff3a3a,#7a0a0a)" },
  { name: "KA Slots", grad: "linear-gradient(180deg,#ff7a2f,#7a1a0a)" },
  { name: "MG Slots", grad: "linear-gradient(180deg,#5577ff,#1a2a7a)" },
  { name: "CQ9 Slots", grad: "linear-gradient(180deg,#ffb84a,#a45a0a)" },
];

const blockchainGames = [
  { name: "TADA Blockchain", grad: "linear-gradient(180deg,#a04aff,#3a1a7a)" },
  { name: "WG Blockchain", grad: "linear-gradient(180deg,#ffb84a,#a45a0a)" },
  { name: "JDB Blockchain", grad: "linear-gradient(180deg,#ffd84a,#a48a0a)" },
];
const fishGamesData = [
  { name: "JDB Pescaria", grad: "linear-gradient(180deg,#1a8aff,#0a3a7a)" },
  { name: "TADA Pescaria", grad: "linear-gradient(180deg,#3aaaff,#0a4a8a)" },
  { name: "WG Pescaria", grad: "linear-gradient(180deg,#7a3aff,#2a0a5a)" },
];
const cardGamesData = [
  { name: "TADA Cartas", grad: "linear-gradient(180deg,#3aaaff,#0a4a8a)" },
  { name: "Baison Cartas", grad: "linear-gradient(180deg,#a04aff,#5a1a8a)" },
  { name: "WG Cartas", grad: "linear-gradient(180deg,#c44aff,#5a1a8a)" },
];
const sportGamesData = [
  { name: "WG Esporte", grad: "linear-gradient(180deg,#4a6a8a,#1a2a4a)" },
];

const winners = Array.from({ length: 14 }, (_, i) => ({
  game: ["Fortune Rabbit 2", "Fortune Rabbit", "Fortune Rabbit 2", "Treasure Bowl X-Huge", "Fortune Rabbit"][i % 5],
  mask: ["9***", "5***", "3***", "2***", "7***"][i % 5],
  mult: [306, 547, 502, 56, 171, 98, 215][i % 7],
  img: [pgRabbit, gameRabbit, pgRabbit, gameFortuneHouse, pgRabbit][i % 5],
  brand: (["WG", "WG", "WG", "JDB", "WG"] as const)[i % 5],
}));

function TagPill({ tag }: { tag?: "PG" | "WG" | "HOT" | "NEW" }) {
  if (!tag) return null;
  const map = {
    PG: { bg: "#1a1a1a", color: "#fff", label: "PG" },
    WG: { bg: "#1a1a1a", color: "#fff", label: "WG" },
    HOT: { bg: "#e63946", color: "#fff", label: "HOT" },
    NEW: { bg: "#2dd4a8", color: "#000", label: "New" },
  }[tag];
  return (
    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-black" style={{ background: map.bg, color: map.color }}>
      {map.label}
    </div>
  );
}

function GameCard({ name, img, tag, redLabel = true }: { name: string; img?: string; tag?: "PG" | "WG" | "HOT" | "NEW"; redLabel?: boolean }) {
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ background: BG_DARK }}>
      <div
        className="aspect-[4/5] w-full"
        style={
          img
            ? { backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }
            : { background: `linear-gradient(135deg, hsl(${(name.length * 47) % 360} 70% 40%), hsl(${(name.length * 47 + 60) % 360} 70% 22%))` }
        }
      />
      <TagPill tag={tag} />
      <button className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 flex items-center justify-center">
        <Star className="w-3 h-3 text-white/80" />
      </button>
      {redLabel && (
        <div
          className="absolute bottom-0 left-0 right-0 text-center text-[11px] font-bold py-1 text-white truncate px-1"
          style={{ background: "linear-gradient(180deg,transparent,#c4151c 60%)" }}
        >
          {name}
        </div>
      )}
    </div>
  );
}

function ProviderCard({ name, grad }: { name: string; grad: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="aspect-[4/5] w-full" style={{ background: grad }} />
      <button className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/40 flex items-center justify-center">
        <Star className="w-3 h-3 text-white/80" />
      </button>
      <div
        className="absolute bottom-0 left-0 right-0 text-center text-[12px] font-extrabold py-1.5 text-white truncate"
        style={{ background: "linear-gradient(180deg,transparent,#c4151c 70%)" }}
      >
        {name}
      </div>
    </div>
  );
}

function SectionHeader({ title, icon }: { title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-3 pt-4 pb-2">
      <h2 className="text-white font-semibold text-sm flex items-center gap-1.5">
        {icon}
        {title}
      </h2>
      <button className="text-xs flex items-center gap-0.5" style={{ color: BLUE_LINK }}>
        Tudo <ChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
}

function LoadMore({ count }: { count?: string }) {
  return (
    <div className="px-3 mt-3 text-center">
      {count && <div className="text-[11px] mb-1" style={{ color: BLUE_LINK }}>{count}</div>}
      <button className="text-xs flex items-center justify-center gap-1 mx-auto" style={{ color: BLUE_LINK }}>
        Carregar mais <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}

function Index() {
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [activeCat, setActiveCat] = useState("popular");
  const [bannerIdx, setBannerIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setBannerIdx((i) => (i + 1) % BANNERS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    carouselRef.current?.scrollTo({ left: bannerIdx * (carouselRef.current.clientWidth || 0), behavior: "smooth" });
  }, [bannerIdx]);

  return (
    <div className="min-h-screen w-full flex justify-center" style={{ background: BG_SIDE }}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%);} 100% { transform: translateX(-100%);} }
        .marquee-track { animation: marquee 22s linear infinite; display:inline-block; }
        @keyframes hscroll { 0% { transform: translateX(0);} 100% { transform: translateX(-50%);} }
        .hscroll-track { animation: hscroll 28s linear infinite; display:flex; gap:0.5rem; width:max-content; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <div
        className="relative w-full max-w-[430px] min-h-screen text-white pb-20"
        style={{ background: BG, fontFamily: "Inter, Roboto, system-ui, sans-serif" }}
      >
        {/* Top banner */}
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
            <button className="text-[11px] font-bold px-2.5 py-1 rounded" style={{ background: GOLD, color: "#000" }}>
              Download
            </button>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-tight text-white" style={{ fontFamily: "'Press Start 2P', monospace, system-ui" }}>
              PG<span style={{ color: GOLD }}>VIP</span><span className="text-base" style={{ color: GOLD }}>cc</span>
            </span>
            <Download className="w-3.5 h-3.5 ml-1" style={{ color: BLUE_LINK }} />
          </div>
          <button className="flex flex-col items-center">
            <Search className="w-5 h-5" style={{ color: GOLD }} />
            <span className="text-[10px]" style={{ color: BLUE_LINK }}>Pesquisar</span>
          </button>
        </div>

        {/* Promo carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-3 gap-2"
        >
          {BANNERS.map((src, i) => (
            <div key={i} className="snap-center shrink-0 w-full rounded-xl overflow-hidden">
              <img src={src} alt={`Promoção ${i + 1}`} className="w-full h-auto block" />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-2">
          {BANNERS.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all"
              style={{ width: bannerIdx === i ? 16 : 6, background: bannerIdx === i ? GOLD : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>

        {/* Partner brands row */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 px-3 mt-3">
          {partners.map((p) => (
            <div key={p.name} className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-[11px] font-extrabold text-white shadow-md" style={{ background: p.grad }}>
              {p.name}
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-3 mx-3 flex items-center gap-2 px-2 py-1.5 rounded-md" style={{ background: BG_DARK }}>
          <Megaphone className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
          <div className="overflow-hidden flex-1">
            <div className="marquee-track whitespace-nowrap text-[11px] text-white/80">
              <span style={{ color: "#ff6b6b" }}>❤</span> Bem-vindo a <span style={{ color: "#ff3a3a", fontWeight: 700 }}>PGVIP</span> <span style={{ color: "#ff6b6b" }}>❤</span>! Aqui você desfrutará de uma experiência completa com bônus diários, recompensas e os melhores jogos!
            </div>
          </div>
          <Send className="w-3.5 h-3.5 shrink-0 text-white/50" />
        </div>

        {/* Recorde do Grande Prêmio */}
        <div className="mt-3">
          <div className="text-center text-sm font-semibold flex items-center justify-center gap-2 py-2">
            <span style={{ color: GOLD }}>✦</span>
            Recorde do Grande Prêmio
            <span style={{ color: GOLD }}>✦</span>
          </div>
          <div className="overflow-hidden" style={{ background: BG_DARK }}>
            <div className="hscroll-track py-2">
              {[...winners, ...winners].map((w, i) => (
                <div key={i} className="shrink-0 w-24 rounded-md overflow-hidden text-center" style={{ background: BG_CARD }}>
                  <div className="relative h-24 w-full" style={{ backgroundImage: `url(${w.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <span className="absolute top-1 left-1 text-[9px] font-black bg-black/70 text-white px-1 rounded">{w.brand}</span>
                    <div className="absolute bottom-0 left-0 right-0 text-[9px] font-bold text-white py-0.5 truncate px-1" style={{ background: "linear-gradient(180deg,transparent,rgba(0,0,0,0.8))" }}>
                      {w.game}
                    </div>
                  </div>
                  <div className="text-[10px] py-0.5" style={{ color: "#5cdb95" }}>Parabéns!{w.mask}</div>
                  <div className="text-[9px] text-white/60">win</div>
                  <div className="text-[12px] font-black pb-1" style={{ color: GOLD }}>{w.mult}x</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User row */}
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px]">
            <ChevronDown className="w-3 h-3 text-white/60" />
            <span className="text-white/80">znql9556</span>
            <Copy className="w-3 h-3 text-white/50" />
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full" style={{ border: `1px solid ${GOLD}` }}>
            <span className="text-[11px]">🇧🇷</span>
            <span className="text-[11px] font-semibold" style={{ color: GOLD }}>0,02</span>
            <Sparkles className="w-3 h-3" style={{ color: GOLD }} />
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-2 px-3 pb-2">
          {[
            { label: "Promoção", icon: Gift, badge: "0,01", color: "#3aaaff" },
            { label: "Surpresa", icon: Sparkles, color: GOLD },
            { label: "Suporte", icon: Headphones, color: "#3aaaff" },
            { label: "Mais", icon: MoreHorizontal, color: "#a04aff" },
          ].map(({ label, icon: Icon, badge, color }) => (
            <button key={label} className="flex flex-col items-center justify-center gap-1 py-1">
              <div className="relative">
                <Icon className="w-7 h-7" style={{ color }} />
                {badge && (
                  <span className="absolute -top-1 -right-2 text-[8px] font-bold px-1 py-0.5 rounded-full" style={{ background: "#2dd4a8", color: "#000" }}>
                    {badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-white/90">{label}</span>
            </button>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex overflow-x-auto no-scrollbar px-3 gap-3 border-b border-white/10 pb-2 mt-1">
          {categories.map(({ id, label, icon: Icon }) => {
            const active = activeCat === id;
            return (
              <button
                key={id}
                onClick={() => setActiveCat(id)}
                className="flex items-center gap-1 py-1.5 shrink-0 text-[12px] relative"
                style={{ color: active ? GOLD : "rgba(255,255,255,0.7)", fontWeight: active ? 700 : 500 }}
              >
                <Icon className="w-4 h-4" />
                {label}
                {active && <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded" style={{ background: GOLD }} />}
              </button>
            );
          })}
        </div>

        {/* Popular games grid */}
        <div className="mt-3 grid grid-cols-3 gap-2 px-3">
          {popularGames.map((g, i) => (
            <GameCard key={g.name + i} name={g.name} img={g.img} tag={g.tag} />
          ))}
        </div>
        <LoadMore count="A exibir 9 jogos de 62 Popular jogos" />

        {/* Slots */}
        <SectionHeader
          title="Slots"
          icon={<span className="text-[12px] font-black" style={{ color: GOLD }}>777</span>}
        />
        <div className="mx-3 mb-2 rounded-xl overflow-hidden h-20 flex items-center justify-center text-2xl font-black" style={{ background: "linear-gradient(90deg,#c4151c,#7a0a10)" }}>
          <span style={{ color: GOLD, letterSpacing: "0.05em" }}>JACKPOT</span>
        </div>
        <div className="grid grid-cols-3 gap-2 px-3">
          {slotProviderCards.map((p) => <ProviderCard key={p.name} name={p.name} grad={p.grad} />)}
        </div>
        <LoadMore count="A exibir 9 jogos de 10 Slots jogos" />

        {/* Blockchain */}
        <SectionHeader title="Blockchain" icon={<span>🎲</span>} />
        <div className="grid grid-cols-3 gap-2 px-3">
          {blockchainGames.map((p) => <ProviderCard key={p.name} name={p.name} grad={p.grad} />)}
        </div>

        {/* Pescaria */}
        <SectionHeader title="Pescaria" icon={<Fish className="w-4 h-4" style={{ color: "#3aaaff" }} />} />
        <div className="grid grid-cols-3 gap-2 px-3">
          {fishGamesData.map((p) => <ProviderCard key={p.name} name={p.name} grad={p.grad} />)}
        </div>
        <LoadMore count="A exibir 3 jogos de 5 Pescaria jogos" />

        {/* Cartas */}
        <SectionHeader title="Cartas" icon={<Spade className="w-4 h-4 text-white/80" />} />
        <div className="grid grid-cols-3 gap-2 px-3">
          {cardGamesData.map((p) => <ProviderCard key={p.name} name={p.name} grad={p.grad} />)}
        </div>

        {/* Esporte */}
        <SectionHeader title="Esporte" icon={<Trophy className="w-4 h-4 text-white/80" />} />
        <div className="grid grid-cols-3 gap-2 px-3">
          {sportGamesData.map((p) => <ProviderCard key={p.name} name={p.name} grad={p.grad} />)}
        </div>

        {/* Footer */}
        <footer className="mt-8 px-4 pb-8" style={{ background: BG_DARK }}>
          <div className="grid grid-cols-3 gap-4 pt-5 text-[12px]" style={{ color: BLUE_LINK }}>
            <div className="space-y-2">
              <div className="font-semibold">Cassino</div>
              {["Eventos", "Missão", "Taxa de Rebate", "Recompensas", "VIP", "Promoção"].map((l) => <div key={l}>{l}</div>)}
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Jogos</div>
              {["Popular", "Slots", "Blockchain", "Pescaria", "Cards", "Esporte"].map((l) => <div key={l}>{l}</div>)}
            </div>
            <div className="space-y-2">
              <div className="font-semibold">Suporte</div>
              {["Suporte", "Central de Ajuda", "Bônus de Sugestão"].map((l) => <div key={l}>{l}</div>)}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs mb-2" style={{ color: BLUE_LINK }}>Conformidade de licença</div>
            <div className="w-11 h-11 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-[12px]">
              18+
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs mb-2" style={{ color: BLUE_LINK }}>Canal Oficial</div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "#0d6b3a" }}>HRbet</div>
              <div className="w-10 h-10 rounded-md flex items-center justify-center text-[9px] font-extrabold text-white" style={{ background: "#d4a017" }}>PG.bot</div>
              <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold">f</div>
              <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center"><Send className="w-5 h-5 text-white" /></div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs mb-2" style={{ color: BLUE_LINK }}>Contate-Nos</div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center"><Send className="w-5 h-5 text-white" /></div>
              <div className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold">f</div>
              <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center"><Send className="w-5 h-5 text-white" /></div>
            </div>
          </div>

          <div className="mt-6 text-[11px] leading-relaxed text-center" style={{ color: BLUE_LINK }}>
            O PGVIP.cc é operado pela PGVIP.cc N.V., licenciada e autorizada para operar jogos de cassino online.
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 opacity-80">
            {["PG", "JDB", "WG", "JILI", "FC"].map((b) => (
              <span key={b} className="text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-white/30 text-white/80">{b}</span>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-3 opacity-70">
            <span className="text-[10px] text-white/60">MGA</span>
            <span className="text-[10px] text-white/60">GLI</span>
            <span className="text-[10px] text-white/60">GAMBLING COMMISSION</span>
          </div>
          <div className="mt-4 text-[10px] text-center" style={{ color: BLUE_LINK }}>PGVIP @Copyright 2002-2026</div>
        </footer>

        {/* Bottom tab bar */}
        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] grid grid-cols-5 border-t border-white/10 z-30"
          style={{ background: "#0f1822" }}
        >
          {([
            { label: "Começar", icon: Rocket, to: "/" as const, active: true },
            { label: "Ofertas", icon: Gift, to: "/offers" as const },
            { label: "Depósito", icon: Wallet, to: "/profile" as const, badge: "+1%" },
            { label: "Saques", icon: ArrowDownToLine, to: "/profile" as const },
            { label: "Perfil", icon: User, to: "/profile" as const },
          ]).map(({ label, icon: Icon, to, active, badge }) => (
            <Link
              key={label}
              to={to}
              onClick={label === "Começar" ? () => window.scrollTo({ top: 0, behavior: "smooth" }) : undefined}
              className="flex flex-col items-center justify-center py-2 gap-0.5 relative"
            >
              <div className="relative">
                <Icon className="w-5 h-5" style={{ color: active ? GOLD : BLUE_LINK }} />
                {badge && (
                  <span className="absolute -top-1.5 -right-3 text-[8px] font-bold px-1 py-0.5 rounded" style={{ background: "#e63946", color: "#fff" }}>
                    {badge}
                  </span>
                )}
              </div>
              <span className="text-[10px]" style={{ color: active ? GOLD : BLUE_LINK }}>{label}</span>
            </Link>
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
                    <button className="text-[10px] px-2 py-0.5 rounded font-bold" style={{ background: GOLD, color: "#000" }}>
                      Visitar
                    </button>
                  </div>
                ))}
              </div>
              <label className="flex items-center gap-2 mt-4 text-[11px] text-white/70">
                <input type="checkbox" className="accent-yellow-400" />
                Não mostrar novamente hoje
              </label>
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-3 py-2 rounded-md text-sm font-bold"
                style={{ background: GOLD, color: "#000" }}
              >
                Entrar no Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
