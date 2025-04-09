// src/app/layout.tsx
import "./globals.css";
import { Toaster } from "react-hot-toast";  
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Design Masterclass",
  description: "Learn top UX skills from industry experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}

