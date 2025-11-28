import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./StaggeredMenu.css";

const defaultItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Future Projects", to: "/future-projects" },
];

function StaggeredMenu({ items = defaultItems, className = "", style }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`staggered-menu ${open ? "open" : ""} ${className}`.trim()} style={style}>
      <button
        type="button"
        className="staggered-menu__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className="staggered-menu__list">
        {items.map((item, index) => {
          const active = location.pathname === item.to;
          return (
            <li
              key={item.to}
              className="staggered-menu__item"
              style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}
            >
              <Link
                to={item.to}
                className={`staggered-menu__link ${active ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default StaggeredMenu;
