import React, { useRef, useEffect, useState } from "react";

import moon from "../images/moon.svg";
import moon2 from "../images/moon2.svg";
export default function Navbar() {
  const [checked, setChecked] = useState(false);
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.add("is-dark-mode");
      document.body.classList.remove("is-light-mode");
      document.getElementById("switch-img").setAttribute("src", moon2);
    } else {
      document.body.classList.add("is-light-mode");
      document.body.classList.remove("is-dark-mode");
      document.getElementById("switch-img").setAttribute("src", moon);
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setChecked(true);
    }
  }, []);

  return (
    <header className="header">
      <a>Where in the world?</a>
      <input
        type="checkbox"
        id="checkSwitch"
        ref={ref}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkSwitch">
        <div className="switch">
          <img id="switch-img" src={moon} width="15" alt="icon-switch" />
          <p>Dark Mode</p>
        </div>
      </label>
    </header>
  );
}
