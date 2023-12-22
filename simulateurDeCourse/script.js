class Voiture{
    
    constructor (numero,vitesseActuelle,vitesseMaximale)  { 
    this.numero = numero;
    this.vitesseActuelle = vitesseActuelle;
    this.vitesseMaximale = vitesseMaximale;
    }   

    accelerer(){
        if(this.vitesseActuelle + 10 <= this.vitesseMaximale){
            this.vitesseActuelle += 10;
            console.log("la vitesse actuelle de la voiture "+ this.numero +" est de "+ this.vitesseActuelle)
        } 
        if(this.vitesseActuelle+10 >= this.vitesseMaximale){
            this.vitesseActuelle = this.vitesseMaximale
            console.log("Cette voiture ne peut pas aller plus vite que "+this.vitesseMaximale+" !");
            console.log("La vitesse actuelle est de " + this.vitesseActuelle);
        }    
    }

    freiner(){
        if(this.vitesseActuelle > 0){
            this.vitesseActuelle -= 10;
            if(this.vitesseActuelle<0){
                this.vitesseActuelle = 0;
                console.log("La voiture est arretée");
            }
            console.log("la vitesse actuelle de la voiture "+ this.numero+" est de "+this.vitesseActuelle)
        }

    }
}

/*---------------création de deux instances de voiture------------------------------*/

let numero310 = new Voiture(310,295,300);
let numero501 = new Voiture(501,245,250);


console.log(numero501.vitesseActuelle);
console.log(numero501.vitesseMaximale);
numero501.freiner();
numero310.accelerer();


