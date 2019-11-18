
function selection(ele){
    var e = document.getElementById("selection")
    var selezionato = e.options[e.selectedIndex].value;

    pc1 = document.getElementById("pc1")
    pc2 = document.getElementById("pc2")
    pc3 = document.getElementById("pc3")

    if (selezionato == "PC Gaming 1"){
        pc1.classList.remove("hidden")
        pc2.classList.add("hidden")
        pc3.classList.add("hidden")
    }else if (selezionato == "PC Gaming 2"){
        pc1.classList.add("hidden")
        pc2.classList.remove("hidden")
        pc3.classList.add("hidden")
    }if (selezionato == "PC da ufficio"){
        pc1.classList.add("hidden")
        pc2.classList.add("hidden")
        pc3.classList.remove("hidden")
    }
    console.log(selezionato)
}   