import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RealtimeListener } from "@/components/realtime-listener";
import { ChatBot } from "@/components/chat-bot"; 

// 1. IMPORT SIDEBAR COMPONENTS
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/nav/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simpl",
  description: "Simpl IoT Dashboard",
  manifest: "/manifest.json",
};

// 1. Define the user data at the top of your Layout function
const currentUser = {
  name: "Roman Sultani",
  email: "inatlusnamor@gmail.com",
  avatar: "" // You can add a URL here later
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={true}>
          
          {/* 2. PASS THE USER TO THE SIDEBAR */}
          <AppSidebar user={currentUser} />
          
          
            {/* ... rest of your code ... */}
            <main className="w-full min-h-screen bg-gray-50"></main>

          {/* ChatBot stays floating above everything */}
          <ChatBot />
          
        </SidebarProvider>
      </body>
    </html>
  );
}