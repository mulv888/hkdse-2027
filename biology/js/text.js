/* ==========================================================================
   Lightweight Offline Rich-Text & Chemical/Biological Formula Formatter
   Supports **bold**, *italic*, `code`, chemical formulas (H_2O, CO_2, Ca^{2+}),
   line breaks, and arrows without any external CDN.
   ========================================================================== */
(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function rich(str) {
    if (str == null) return "";
    let s = escapeHtml(str);

    // Code spans
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Bold + Italic ***...***
    s = s.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");

    // Bold **...** (supports nested single *italic* inside)
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // Italic *...* (supports species names inside parentheses or tags)
    s = s.replace(/\*([^*\n<>]+?)\*/g, "<em>$1</em>");

    // Superscripts ^{...} and subscripts _{...}
    s = s.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
    s = s.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");

    // Simple common chemical subscripts when written like H2O, CO2, O2, N2, NH3, NO3-, PO4^3-
    s = s.replace(/\b(H2O|CO2|O2|N2|H2|NH3|NH4\+|NO2-|NO3-|PO43-|SO2|NOx|C6H12O6|HCO3-|H2CO3|CaCO3|HCl|NaOH|NaCl|CaCl2|CH4|C2H5OH|FADH2|NADH2)\b/g, function (m) {
      const map = {
        "H2O": "H<sub>2</sub>O",
        "CO2": "CO<sub>2</sub>",
        "O2": "O<sub>2</sub>",
        "N2": "N<sub>2</sub>",
        "H2": "H<sub>2</sub>",
        "NH3": "NH<sub>3</sub>",
        "NH4+": "NH<sub>4</sub><sup>+</sup>",
        "NO2-": "NO<sub>2</sub><sup>−</sup>",
        "NO3-": "NO<sub>3</sub><sup>−</sup>",
        "PO43-": "PO<sub>4</sub><sup>3−</sup>",
        "SO2": "SO<sub>2</sub>",
        "NOx": "NO<sub>x</sub>",
        "C6H12O6": "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
        "HCO3-": "HCO<sub>3</sub><sup>−</sup>",
        "H2CO3": "H<sub>2</sub>CO<sub>3</sub>",
        "CaCO3": "CaCO<sub>3</sub>",
        "HCl": "HCl",
        "NaOH": "NaOH",
        "NaCl": "NaCl",
        "CaCl2": "CaCl<sub>2</sub>",
        "CH4": "CH<sub>4</sub>",
        "C2H5OH": "C<sub>2</sub>H<sub>5</sub>OH",
        "FADH2": "FADH<sub>2</sub>",
        "NADH2": "NADH<sub>2</sub>"
      };
      return map[m] || m;
    });

    // Common ions written cleanly
    s = s.replace(/\b(Ca2\+|Mg2\+|Fe2\+|Na\+|K\+|H\+|Cl-|OH-)\b/g, function (m) {
      const map = {
        "Ca2+": "Ca<sup>2+</sup>",
        "Mg2+": "Mg<sup>2+</sup>",
        "Fe2+": "Fe<sup>2+</sup>",
        "Na+": "Na<sup>+</sup>",
        "K+": "K<sup>+</sup>",
        "H+": "H<sup>+</sup>",
        "Cl-": "Cl<sup>−</sup>",
        "OH-": "OH<sup>−</sup>"
      };
      return map[m] || m;
    });

    // Newlines to <br>
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  window.BIO_TEXT = { rich, escapeHtml };
})();
