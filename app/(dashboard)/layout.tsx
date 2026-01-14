// app/(dashboard)/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/nav/app-sidebar";
import { RealtimeListener } from "@/components/realtime-listener";

const defaultUser = {
  name: "Roman Sultani",
  email: "inatlusnamor@gmail.com",
  avatar: "",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar user={defaultUser} />
      <main className="w-full min-h-screen bg-gray-50 flex flex-col">
        <header className="p-4 flex items-center gap-2 border-b bg-white sticky top-0 z-10">
          <SidebarTrigger /> 
          <div className="h-4 w-[1px] bg-gray-200 mx-2" />
          <span className="font-bold text-lg">Smart Plant App</span>
        </header>
        <div className="flex-1 p-6">
          <RealtimeListener />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}