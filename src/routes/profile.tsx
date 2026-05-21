import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Wallet, Gift, Trophy, MessageCircle, Settings, LogOut, Crown } from "lucide-react";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

const GOLD = "#f5c518";
const BG = "#1e2a3a";
const BG_DARK = "#172230";
const BG_SIDE = "#4a6080";

function Row({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
      <Icon className="w-4 h-4" style={{ color: GOLD }} />
      <span className="flex-1 text-sm">{label}</span>
      <ChevronRight className="w-4 h-4 text-white/40" />
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="min-h-screen flex justify-center" style={{ background: BG_SIDE }}>
      <div className="w-full max-w-[430px] text-white pb-20" style={{ background: BG, fontFamily: "Inter, system-ui" }}>
        <div className="flex items-center px-3 py-3">
          <Link to="/" className="text-white"><ArrowLeft className="w-5 h-5" /></Link>
          <div className="flex-1 text-center font-semibold">Profile</div>
          <div className="w-5" />
        </div>

        <div className="px-4 pb-5 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black" style={{ background: GOLD, color: "#000" }}>
              G
            </div>
            <div className="flex-1">
              <div className="text-sm text-white/60">Not logged in</div>
              <div className="flex gap-2 mt-1">
                <Link to="/login" className="px-3 py-1 rounded text-xs font-bold" style={{ background: GOLD, color: "#000" }}>Login</Link>
                <Link to="/register" className="px-3 py-1 rounded text-xs font-bold border" style={{ borderColor: GOLD, color: GOLD }}>Register</Link>
              </div>
            </div>
            <Crown className="w-5 h-5" style={{ color: GOLD }} />
          </div>
        </div>

        <div className="mx-3 rounded-lg p-3 grid grid-cols-3 gap-2 text-center" style={{ background: BG_DARK }}>
          {[
            { label: "Balance", value: "R$ 0.00" },
            { label: "Bonus", value: "R$ 0.00" },
            { label: "Cashback", value: "R$ 0.00" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-sm font-bold" style={{ color: GOLD }}>{s.value}</div>
              <div className="text-[10px] text-white/60 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 mx-3 rounded-lg overflow-hidden" style={{ background: BG_DARK }}>
          <Row icon={Wallet} label="Deposit / Withdraw" />
          <Row icon={Gift} label="Promotions" />
          <Row icon={Trophy} label="VIP Program" />
          <Row icon={MessageCircle} label="Customer Support" />
          <Row icon={Settings} label="Settings" />
          <Row icon={LogOut} label="Logout" />
        </div>
      </div>
    </div>
  );
}
