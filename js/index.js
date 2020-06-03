"use strict";

// ---------- Responsive Nav ---------------

function responsiveNav() {
  let nav;

  if (!nav.className.includes("responsive")) {
    nav.className += " responsive";
  } else {
    nav.className = nav.className.replace(" responsive", " ");
  }
}
