"use client";

import { useEffect, useState } from "react";

const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set the hydrated state to true after the component mounts (client-side only)
    setIsHydrated(true);
  }, []);

  return isHydrated;
};

export default useIsHydrated;
