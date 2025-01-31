"use client";

import { useEffect } from "react";

export default function GlobalStyles() {
  useEffect(() => {
    import("../globals.css");
  }, []);

  return null;
}
