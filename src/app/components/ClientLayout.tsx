"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      {children}
    </>
  );
}
