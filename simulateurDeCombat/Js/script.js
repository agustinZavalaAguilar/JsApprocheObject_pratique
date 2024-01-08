//Test fonction Alert

//alert("Préparez vous pour un bain de sang!!");

/*-----------Création de l'object Personnage avec la méthode "constructor" -------------------*/

class Personnage {

    constructor(pseudo, pointsDeVie, attaque,attaqueSpecial){

    this.pseudo = pseudo;
    this.pointsDeVie = pointsDeVie;
    this.attaque = attaque;
    this.attaqueSpecial = attaqueSpecial;
    }

    afficher(texte) {
        var messageAafficher = document.getElementById("affichage");
        messageAafficher.textContent = texte;
    }

    creerCarteCombatant() {
        //Selection area de combat
        let arena = document.getElementById('arenaContainer');

        //Création de carte de combatant, ajouter dans arena
        let carteCombatant = document.createElement('div');
        carteCombatant.classList.add('personnage');
        arena.appendChild(carteCombatant);

        //Création de l'avatar et ajout dans la carte du combatant
       /*
        let divAvatar = document.createElement('div');
        divAvatar.classList.add('avatar');
        let avatar = document.createElement('img');
        avatar.src = this.getAvatar();
        divAvatar.appendChild('avatar');
        carteCombatant.appendChild('divAvatar')
        */

        //Création du nom de combatant
        let name = document.createElement('h4');
        name.classList.add('name');
        name.textContent = "Name: " + this.pseudo;
        carteCombatant.appendChild(name);

        //Création de la liste de caractéristiques
        let listeCaracteristiques = document.createElement('ul');
        
        let pointsDeVie = document.createElement('li');
        pointsDeVie.textContent = 'Points de vie: ' + this.pointsDeVie;

        let pointsDattaque = document.createElement('li');
        pointsDattaque.textContent = 'Attaque: ' + this.attaque;

        let pointsAttaqueSpecial = document.createElement('li');
        pointsAttaqueSpecial = 'Attaque spécial: ' + this.attaqueSpecial;

        listeCaracteristiques.appendChild(pointsDeVie);
        listeCaracteristiques.appendChild(pointsDattaque);
        listeCaracteristiques.appendChild(pointsAttaqueSpecial);
        
        carteCombatant.appendChild(listeCaracteristiques);
    }

    verifierSante() {
        if(this.pointsDeVie <= 0){
            let verificationSante = this.pseudo + " est mort dans une flaque de sang -un bel jour de printemps."
            //personnage.afficher(verificationSante);
            console.log(verificationSante);
            this.afficher(verificationSante);
        }
        else{
            console.log(this.pseudo + " a " + this.pointsDeVie + " points de vie");
            return this.pseudo + " a " + this.pointsDeVie + " points de vie";
        }
    }

    attaquer(personnage){
        personnage.pointsDeVie -= this.attaque;

        let resultatAttaque = this.pseudo + " attaque " + personnage.pseudo +
        " avec un coup de " + this.attaque + " points. ";

        console.log(resultatAttaque);

        /*var disp = document.getElementById("affichage");
        disp.textContent = resultatAttaque + personnage.verifierSante();
        */
       personnage.afficher(resultatAttaque);
       
       personnage.verifierSante();

    }

    lancerAttaqueSpecial(personnage){
        personnage.pointsDeVie -= this.attaqueSpecial;
        
        let resultatAttaqueSpecial = this.pseudo + " attaque " + personnage.pseudo + 
        " avec un terrible coup de fusil et lui arrache " + this.attaqueSpecial + " points!";
        
        console.log(resultatAttaqueSpecial);
        personnage.afficher(resultatAttaqueSpecial);

        personnage.verifierSante();
    }       
}
/*------------Création des personnages---------------------------------*/

let clicker = new Personnage("clicker",100,25,50);
let sexySurvivor = new Personnage("Sexy Survivor", 50, 30, 40);

//attaque!!


//billySurvivor.attaquer(clicker);
//clicker.lancerAttaqueSpecial(billySurvivor);
//billySurvivor.verifierSante();
//billySurvivor.lancerAttaqueSpecial(clicker);
sexySurvivor.creerCarteCombatant();

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

//renameFighters('Sexy Survivor', 'Old fashioned Zombie Lady');







