import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Search, X, Megaphone, ChevronDown, Star, Rocket, Gift, User, Copy, Download,
  Fish, Spade, Trophy, Clock, Heart, Send, MessageCircle, HelpCircle, Wallet,
  ArrowDownToLine, Sparkles, Headphones, MoreHorizontal, ChevronRight,
} from "lucide-react";

// Real PGVIP banners (from pgvip1122.com)
import pgvipBanner1 from "@/assets/pgvip/img_1994022337179090945.png";
import pgvipBanner2 from "@/assets/pgvip/img_1994022411785891842.png";
import pgvipBanner3 from "@/assets/pgvip/img_1994022571942215682.png";
import pgvipBanner4 from "@/assets/pgvip/img_1994023475471585282.png";
import pgvipBanner5 from "@/assets/pgvip/img_1994023674686513154.png";
import pgvipBanner6 from "@/assets/pgvip/img_1913866154335563778.jpg";

// Real PGVIP game thumbnails
import pgGame1 from "@/assets/pgvip/2000098_default.png";
import pgGame2 from "@/assets/pgvip/2000126_default.png";
import pgGame3 from "@/assets/pgvip/2001007_default.png";
import pgGame4 from "@/assets/pgvip/2001027_default.png";
import pgGame5 from "@/assets/pgvip/2001064_default.png";
import pgGame6 from "@/assets/pgvip/2001066_default.png";
import pgGame7 from "@/assets/pgvip/3060_default.png";
import pgGame8 from "@/assets/pgvip/3880011_default.png";

// Category icons (sprites from site)
import catBy from "@/assets/pgvip/_sprite_icon_dtfl_by_1.png";
import catDz from "@/assets/pgvip/_sprite_icon_dtfl_dz_1.png";
import catQkl from "@/assets/pgvip/_sprite_icon_dtfl_qkl_1.png";
import catQp from "@/assets/pgvip/_sprite_icon_dtfl_qp_1.png";
import catRm from "@/assets/pgvip/_sprite_icon_dtfl_rm_1.png";
import catSc from "@/assets/pgvip/_sprite_icon_dtfl_sc_1.png";
import catSw from "@/assets/pgvip/_sprite_icon_dtfl_sw_1.png";
import catTy from "@/assets/pgvip/_sprite_icon_dtfl_ty_1.png";
import catZj from "@/assets/pgvip/_sprite_icon_dtfl_zj_1.png";

// Quick action icons
import qaGd from "@/assets/pgvip/_sprite_icon_dt_1gd.png";
import qaKf from "@/assets/pgvip/_sprite_icon_dt_1kf.png";
import qaTg from "@/assets/pgvip/_sprite_icon_dt_1tg.png";
import qaXx from "@/assets/pgvip/_sprite_icon_dt_1xx.png";

// Winner gifs (live wins ticker)
import win1 from "@/assets/pgvip/upload_2048664132579106818.gif";
import win2 from "@/assets/pgvip/upload_2048664313159553025.gif";
import win3 from "@/assets/pgvip/upload_2048664437913432065.gif";
import win4 from "@/assets/pgvip/upload_2048664613208391682.gif";
import win5 from "@/assets/pgvip/upload_2048664879127560194.gif";
import win6 from "@/assets/pgvip/upload_2048665011692437505.gif";

// Provider tile images (real avif from pgvip CDN)
import provPG from "@/assets/pgvip/providers/p_200.avif";
import provWG from "@/assets/pgvip/providers/p_13.avif";
import provTADA from "@/assets/pgvip/providers/p_27.avif";
import provPP from "@/assets/pgvip/providers/p_3.avif";
import provMarbleX from "@/assets/pgvip/providers/p_7.avif";
import provJDB from "@/assets/pgvip/providers/p_10.avif";
import provKA from "@/assets/pgvip/providers/p_14.avif";
import provMG from "@/assets/pgvip/providers/p_21.avif";
import provCQ9 from "@/assets/pgvip/providers/p_301.avif";
import provBaison from "@/assets/pgvip/providers/p_316.avif";
import provExtra1 from "@/assets/pgvip/providers/p_310.avif";
import provExtra2 from "@/assets/pgvip/providers/p_313.avif";

