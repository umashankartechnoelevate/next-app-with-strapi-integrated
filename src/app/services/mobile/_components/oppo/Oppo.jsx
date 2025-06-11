"use client";
import useIsHydrated from "@/context/useIsHydrated";
import React from "react";

const Oppo = () => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return <div></div>;
  }
  return <div>Oppo page</div>;
};

export default Oppo;
