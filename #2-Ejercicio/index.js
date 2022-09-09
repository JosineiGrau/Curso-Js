let name = "Josinei Grau Salazar"
let edad = 19
let eresDesarrollador = true
let fechaDeNacimiento = new Date("2003 07 15")
let diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
let mesAnyo = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
fechaDeNacimiento = `${diaSemana[fechaDeNacimiento.getDay()]}, ${fechaDeNacimiento.getDate()} de ${mesAnyo[fechaDeNacimiento.getMonth()]} de ${fechaDeNacimiento.getFullYear()}`

let libroFavorito = {
    titulo: "Invierte en ti",
    autor: "Natalia de Santiago",
    fecha: 2021,
    ulr: "https://www.marcialpons.es/media/pdf/invierteenti.pdf"
}