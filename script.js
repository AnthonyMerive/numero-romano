let boton = document.getElementById('btnEnviar');

boton.addEventListener('click', capturaDatos)

let form = document.getElementById('form');

form.addEventListener('submit', formSubmit)

function formSubmit(e) {
    e.preventDefault();
}

let muestra = document.getElementById('mostrar');

function capturaDatos() {
//declaro variable de entrada
let num = document.querySelector('#numero').value;
//declaro variables y opero con ellas para que me separen cada numero
let miles = Math.trunc(num/1000)%10;
let centena = Math.trunc(num/100)%10;
let decena = Math.trunc(num/10)%10;
let unidad = Math.trunc(num/1)%10;


if(miles > 3 || num==0){//si miles es mayor a 3 osea, si es 4mil o si el numero ingresado es igual a 0
    alert("El numero no se puede representar"); 
    return;//importante el return si no se coloca, mostrara en la pagina el resultado a pesar de estar mal
}else{//de lo contrario ejecute varios switch con sus opciones
    switch(miles){
        case 0:
           miles = "";//importante declarar cuando es cero ya que si no imprimira el numero cero
           break;      //y necesitamos que no imprima nada, por tanto lo hacemos un caracter vacio
       case 1:
           miles = "M";
           break;
        case 2:
            miles = "MM";
            break;
        case 3:
            miles = "MMM";
            break;
    }

    switch(centena){
        case 0:
            centena = "";
            break;
        case 1:
            centena = "C";
            break;
        case 2:
            centena = "CC";
            break;
        case 3:
            centena = "CCC";
            break;
        case 4:25
            centena = "CD";
            break;
        case 5:
            centena = "D";
            break;
        case 6:
            centena = "DC";
            break;
        case 7:
            centena = "DCC";
            break;
        case 8:
            centena = "DCCC";
            break;
        case 9:
            centena = "CM";
            break;
    }
    
    switch(decena){
        case 0:
            decena = "";
            break;
        case 1:
            decena = "X";
            break;
        case 2:
            decena = "XX";
            break;
        case 3:
            decena = "XXX";
            break;
        case 4:
            decena = "XL";
            break;
        case 5:
            decena = "L";
            break;
        case 6:
            decena = "LX";
            break;
        case 7:
            decena = "LXX";
            break;
        case 8:
            decena = "LXXX";
            break;
        case 9:
            decena = "XC";
            break;
    }

    switch(unidad){
        case 0:
            unidad = "";
            break;
        case 1:
            unidad = "I";
            break;
        case 2:
            unidad = "II";
            break;
        case 3:
            unidad = "III";
            break;
        case 4:
            unidad = "IV";
            break;
        case 5:
            unidad = "V";
            break;
        case 6:
            unidad = "VI";
            break;
        case 7:
            unidad = "VII";
            break;
        case 8:
            unidad = "VIII";
            break;
        case 9:
            unidad = "IX";
            break;
        }
    }
    
    muestra.innerHTML = `<strong>El numero ${num} se representa como ${miles}${centena}${decena}${unidad}</strong>`;
    
    
}