const BANNERS = [pgvipBanner1, pgvipBanner2, pgvipBanner3, pgvipBanner4, pgvipBanner5, pgvipBanner6];
const PG_GAMES = [pgGame1, pgGame2, pgGame3, pgGame4, pgGame5, pgGame6, pgGame7, pgGame8];
const WINNER_IMGS = [win1, win2, win3, win4, win5, win6];
void provExtra1; void provExtra2;

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

const CatIcon = (src: string) => () => <img src={src} alt="" className="w-4 h-4 object-contain" />;
const categories = [
  { id: "popular", label: "Popular", icon: CatIcon(catRm) },
  { id: "slots", label: "Slots", icon: CatIcon(catDz) },
  { id: "blockchain", label: "Blockchain", icon: CatIcon(catQkl) },
  { id: "pescaria", label: "Pescaria", icon: CatIcon(catBy) },
  { id: "cartas", label: "Cartas", icon: CatIcon(catQp) },
  { id: "esporte", label: "Esporte", icon: CatIcon(catTy) },
  { id: "recente", label: "Recente", icon: CatIcon(catSc) },
  { id: "favoritos", label: "Favoritos", icon: CatIcon(catSw) },
  { id: "promo", label: "Promo", icon: CatIcon(catZj) },
];

const popularGames: { name: string; img?: string; tag?: "PG" | "WG" | "HOT" | "NEW" }[] = [
  { name: "Fortune Tiger", img: PG_GAMES[0], tag: "PG" },
  { name: "Fortune Ox", img: PG_GAMES[1], tag: "PG" },
  { name: "Fortune Rabbit", img: PG_GAMES[2], tag: "PG" },
  { name: "Fortune Dragon", img: PG_GAMES[3], tag: "PG" },
  { name: "Mystic Guardians", img: PG_GAMES[4], tag: "PG" },
  { name: "Lucky Neko", img: PG_GAMES[5], tag: "PG" },
  { name: "Treasure Bowl", img: PG_GAMES[6], tag: "HOT" },
  { name: "Mahjong Ways", img: PG_GAMES[7], tag: "NEW" },
  { name: "Fortune House", img: PG_GAMES[0], tag: "PG" },
];

const slotProviderCards = [
  { name: "PG Slots", img: provPG },
  { name: "WG Slots", img: provWG },
  { name: "TADA Slots", img: provTADA },
  { name: "PP Slots", img: provPP },
  { name: "MarbleX Slots", img: provMarbleX },
  { name: "JDB Slots", img: provJDB },
  { name: "KA Slots", img: provKA },
  { name: "MG Slots", img: provMG },
  { name: "CQ9 Slots", img: provCQ9 },
];

const blockchainGames = [
  { name: "TADA Blockchain", img: provTADA },
  { name: "WG Blockchain", img: provWG },
  { name: "JDB Blockchain", img: provJDB },
];
const fishGamesData = [
  { name: "JDB Pescaria", img: provJDB },
  { name: "TADA Pescaria", img: provTADA },
  { name: "WG Pescaria", img: provWG },
];
const cardGamesData = [
  { name: "TADA Cartas", img: provTADA },
  { name: "Baison Cartas", img: provBaison },
  { name: "WG Cartas", img: provWG },
];
const sportGamesData = [
  { name: "WG Esporte", img: provWG },
];

const winners = Array.from({ length: 14 }, (_, i) => ({
  game: ["Fortune Rabbit 2", "Fortune Tiger", "Fortune Ox", "Treasure Bowl", "Fortune Dragon"][i % 5],
  mask: ["9***", "5***", "3***", "2***", "7***"][i % 5],
  mult: [306, 547, 502, 56, 171, 98, 215][i % 7],
  img: WINNER_IMGS[i % WINNER_IMGS.length],
  brand: (["WG", "PG", "WG", "JDB", "PG"] as const)[i % 5],
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

function ProviderCard({ name, img }: { name: string; img?: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-black/30">
      <div className="aspect-[4/5] w-full">
        {img ? <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" /> : null}
      </div>
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
            { label: "Promoção", img: qaXx, badge: "0,01" },
            { label: "Surpresa", img: qaTg },
            { label: "Suporte", img: qaKf },
            { label: "Mais", img: qaGd },
          ].map(({ label, img, badge }) => (
            <button key={label} className="flex flex-col items-center justify-center gap-1 py-1">
              <div className="relative">
                <img src={img} alt={label} className="w-8 h-8 object-contain" />
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
                <Icon />
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
