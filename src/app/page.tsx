"use client";
import {useRef} from "react";
import {useAvatarAnimation} from "./hooks/useAvatarAnimation";
import Header from "./components/Home/Header/Header";
import AboutSection from "./components/Home/AboutSection/AboutSection";

export default function Home() {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  useAvatarAnimation(avatarRef);

  return (
    <main>
      <Header />

      <AboutSection avatarRef={avatarRef} />
    </main>
  );
}
