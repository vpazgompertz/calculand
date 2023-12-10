const precio = 400000
let cantidad = 0

const precioSpan = document.querySelector(".precio-inicial")
const precioTotal = document.querySelector(".valor-total")
const cantidadSpan = document.querySelector(".cantidad")
const sumarBtn = document.querySelector("#btn-sumar")
const restarBtn = document.querySelector("#btn-restar")

precioSpan.innerHTML = precio
precioTotal.innerHTML = precio

sumarBtn.onclick = function () {
  console.log("Botón Sumar")
    cantidad++
    cantidadSpan.innerHTML = cantidad
    precioTotal.innerHTML = precio * cantidad
  }
  
restarBtn.onclick = function () {
  console.log("Botón restar")
  if (cantidad > 0) {
    cantidad--
    cantidadSpan.innerHTML = cantidad
    precioTotal.innerHTML = precio * cantidad
    }
  }





