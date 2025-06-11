"use client";
import React from "react";

export default function Navbar({ menuItems }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.label} className={item.submenu ? "has-submenu" : ""}>
            <a href={item.href || "#"}>{item.label}</a>

            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((sub) => (
                  <li key={sub.label}>
                    <a href={sub.href || "#"}>{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .navbar {
          background: #333;
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 20px;
        }
        .nav-list > li {
          position: relative;
        }
        a {
          color: white;
          text-decoration: none;
          padding: 8px 12px;
          display: block;
          user-select: none;
        }
        .has-submenu:hover > .submenu {
          display: block;
        }
        .submenu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #444;
          list-style: none;
          margin: 0;
          padding: 0;
          min-width: 160px;
          border-radius: 0 0 4px 4px;
        }
        .submenu li a {
          padding: 8px 12px;
        }
        .submenu li a:hover {
          background: #555;
        }
      `}</style>
    </nav>
  );
}
