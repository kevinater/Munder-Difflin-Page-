
//
function startTakeoff() {
  let cross = document.querySelector("#img1");
  let buzz = document.querySelector("#img2");
  let seaglide = document.querySelector("#img3");
  let tail = document.querySelector("#img4");

 cross.className = "animated crossanimate";
 buzz.className = "animated buzzanimate";
 seaglide.className = "animated seaglideranimate"
 tail.className = "animated tailplaneanimate"

}

let button = document.querySelector("button");

button.addEventListener("click", startTakeoff);
