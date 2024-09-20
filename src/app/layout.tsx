import type {Metadata} from "next";
import "./globals.css";
import ThemeRegistry from "@/app/_components/themeRegistry";
import React from "react";
import Navbar from "@/app/_components/navbar";

export const metadata: Metadata = {
    title: "Movie Recommendation",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ThemeRegistry>
            <body>
            <div className="pb-10">
                <Navbar/>
                {children}
            </div>
            </body>
        </ThemeRegistry>
        </html>
    );
}
