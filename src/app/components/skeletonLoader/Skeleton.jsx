"use client";

import React from "react";

export default function Skeleton({
  type = "line",
  width = "100%",
  height = "1rem",
  className = "",
}) {
  let borderRadiusClass = "rounded-sm"; // default for line

  if (type === "box") borderRadiusClass = "rounded-md";
  if (type === "circle") borderRadiusClass = "rounded-full";

  return (
    <div
      className={`bg-gray-300 animate-pulse ${borderRadiusClass} ${className}`}
      style={{ width, height }}
    />
  );
}
