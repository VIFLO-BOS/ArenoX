import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "ArenoX Learning Plartform",
  description: "This is an online African Learning Plartform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-right"
          reverseOrder={true}
          gutter={5}
          toastOptions={{
            duration: 2000,
            removeDelay: 1000,
            style: {
              background:"#fff",
              paddingLeft: "2px",
              paddingRight: "2px",
              borderRadius: "5px",
              fontSize: "12px"
            },

            success: {
              style: {
                color: "#28a745",
              },
            },

            error: {
              style: {
                color: "#dc3545",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
