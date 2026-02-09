let svg = document.querySelector("svg");
// console.log(svg);
const svgNS = "http://www.w3.org/2000/svg";

//Visualization Example:
const lec1_vis = document.createElementNS(svgNS, "image");

lec1_vis.setAttribute("href", "./images/lec1-vis-sample.png");

lec1_vis.setAttribute("x", 0);
lec1_vis.setAttribute("y", 0);
lec1_vis.setAttribute("width", 1640);
lec1_vis.setAttribute("height", 2360);

svg.appendChild(lec1_vis);

//Creative Art Example: Rainbow Record
let artSVG = document.querySelector("#svg-art");

const col = ["#fc0303", "#fc6203", "#fceb03", "#03c400", "#003ec4", "#8018d6"];

// Rainbow Disc
for (let i = 0; i < 6; i++) {
  const radius = 450 - 50 * i;
  const ring = document.createElementNS(svgNS, "circle");
  ring.setAttribute("cx", 455);
  ring.setAttribute("cy", 455);
  ring.setAttribute("r", radius);
  ring.setAttribute("fill", "none");
  ring.setAttribute("stroke", "#434243");
  ring.setAttribute("stroke-width", 4);
  ring.setAttribute("fill", col[i]);
  artSVG.appendChild(ring);
}

// Inside
const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", 455);
circle.setAttribute("cy", 455);
circle.setAttribute("r", 135);
circle.setAttribute("fill", "#282729");

artSVG.appendChild(circle);

const hole = document.createElementNS(svgNS, "circle");
hole.setAttribute("cx", 455);
hole.setAttribute("cy", 455);
hole.setAttribute("r", 25);
hole.setAttribute("fill", "#ffe6ef");
artSVG.appendChild(hole);

// Rings
for (let i = 0; i < 64; i++) {
  const small_rad = 450 - 5 * i;
  const small_ring = document.createElementNS(svgNS, "circle");
  small_ring.setAttribute("cx", 455);
  small_ring.setAttribute("cy", 455);
  small_ring.setAttribute("r", small_rad);
  small_ring.setAttribute("fill", "none");
  small_ring.setAttribute("stroke", "#9d9d9d");
  small_ring.setAttribute("stroke-width", 1.5);
  artSVG.appendChild(small_ring);
}
