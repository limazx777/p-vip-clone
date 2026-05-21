import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, User, Lock } from "lucide-react";

export const Route = createFileRoute("/login")({ component: LoginPage });

const GOLD = "#f5c518";
const BG = "#1e2a3a";
const BG_SIDE = "#4a6080";

function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center" style={{ background: BG_SIDE }}>
      <div className="w-full max-w-[430px] text-white" style={{ background: BG, fontFamily: "Inter, system-ui" }}>
        <div className="flex items-center px-3 py-3 border-b border-white/10">
          <Link to="/" className="text-white"><ArrowLeft className="w-5 h-5" /></Link>
          <div className="flex-1 text-center font-semibold">Login</div>
          <Link to="/register" className="text-xs" style={{ color: GOLD }}>Register</Link>
        </div>

        <div className="px-5 pt-8">
          <div className="text-center mb-6">
            <div className="text-2xl font-extrabold" style={{ color: GOLD }}>PGVIP.cc</div>
            <div className="text-xs text-white/60 mt-1">Welcome back</div>
          </div>

          <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2.5 mb-3">
            <User className="w-4 h-4 text-white/60" />
            <input className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40" placeholder="Username / Phone" />
          </label>
          <label className="flex items-center gap-2 bg-white/5 rounded-md px-3 py-2.5">
            <Lock className="w-4 h-4 text-white/60" />
            <input type="password" className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40" placeholder="Password" />
            <Eye className="w-4 h-4 text-white/60" />
          </label>

          <div className="flex justify-between text-[11px] text-white/60 mt-3">
            <label className="flex items-center gap-1"><input type="checkbox" className="accent-yellow-400" /> Remember me</label>
            <span>Forgot password?</span>
          </div>

          <button className="w-full mt-6 py-2.5 rounded-md text-sm font-bold" style={{ background: GOLD, color: "#000" }}>
            Login
          </button>
          <Link to="/register" className="block text-center text-xs text-white/60 mt-4">
            Don't have an account? <span style={{ color: GOLD }}>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
