import Skeleton from "@/app/components/skeletonLoader/Skeleton";
import React from "react";

export default function MobileLoading() {
  return (
    <>
      <Skeleton type="box" width="70%" height="100px" />
      <br />
      <Skeleton type="line" width="90%" height="1rem" />
      <br />
    </>
  );
}
