//PROYECTO CRUD

let listaTareas = [];

function Submit (){
    
    listaTareas = JSON.parse(localStorage.getItem('listTareas'));
    if(listaTareas === null){
        listaTareas = [];
    }
    validateForm();
   
}

//Validar
function validateForm(){

    let tarea = document.getElementById('tarea-area').value;
    let desc = document.getElementById('desc-area').value;
    let fecha = Date.parse(document.getElementById('fecha-area').value);

    if(tarea.length == 0){
        alert('Escribe un nombre para la tarea');
        return false;
    }else if(desc.length == 0)
    {
        alert('Escribe una descripcion para la tarea');
        return false;
    
    }else if(isNaN(fecha))
    {
        alert('Elige la fecha para la tarea');
        return false;
    }
    createData();


}

//Create
function createData(){
    const nuevaTarea = {
        tarea : document.getElementById('tarea-area').value,
        descripcion : document.getElementById('desc-area').value,
        fecha: document.getElementById('fecha-area').value
    }

        document.getElementById('tarea-area').value = '';
        document.getElementById('desc-area').value = '';
        document.getElementById('fecha-area').value = '';
        
        listaTareas.push(nuevaTarea);
        localStorage.setItem('listTareas', JSON.stringify(listaTareas));
        showData();
}

//Read
function showData(){
    listaTareas = JSON.parse(localStorage.getItem('listTareas'));
     document.getElementById('tableBody').innerHTML = "";
      if(listaTareas !== null){
        listaTareas.forEach((element,index)=>{
            let row = document.createElement('tr');
            row.innerHTML = `
            <td scope="row">${index+1}</td>
            <td>${element.tarea}</td>
            <td>${element.descripcion}</td>
            <td>${element.fecha}</td>
            <td> 
                <button type="button" class="btn-action" onClick="editItem(${index})">Editar</button>
                <button type="button" class="btn-action" onClick="deleteItem(${index})">Borrar</button>
            </td>
            `;
            document.getElementById('tableBody').appendChild(row);
        });
     }
}
//Edit
function editItem(index){
        document.getElementById('numTarea').value = index;
        document.getElementById('tarea-area').value = listaTareas[index].tarea;
        document.getElementById('desc-area').value = listaTareas[index].descripcion;
        document.getElementById('fecha-area').value = listaTareas[index].fecha;
}

//Update
function updateData(){
    let posicion = document.getElementById('numTarea').value;
    let tareaActual = document.getElementById('tarea-area').value;
    let descActual = document.getElementById('desc-area').value;
    let fechaActual = document.getElementById('fecha-area').value;

    
    if(posicion == '' || isNaN(posicion)){
        alert('Seleccione un registro');
        return false;
    }
    
    
    listaTareas[posicion]={
        tarea : tareaActual,
        descripcion: descActual,
        fecha : fechaActual
    }
    localStorage.setItem('listTareas', JSON.stringify(listaTareas));

    document.getElementById('numTarea').value = '';
    document.getElementById('tarea-area').value = '';
    document.getElementById('desc-area').value = '';
    document.getElementById('fecha-area').value = ''
    showData();

}

//Delete
function deleteItem(indexActual){
    listaTareas = listaTareas.filter((alumno, index)=> index !== indexActual);
    localStorage.setItem('listTareas', JSON.stringify(listaTareas));
    showData();
}

showData();