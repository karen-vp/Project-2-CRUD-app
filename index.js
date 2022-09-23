//PROYECTO CRUD

let listaTareas = [];

function Submit (){
    
    listaTareas = JSON.parse(localStorage.getItem('listTareas'));
    if(listaTareas === null){
        listaTareas = [];
    }
    createData();

}

//Create
//Obtenemos la información desde el Formulario
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
        showData(listaTareas);


}

//Read
function showData(){
     listaTareas = JSON.parse(localStorage.getItem('listTareas'));
     document.getElementById('tableBody').innerHTML = "";
     if(listaTareas !== null){
        listaTareas.forEach((element,index)=>{
            let row = document.createElement('tr');
            row.innerHTML = `
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
function editItem(tableData){




}

//Update

function updateData(){

}

//Delete

function deleteItem(){

}

showData(listaTareas);