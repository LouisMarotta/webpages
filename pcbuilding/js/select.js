var formatocpu = null
var formatomobo = null
var costo = 0

//selezione CPU
function selezionac(ele){

    //Deseleziona tutto
    cpu = document.getElementsByClassName("cpu")

    for(i=0; i<cpu.length; i++){
        console.log(cpu[i])

        if(cpu[i].classList.contains("selezionato")){

            cpu[i].classList.toggle("selezionato")
            costo = costo - Number(cpu[i].getAttribute("costo"))
        }

    }

    //Attiva selezionato
    ele.classList.toggle('selezionato');

    //Informazioni CPU
    formatocpu=ele.getAttribute("formatoc")
    nomecpu=ele.getAttribute("nomec")
    costoc = Number(ele.getAttribute("costo"))

    document.getElementById("textcpu").innerHTML = nomecpu

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[0].innerHTML = costoc + "$"
    console.log(prezzo)

    console.log("Nome CPU " + nomecpu)
    console.log("Formato CPU " + formatocpu)

    costo = costo+costoc
    calcoli()
}

//Selezione Motherboard
function selezionam(ele){

    //Deseleziona tutto
    mobo = document.getElementsByClassName("mobo")

    for(i=0; i<mobo.length; i++){
        console.log(mobo[i])

        if(mobo[i].classList.contains("selezionato")){

            mobo[i].classList.toggle("selezionato")
            costo = costo - Number(mobo[i].getAttribute("costo"))
        }

    }
    

    //Attiva selezionato
    ele.classList.toggle('selezionato');
    costom = Number(ele.getAttribute("costo"))
    costo = costo+costom

    //Informazioni MOBO
    formatomobo=ele.getAttribute("formatom")
    nomemobo=ele.getAttribute("nomem")
    
    document.getElementById("textmobo").innerHTML = nomemobo

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[1].innerHTML = costom + "$"
    console.log(prezzo)

    console.log("Nome MOBO " + nomemobo)
    console.log("Formato MOBO " + formatomobo)

    
    calcoli()
}

//Selezione RAM
function selezionar(ele){

    //Deseleziona tutto
    ram = document.getElementsByClassName("ram")

    for(i=0; i<ram.length; i++){
        console.log(ram[i])

        if(ram[i].classList.contains("selezionato")){

            ram[i].classList.toggle("selezionato")
            costo = costo - Number(ram[i].getAttribute("costo"))
        }

    }

    //Attiva selezionato
    ele.classList.toggle('selezionato');
    costor = Number(ele.getAttribute("costo"))
    costo = costo+costor

    
    //Informazioni RAM
    nomeram=ele.getAttribute("nomer")
    
    document.getElementById("textram").innerHTML = nomeram

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[2].innerHTML = costor + "$"
    console.log(prezzo)

    calcoli()
}

//Selezione storage
function selezionas(ele){

    //Deseleziona tutto
    sto = document.getElementsByClassName("sto")

    for(i=0; i<sto.length; i++){
        console.log(sto[i])

        if(sto[i].classList.contains("selezionato")){

            sto[i].classList.toggle("selezionato")
            costo = costo - Number(sto[i].getAttribute("costo"))
        }

    }

    //Attiva selezionato
    ele.classList.toggle('selezionato');
    costos = Number(ele.getAttribute("costo"))
    costo = costo+costos

    
    //Informazioni stor
    nomesto=ele.getAttribute("nomes")
    
    document.getElementById("textstorage").innerHTML = nomesto

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[3].innerHTML = costos + "$"
    console.log(prezzo)


    calcoli()
}

//Selezione gpu
function selezionag(ele){

    //Deseleziona tutto
    gpu = document.getElementsByClassName("gpu")

    for(i=0; i<gpu.length; i++){
        console.log(gpu[i])

        if(gpu[i].classList.contains("selezionato")){

            gpu[i].classList.toggle("selezionato")
            costo = costo - Number(gpu[i].getAttribute("costo"))
        }

    }

    //Attiva selezionato
    ele.classList.toggle('selezionato');
    costog = Number(ele.getAttribute("costo"))
    costo = costo+costog

    
    //Informazioni gpu
    nomegpu=ele.getAttribute("nomeg")
    
    document.getElementById("textgpu").innerHTML = nomegpu

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[4].innerHTML = costog + "$"
    console.log(prezzo)

    calcoli()
}



//Calcoli e verifica compatibilità
function calcoli(){
    console.log(costo)

    prezzo = document.getElementsByClassName("prezzo")
    prezzo[5].innerHTML = costo + "$"
    console.log(prezzo)


    err = document.getElementById("incomp")
    console.log(err)

    if((formatocpu != null && formatomobo != null) && formatomobo == formatocpu){
        console.log("La CPU e la Motherboard sono compatibili")
        err.classList.add("hidden")

    }else if((formatocpu != null && formatomobo != null) && formatomobo != formatocpu){
        console.log("Non sono compatibili")
        err.classList.remove("hidden")
    }


}
