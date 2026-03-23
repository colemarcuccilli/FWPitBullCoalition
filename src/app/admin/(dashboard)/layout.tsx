import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { AdminSidebar } from "./AdminSidebar";
import { LogoutButtonCompact } from "./LogoutButton";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
          <h1 className="font-semibold text-gray-800 text-sm">FWPBC Admin Panel</h1>
          <LogoutButtonCompact />
        </header>
        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
