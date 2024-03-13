// import {  } from "core.js";

const empezar = document.querySelector("#btnEmpezar")

//Al dar click en el botón "Empezar", el programa va a dirigir al usuario a una serie de opciones
empezar.addEventListener("click", () => {
    const pantallaInicial = document.querySelector(".pantallaInicial")
    // console.log("leyendo leyendo");
    pantallaInicial.style.display = 'none'
})

// Precios calidad Óptima
const pantallaNivelCalidad = document.querySelector("#nivelCalidad")
const calidadOptima = document.querySelector("#calidadOptima")
const calidadPrecio = document.querySelector("#calidadPrecio")
const noImportaCalidad = document.querySelector("#noImportaCalidad")

let precioCalidadOptima = 0

calidadOptima.addEventListener("click", () => {
    precioCalidadOptima = 300000
    console.log(precioCalidadOptima);
    pantallaNivelCalidad.style.display = 'none'
})

calidadPrecio.addEventListener("click", () => {
    precioCalidadOptima = 380000
    console.log(precioCalidadOptima);
    pantallaNivelCalidad.style.display = 'none'
})

noImportaCalidad.addEventListener("click", () => {
    precioCalidadOptima = 200000
    console.log(precioCalidadOptima);
    pantallaNivelCalidad.style.display = 'none'
})


// Precios Tipo de App
const pantallaAppNecesita = document.querySelector("#appNecesita")
const Android = document.querySelector("#Android")
const IOS = document.querySelector("#IOS")
const windowsPhone = document.querySelector("#windowsPhone")
const androidIos = document.querySelector("#androidIos")

let precioTipoDeApp = 0

Android.addEventListener("click", () => {
    precioTipoDeApp = 2000000
    console.log(precioTipoDeApp);
    pantallaAppNecesita.style.display = 'none'
})

IOS.addEventListener("click", () => {
    precioTipoDeApp = 3000000
    console.log(precioTipoDeApp);
    pantallaAppNecesita.style.display = 'none'
})

windowsPhone.addEventListener("click", () => {
    precioTipoDeApp = 800000
    console.log(precioTipoDeApp);
    pantallaAppNecesita.style.display = 'none'
})

androidIos.addEventListener("click", () => {
    precioTipoDeApp = 3500000
    console.log(precioTipoDeApp);
    pantallaAppNecesita.style.display = 'none'
})

// Precios Diseño de App
const pantallaDiseñoApp = document.querySelector("#pantallaDiseñoApp")
const sencilla = document.querySelector("#sencilla")
const personalizada = document.querySelector("#personalizada")
const web = document.querySelector("#web")
const sinDiseño = document.querySelector("#sinDiseño")

let precioDiseño = 0

sencilla.addEventListener("click", () => {
    precioDiseño = 500000
    console.log(precioDiseño);
    pantallaDiseñoApp.style.display = 'none'
})

personalizada.addEventListener("click", () => {
    precioDiseño = 1000000
    console.log(precioDiseño);
    pantallaDiseñoApp.style.display = 'none'
})

web.addEventListener("click", () => {
    precioDiseño = 800000
    console.log(precioDiseño);
    pantallaDiseñoApp.style.display = 'none'
})

sinDiseño.addEventListener("click", () => {
    precioDiseño = 300000
    console.log(precioDiseño);
    pantallaDiseñoApp.style.display = 'none'
})

// Precios Diseño de App
const pantallamonetizarApp = document.querySelector("#monetizarApp")
const gratuita = document.querySelector("#gratuita")
const appPago = document.querySelector("#appPago")
const comprasDentroApp = document.querySelector("#comprasDentroApp")
const noSabe = document.querySelector("#noSabe")

let precioMonetizar = 0

gratuita.addEventListener("click", () => {
    precioMonetizar = 600000
    console.log(precioMonetizar);
    pantallamonetizarApp.style.display = 'none'
})

appPago.addEventListener("click", () => {
    precioMonetizar = 1000000
    console.log(precioMonetizar);
    pantallamonetizarApp.style.display = 'none'
})

comprasDentroApp.addEventListener("click", () => {
    precioMonetizar = 2000000
    console.log(precioMonetizar);
    pantallamonetizarApp.style.display = 'none'
})

noSabe.addEventListener("click", () => {
    precioMonetizar = 3500000
    console.log(precioMonetizar);
    pantallamonetizarApp.style.display = 'none'
})

