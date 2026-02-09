let links = document.querySelectorAll(".alert-link");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    alert("CAUTION: Website... under construction... :,(");
  });
});

//rainbox clickbox
let clickbox = document.querySelector("#clickbox");
console.log(clickbox);

//nts: make sure to check for clickbox... or else it won't find it on the right page (null) and won't do anything
if (clickbox) {
  const col = [
    "#fc0303",
    "#fc6203",
    "#fceb03",
    "#03c400",
    "#03c400",
    "#8018d6",
  ];
  let i = 0;

  clickbox.addEventListener("click", () => {
    clickbox.style.backgroundColor = col[i % col.length];
    i++;
  });
}
