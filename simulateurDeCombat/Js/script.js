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

/*---------Experimentation DOM et pratique avec des fonctions JS et JsQuery----*/
// 1) Fonction Js pour changer les noms des combatants--------------------------
function updateFightersNames(survivorName,zombieName) {
    var el = document.getElementById("nomDuSurvivant");
    el.textContent = survivorName;
    var el = document.getElementById("nomDuZombie");
    el.textContent = zombieName;
}
//Appel de la fonction crée ci-dessus:
//updateFightersNames('Tony Survivor', 'Hungry Petunia');

// 2) Remaniement de la fonction ci-dessous pour effectuer la même action avec
//    une expression de fonction:-----------------------------------------------

let changeFightersNames = (survivorName,zombieName)=>{
    var el = document.getElementById("nomDuSurvivant");
    el.textContent = survivorName;
    var el = document.getElementById("nomDuZombie");
    el.textContent = zombieName;
}
//Appel de l'expression de fonction ci-dessous:
//changeFightersNames('Cool Dog Survivor','Ugly Zombie Lady');

// 3) JQuery pour effectuer la même fonction de changement des noms des combattants:--

let renameFighters = (survivorName,zombieName)=>{
    $('#nomDuSurvivant').text(survivorName);
    
    var el = document.getElementById("nomDuZombie");
    el.textContent = zombieName;
}

renameFighters('Jquery Survivor', 'Old fashioned Zombie Lady');
