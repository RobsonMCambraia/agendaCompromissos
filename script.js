// Função para criar um efeito de digitação de texto
function typeWrite(elemento) {
    // Divide o texto em um array de letras
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    
    // Itera pelas letras do array e exibe uma a uma com atraso
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

// Seleciona o elemento 'h1' e aplica o efeito de digitação
const titulo = document.querySelector('h1');
typeWrite(titulo);

// Função para adicionar um compromisso
function addAppointment() {
    // Obtém os valores dos campos de entrada
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    // Cria um objeto de compromisso com os valores obtidos
    const appointment = {
        id: Date.now(),
        name,
        date,
        time,
        notes
    };

    // Obtém a lista de compromissos do armazenamento local ou cria um array vazio
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    
    // Adiciona o novo compromisso ao array
    appointments.push(appointment);
    
    // Armazena o array atualizado de compromissos no armazenamento local
    localStorage.setItem("appointments", JSON.stringify(appointments))

    // Exibe os compromissos na lista
    displayAppointments();
}

// Função para exibir os compromissos na lista
function displayAppointments() {
    // Obtém a lista de compromissos do armazenamento local ou cria um array vazio
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const list = document.getElementById("appointment-list");
    
    // Limpa o conteúdo da lista
    list.innerHTML = '';

    // Itera pelos compromissos e adiciona cada um à lista
    appointments.forEach(appointment => {
        list.innerHTML += `
        <li>
            ${appointment.name} - ${appointment.date} - ${appointment.time}
            <p>${appointment.notes}</p>
        </li>
        `;
    });
}

// Exibe os compromissos ao carregar a página
window.onload = displayAppointments;
