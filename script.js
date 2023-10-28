// Efeito máquina de texto
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('h1');
typeWrite(titulo);

function addAppointment() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    const appointment = {
        id: Date.now(),
        name,
        date,
        time,
        notes
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments))

    displayAppointments();
}

function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || []
    const list = document.getElementById("appointment-list");
    list.innerHTML = '';

    appointments.forEach(appointment =>{
        list.innerHTML += `
        <li>
            ${appointment.name} - ${appointment.date} - ${appointment.time}
            <p>${appointment.notes}</p>
        </li>
        `;
    })
}

window.onload = displayAppointments;