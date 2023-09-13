class Persona{
    constructor(nombre,edad,profesion){
        this._nombre = nombre;
        this._edad = edad;
        this._profesion = profesion;
    }
   

    get getNombre (){return this._nombre;}
    set setNombre (nombre){this._nombre = nombre;}

    get getEdad (){return this._edad;}
    set setEdad (edad){this._edad = edad;}

    get getProfesion (){return this._profesion;}
    set setProfesion (profesion) {this._profesion = profesion;}


    datos() { return `${this._nombre}, ${this._edad} años de edad, profecion ${this._profesion}`; }
toString() { return this.datos(); }
}

const persona = new Persona("Tomas", 24 , "Programadors");

function mostrarPropiedades() {

    alert(persona.toString());
}

class Libro{
    constructor(titulo, autor,año ){
        this._titulo = titulo;
        this._autor = autor;
        this._año = año;
    }

    dato() {return `Libro : ${this._titulo}, del autor: ${this._autor}, fue publicado el año ${this._año}`; }
    toString(){return this.dato();}
}
const libro1 = new Libro("Lo que el viento se llevo " , "Tomas ALberto", 1999);
function mostrarLibro(){
    alert(libro1.toString());
}

function cargarPersona (){
    
    let nombrePersona = prompt("ingrese su nombre");
    let edadPersona = prompt("ingrese su edad");
    let profesionPersona = prompt("Ingrese su profesion");

    
    if(nombrePersona!= null){

        const persona2 = new Persona(nombrePersona,edadPersona,profesionPersona);
        alert(persona2.toString());
    }else{alert("ERROR");}
  
}
function mostrarPersona(){
   
}

function map(){
    const nombre = ["tomas", "chaste", "gby" , "lani" , "bruno" , "goy"];
    const nombreMayuscula = nombre.map(nombre => nombre.toUpperCase());

    alert ("nombres en mayuscula : " + nombreMayuscula);
}

// find compara si el numero es definido o nombre
// atencion prompt solo toma string

function find (){
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    let numBuscado = prompt("Ingrese el numero buscado");
    let num = parseInt(numBuscado);
    const numeroEncontrado = numeros.find(numeros => numeros === num);

    if(numeroEncontrado != undefined){

        alert(num);
    }else{alert("Numero inexcistente en el arreglo");}
}

function filter (){
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const filtrados = numeros.filter(numeros => numeros %2 ===0);

    alert(filtrados);


}