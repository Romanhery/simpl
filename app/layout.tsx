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

// Define a default user to prevent TypeScript "undefined" errors
const defaultUser = {
  name: "Roman Sultani",
  email: "inatlusnamor@gmail.com",
  avatar: "", // Add a URL here later if you have one
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* 2. WRAP EVERYTHING IN SIDEBAR PROVIDER */}
        <SidebarProvider defaultOpen={true}>
          
          {/* 3. ADD THE SIDEBAR ITSELF - Pass the user prop here */}
          <AppSidebar user={defaultUser} />
          
          {/* 4. MAIN CONTENT AREA */}
          <main className="w-full min-h-screen bg-gray-50 flex flex-col">
            
            {/* The Header with the Toggle Button */}
            <header className="p-4 flex items-center gap-2 border-b bg-white sticky top-0 z-10">
              <SidebarTrigger /> 
              <div className="h-4 w-[1px] bg-gray-200 mx-2" />
              <span className="font-bold text-lg">Smart Plant App</span>
            </header>

            {/* Your Actual Page Content */}
            <div className="flex-1 p-6">
              <RealtimeListener />
              {children}
            </div>
          </main>

          {/* ChatBot stays floating above everything */}
          <ChatBot />
          
        </SidebarProvider>
      </body>
    </html>
  );
}