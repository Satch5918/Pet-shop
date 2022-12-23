import { stats, mayorCapacidad, getMaxPercentage, getMinPercentage } from '../../module/funciones.js'

let datos;
let past;
let uncoming;
let upcomingStats = document.getElementById('upcomingStats');
let pastStats = document.getElementById('pastStats');
let td1 = document.getElementById('td1');
let td2 = document.getElementById('td2');
let td3 = document.getElementById('td3');
const fragment = document.createDocumentFragment();
let assistance = "assistance"
let estimate = "estimate"


fetch('https://amazing-events.onrender.com/api/events')
    .then(result => result.json())
    .then(capturarDatos =>{
    datos = capturarDatos.events;
    past = datos.filter( card => card.date < capturarDatos.currentDate)
    uncoming = datos.filter( card => card.date >= capturarDatos.currentDate)
    stats(upcomingStats,uncoming,estimate,fragment)
    stats(pastStats,past,assistance,fragment)
    getMaxPercentage(past,td1);
    getMinPercentage(past,td2); 
    mayorCapacidad(datos,td3) 
} ).catch( error => {
    console.log("error:",error);
});

