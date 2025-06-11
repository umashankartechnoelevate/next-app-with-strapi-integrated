// pages/index.js
"use client";

import Navbar from "../components/navbar/Navbar";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    submenu: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "Design", href: "/services/design" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Contact",
    submenu: [
      { label: "Email", href: "/contact/email" },
      { label: "Phone", href: "/contact/phone" },
    ],
  },
];

export default function DashBoard() {
  const redirectToMobile = () => {
    window.location.href = `/services/mobile/${"iphone"}`;
    // You can also use router.push if using <next />
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // router.push(`/services/mobile/${"iphone"}`);
  };
  return (
    <>
      <Navbar menuItems={menuItems} />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to Home Page</h1>
        <p>Scroll down and see navbar sticky on top.</p>
        <div style={{ height: "1500px", background: "#eee" }} />

        <button onClick={redirectToMobile}>go to mobile page</button>
      </main>
    </>
  );
}
