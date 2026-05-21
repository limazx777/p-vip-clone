import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, User, Lock, Phone, Gift } from "lucide-react";

export const Route = createFileRoute("/register")({ component: RegisterPage });

const GOLD = "#f5c518";
const BG = "#1e2a3a";
const BG_SIDE = "#4a6080";

function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center" style={{ background: BG_SIDE }}>
      <div className="w-full max-w-[430px] text-white" style={{ background: BG, fontFamily: "Inter, system-ui" }}>
        <div className="flex items-center px-3 py-3 border-b border-white/10">
          <Link to="/" className="text-white"><ArrowLeft className="w-5 h-5" /></Link>
          <div className="flex-1 text-center font-semibold">Register</div>
          <Link to="/login" className="text-xs" style={{ color: GOLD }}>Login</Link>
        </div>

        <div className="px-5 pt-6 pb-10">
          <div
            className="rounded-lg p-3 mb-5 flex items-center gap-2 text-xs"
            style={{ background: "rgba(245,197,24,0.12)", border: `1px solid ${GOLD}` }}
          >
            <Gift className="w-4 h-4" style={{ color: GOLD }} />
            <span style={{ color: GOLD }}>Get R$ 50 free on signup!</span>
          </div>

          {[
            { icon: User, ph: "Username (4-16 chars)" },
            { icon: Lock, ph: "Password", type: "password" },
            { icon: Lock, ph: "Confirm password", type: "password" },
            { icon: Phone, ph: "Phone number" },
            { icon: Gift, ph: "Invitation code (optional)" },
          ].map(({ icon: Icon, ph, type }) => (
            <label key={ph} className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2.5 mb-3">
              <Icon className="w-4 h-4 text-white/60" />
              <input type={type} placeholder={ph} className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40" />
            </label>
          ))}

          <label className="flex items-start gap-2 text-[11px] text-white/60 mt-2">
            <input type="checkbox" className="accent-yellow-400 mt-0.5" />
            I am 18+ and I agree to the Terms & Privacy Policy.
          </label>

          <button className="w-full mt-5 py-2.5 rounded-md text-sm font-bold" style={{ background: GOLD, color: "#000" }}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
