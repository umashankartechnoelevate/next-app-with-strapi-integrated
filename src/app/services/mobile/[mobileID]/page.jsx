import React, { Suspense } from "react";
import Oppo from "../_components/oppo/Oppo";
import MobileLoading from "../loading";
import Iphone from "../_components/iphone/Iphone";

const page = async ({ params }) => {
  const { mobileID } = await params;
  console.log("mobileID", mobileID);

  // if (!/^\d+$/.test(mobileID)) {
  //   // Throw 404 if it's not a valid numeric ID
  //   return notFound(); // Next.js built-in
  // }

  // await new Promise(
  //   (resolve) =>
  //     setTimeout(() => resolve(import("../_components/iphone/Iphone")), 3000) // ⏳ 3 seconds delay
  // );

  return (
    <div>
      mobile main page
      {/* Using Suspense to lazy load the Iphone component */}
      <Suspense fallback={<MobileLoading />}>
        <Iphone />
      </Suspense>
      <Oppo />
    </div>
  );
};

export default page;
