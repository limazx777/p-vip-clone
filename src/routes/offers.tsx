import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Gift } from "lucide-react";

export const Route = createFileRoute("/offers")({ component: OffersPage });

const GOLD = "#f5c518";
const BG = "#1e2a3a";
const BG_DARK = "#172230";
const BG_SIDE = "#4a6080";

const offers = [
  { title: "100% Welcome Bonus", desc: "Get up to R$ 500 on your first deposit", tag: "NEW" },
  { title: "Daily Cashback 20%", desc: "Recover losses every day automatically", tag: "DAILY" },
  { title: "Friday Reload", desc: "50% reload bonus every Friday night", tag: "WEEKLY" },
  { title: "VIP Mega Jackpot", desc: "Exclusive jackpot draws for VIP members", tag: "VIP" },
  { title: "Refer & Earn R$ 30", desc: "Invite friends and earn for every signup", tag: "INVITE" },
];

function OffersPage() {
  return (
    <div className="min-h-screen flex justify-center" style={{ background: BG_SIDE }}>
      <div className="w-full max-w-[430px] text-white pb-20" style={{ background: BG, fontFamily: "Inter, system-ui" }}>
        <div className="flex items-center px-3 py-3 border-b border-white/10">
          <Link to="/" className="text-white"><ArrowLeft className="w-5 h-5" /></Link>
          <div className="flex-1 text-center font-semibold">Offers</div>
          <div className="w-5" />
        </div>

        <div className="p-3 space-y-3">
          {offers.map((o) => (
            <div key={o.title} className="rounded-lg p-3 flex items-center gap-3" style={{ background: BG_DARK }}>
              <div className="w-12 h-12 rounded-md flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${GOLD}, #b8860b)` }}>
                <Gift className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm truncate">{o.title}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-bold" style={{ background: GOLD, color: "#000" }}>{o.tag}</span>
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">{o.desc}</div>
              </div>
              <button className="text-[11px] font-bold px-3 py-1 rounded" style={{ background: GOLD, color: "#000" }}>Claim</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
