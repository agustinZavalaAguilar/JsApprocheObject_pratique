/*-----------Création de l'object Personnage avec la méthode "constructor" -------------------*/

class Personnage {

    constructor(pseudo, pointsDeVie, attaque,attaqueSpecial){

    this.pseudo = pseudo;
    this.pointsDeVie = pointsDeVie;
    this.attaque = attaque;
    this.attaqueSpecial = attaqueSpecial;
    }

    verifierSante(){
        if(this.pointsDeVie <= 0){
            console.log(this.pseudo + " est mort dans une flaque de sang -un bel jour de printemps.")
        }
        else{
            console.log(this.pseudo + " a " + this.pointsDeVie + " points de vie");
        }
    }

    attaquer(personnage){
        personnage.pointsDeVie -= this.attaque;
        console.log(
            this.pseudo + " attaque " + personnage.pseudo +" avec un coup de " + this.attaque
        );
        personnage.verifierSante();
    }

    lancerAttaqueSpecial(personnage){
        personnage.pointsDeVie -= this.attaqueSpecial;
        console.log(
            this.pseudo + " attaque " + personnage.pseudo + " avec un terrible coup de " 
            + this.attaqueSpecial
        );
       personnage.verifierSante();
    }
        
}
/*------------Création des personnages---------------------------------*/

let clicker = new Personnage("clicker",100,25,50);
let billySurvivor = new Personnage("billySurvivor", 50, 30,40);

//attaque!!
billySurvivor.attaquer(clicker);
clicker.lancerAttaqueSpecial(billySurvivor);


