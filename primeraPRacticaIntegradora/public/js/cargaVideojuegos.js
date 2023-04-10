const formCargarVideojuego = document.querySelector("#formCargarVideojuego")

if (formCargarVideojuego instanceof HTMLFormElement) {
  formCargarVideojuego.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(formCargarVideojuego)
    const data = {}
    formData.forEach((value, key) => (data[key] = value))
    fetch("/api/videojuegos", {
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  })
}