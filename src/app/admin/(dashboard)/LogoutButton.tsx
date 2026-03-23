"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function LogoutButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      window.location.href = "/admin";
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={cn(
        "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-700 border border-transparent hover:border-red-200 transition-all disabled:opacity-50",
        className
      )}
    >
      <LogOut className="w-4 h-4 text-gray-400" />
      {loading ? "Signing out…" : "Sign Out"}
    </button>
  );
}

export function LogoutButtonCompact({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      window.location.href = "/admin";
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={cn(
        "text-xs text-gray-500 hover:text-red-600 transition px-3 py-1.5 rounded-md hover:bg-red-50 border border-transparent hover:border-red-200 disabled:opacity-50",
        className
      )}
    >
      {loading ? "…" : "Sign out"}
    </button>
  );
}
