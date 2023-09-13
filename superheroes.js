class Super{
constructor (nombre,poder){
    this._nombre = nombre;
    this._poder = poder;
}
datos (){return `Hola mi nombre es ${this._nombre} y vengo a proteger la ciudad, mi poder especial es ${this._poder}`;}
toString(){return this.datos();}

}

function crearSuper (){
    let superNombre = prompt("Ingresa un nombre");
    let superPoder = prompt("Ingresa el poder");

    if(superNombre != null){
        const super1 = new Super(superNombre,superPoder);
        alert(super1.toString());
    }else{alert("ERROR EN LA CREACION");}

    alert(super1.toString());
}

class Villano extends Super{
    constructor(nombre,poder,plan){
        super(nombre,poder);
        this._plan = plan;
    }

    datos(){return `JA AJ AJ Soy el Super Villano ${this._nombre} y vengo a destruir todo ${this._plan} con mi super poder ${this._poder}`;}
    toString(){return this.datos();}
}

function crearVillano (){
    let nombreVil = prompt("Ingrese nombre del villano");
    let plan = prompt("Ingrese su plan maestro");
    let poder = prompt("Ingrese su superpoder");

    if (nombreVil != null){
        const vill1 = new Villano (nombreVil,poder,plan);
        alert(vill1.toString());
    }
}