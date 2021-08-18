window.addEventListener("keydown", hit)
window.addEventListener("keyup", prayut)

function hit() {
  const img = document.querySelector(".img")
  img.src = "/img/after.png"
}

function prayut() {
  const img = document.querySelector(".img")
  img.src = "/img/before.png"
}
