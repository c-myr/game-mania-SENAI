function mostrarMenu($event) {
    let menu = document.getElementById("nav")

    //if(menu.style.display == "none")
    if (getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    }
    else {
        menu.style.display = "none"
    }

    event.preventDefault();
}


function buscarItens() {
    let busca = document.getElementById("buscar").value
    alert(busca)
}

function inscrever() {
    let inscrever = document.getElementById("cadastro").value
    alert(inscrever)
}
