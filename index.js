//PROYECTO CRUD

//Funcion que ejecuta el boton Agregar
function Submit (){
    let dataInput = obtainData();
    let dataRead = readDataLocalStorage(dataInput);
    insertData(dataRead);
}

//Create
//Obtenemos la información desde el Formulario
function obtainData(){
    let inputTarea = document.getElementById("tarea-area").value;
    let inputDesc = document.getElementById("desc-area").value;
    let inputFecha = document.getElementById("fecha-area").value;

    let arrayData = [inputTarea, inputDesc, inputFecha];
    return arrayData;

}
//Read
//Información en el LocalStorage
function readDataLocalStorage(dataInput){
    //Guardando la información en el local storage

    let tarea = localStorage.setItem("Tarea", dataInput[0]);
    let description = localStorage.setItem("Descripcion", dataInput[1]);
    let fecha = localStorage.setItem("Fecha", dataInput[2]);

    //Obteniendo los valores desde el localStorage
    let getTarea = localStorage.getItem("Tarea", tarea)
    let getDesc = localStorage.getItem("Descripcion", description);
    let getFecha = localStorage.getItem("Fecha", fecha);

    let getArrayData = [getTarea, getDesc, getFecha];
    return getArrayData;
}

//Insert
function insertData(dataRead){
    let table = document.getElementById("table")
    let row = table.insertRow();
    row.insertCell(0).innerHTML = dataRead[0];
    row.insertCell(1).innerHTML = dataRead[1];
    row.insertCell(2).innerHTML = dataRead[2];

}