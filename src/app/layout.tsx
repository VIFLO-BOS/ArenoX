import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Toaster } from "react-hot-toast";

/* @ metadata : define page metadata for SEO and browser display */

export const metadata: Metadata = {
  title: "ArenoX Learning Plartform",
  description: "This is an online African Learning Plartform",
};

/* @ root-layout : main application layout wrapper with toast notifications */

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
   /* @ render : HTML structure with children and toast provider */
  
  return (
    <html lang="en">
      <body>
        {children}
        {/* @ toast-config : configure react-hot-toast notification settings */}
        <Toaster
          position="top-right"
          reverseOrder={true}
          gutter={5}
          toastOptions={{
            duration: 2000,
            removeDelay: 1000,
            style: {
              background: "#fff",
              paddingLeft: "2px",
              paddingRight: "2px",
              borderRadius: "5px",
              fontSize: "12px",
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

