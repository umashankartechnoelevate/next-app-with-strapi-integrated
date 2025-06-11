"use client";

import useIsHydrated from "@/context/useIsHydrated";
import React, { useState } from "react";

const Iphone = () => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return <div></div>;
  }

  return <div>rendered Iphone page</div>;
};

export default Iphone;
