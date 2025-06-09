const classChanges = [
  // grid image sequence //
  { time: 188, target: "div.img2layout", add: "lizard" },
  { time: 188.7, target: "div.img2layout", add: "owl" },
  { time: 189.2, target: "div.img2layout", add: "snake" },
  { time: 190.9, target: "div.img2layout", add: "droplet" },
  { time: 191.5, target: "div.img2layout", remove: "snake"},
  { time: 192, target: "div.img2layout", add: "img2layout" },

  { time: 188, target: "div.img1layout", add: "mush" },
  { time: 189.3, target: "div.img1layout", add: "owl" },
  { time: 189.8, target: "div.img1layout", add: "droplet" },
  { time: 190.7, target: "div.img1layout", add: "eagle" },
  { time: 191.6, target: "div.img1layout", remove: "eagle"},
  { time: 192, target: "div.img1layout", add: "img1layout" },

  { time: 188, target: "div.img3layout", add: "mush" },
  { time: 189.1, target: "div.img3layout", add: "snake" },
  { time: 188.4, target: "div.img3layout", add: "eagle" },
  { time: 190.2, target: "div.img3layout", add: "monkey" },
  { time: 191.3, target: "div.img3layout", remove: "monkey"},
  { time: 192, target: "div.img3layout", add: "img3layout" },

  { time: 188, target: "div.img4layout", add: "lizard" },
  { time: 190.9, target: "div.img4layout", add: "mush" },
  { time: 189.1, target: "div.img4layout", add: "snake" },
  { time: 188.6, target: "div.img4layout", add: "droplet" },
  { time: 191.6, target: "div.img4layout", remove: "droplet"},
  { time: 192, target: "div.img4layout", add: "img4layout" },

  { time: 188, target: "div.img5layout", add: "eagle" },
  { time: 188.9, target: "div.img5layout", add: "lizard" },
  { time: 189.3, target: "div.img5layout", add: "owl" },
  { time: 190.5, target: "div.img5layout", add: "monkey" },
  { time: 191.4, target: "div.img5layout", remove: "owl"},
  { time: 192, target: "div.img5layout", add: "img5layout" },

  // timeline effect //

  { time: 80, target: "div.herotimeline", add: "update1" },
  { time: 157, target: "div.herotimeline", add: "update2" },
  { time: 219, target: "div.herotimeline", add: "update3" },
  { time: 272, target: "div.herotimeline", add: "update4" },
  { time: 377, target: "div.herotimeline", add: "update5" },
  { time: 434, target: "div.herotimeline", add: "update6" },

// obverse effect//
  { time: 122, target: ".body", add: "obverse" },
  { time: 122, target: ".scannedleaf", add: "obverseimg" },
  { time: 127, target: ".body", remove: "obverse" },
  { time: 127, target: ".scannedleaf", remove: "obverseimg" },

// glitch effect//
  { time: 233, target: ".body", add: "artificalglitchupdate" },
  { time: 233.5, target: ".body", remove: "artificalglitchupdate" },
  { time: 233.5, target: ".body", add: "artificalglitchupdate1" },
  { time: 234, target: ".body", remove: "artificalglitchupdate1" },
  { time: 234, target: ".body", add: "artificalglitchupdate" },
  { time: 234.5, target: ".body", remove: "artificalglitchupdate" },
  { time: 234.5, target: ".body", add: "artificalglitchupdate1" },
  { time: 235, target: ".body", remove: "artificalglitchupdate1" },

  // glow effect//
  { time: 293, target: ".body", add: "glowinggreen" },
  { time: 295, target: ".body", add: "glowinggreen" },
];
