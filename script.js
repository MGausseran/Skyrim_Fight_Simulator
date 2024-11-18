//On crée tout d'abord une classe Character, qui va définir les propriétés de chaque personnage
class Character {
    constructor(name, health, weapon, might, type) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.might = might;
        this.type = type;
        this.currentHealth = health;
    }

    //Méthode pour créer la barre de santé
    createHealthBar(container) {
        const healthBarContainer = document.createElement('div');
        healthBarContainer.classList.add('health-bar-container');

        const healthBar = document.createElement('div');
        healthBar.classList.add('health-bar');
        healthBar.style.width = `${(this.currentHealth / this.health) * 100}%`;

        healthBarContainer.appendChild(healthBar);
        container.appendChild(healthBarContainer);

        this.healthBarElement = healthBar; //On sauvegarde l'élément pour mise à jour
    }

    //Mise à jour de la barre de santé
    updateHealthBar() {
        if (this.healthBarElement) {
            this.healthBarElement.style.width = `${(this.currentHealth / this.health) * 100}%`;
        }
    }

    getStats(statsSection) {
        const nameParagraph = document.createElement('h2');
        nameParagraph.textContent = this.name;

        statsSection.innerHTML = ''; // Efface les stats existantes
        statsSection.appendChild(nameParagraph);

        // Ajout de la barre de santé
        this.createHealthBar(statsSection);

        const weaponImage = document.createElement('img');
        weaponImage.src = `./images/${this.weapon}.png`;
        weaponImage.alt = `${this.weapon}`;
        weaponImage.style.width = '5vw';
        statsSection.appendChild(weaponImage);
    }
}

//On crée une liste de 100 instances de classe Character en lien avec l'univers de Skyrim
const charactersList = [
    new Character('Ulfric Stormcloak', 150, 'close_combat', 200, 'human'),
    new Character('Delphine', 100, 'close_combat', 70, 'human'),
    new Character('Esbern', 80, 'magic', 50, 'human'),
    new Character('Alduin', 300, 'magic', 250, 'boss'),
    new Character('Parthurnax', 250, 'magic', 200, 'boss'),
    new Character('Dovahkiin', 200, 'close_combat', 180, 'human'),
    new Character('Mirmulnir', 120, 'magic', 100, 'boss'),
    new Character('Lydia', 100, 'close_combat', 80, 'human'),
    new Character('Balgruuf the Greater', 120, 'close_combat', 90, 'human'),
    new Character('Grelod the Kind', 80, 'magic', 50, 'human'),
    new Character('Astrid', 110, 'close_combat', 90, 'human'),
    new Character('Maven Black-Briar', 100, 'magic', 75, 'human'),
    new Character('Cicero', 90, 'close_combat', 70, 'human'),
    new Character('Aerin', 80, 'close_combat', 60, 'human'),
    new Character('Delvin Mallory', 80, 'magic', 50, 'human'),
    new Character('Brynjolf', 90, 'close_combat', 60, 'human'),
    new Character('Farkas', 150, 'close_combat', 120, 'human'),
    new Character('Vilkas', 150, 'close_combat', 120, 'human'),
    new Character('Aela the Huntress', 130, 'close_combat', 100, 'human'),
    new Character('Ghorbash the Iron Hand', 100, 'close_combat', 80, 'human'),
    new Character('Shouta', 80, 'magic', 50, 'human'),
    new Character('Frost Troll', 200, 'close_combat', 100, 'monster'),
    new Character('Bear', 150, 'close_combat', 80, 'animal'),
    new Character('Sabre Cat', 100, 'close_combat', 70, 'animal'),
    new Character('Ice Wolf', 70, 'close_combat', 40, 'animal'),
    new Character('Horker', 80, 'close_combat', 50, 'animal'),
    new Character('Wolf', 50, 'close_combat', 30, 'animal'),
    new Character('Mudcrab', 30, 'close_combat', 10, 'animal'),
    new Character('Giant', 300, 'close_combat', 200, 'monster'),
    new Character('Draugr', 100, 'close_combat', 60, 'monster'),
    new Character('Draugr Deathlord', 200, 'magic', 120, 'monster'),
    new Character('Draugr Scourge', 150, 'magic', 90, 'monster'),
    new Character('Vampire', 100, 'magic', 70, 'monster'),
    new Character('Vampire Lord', 150, 'magic', 100, 'monster'),
    new Character('Werewolf', 200, 'close_combat', 150, 'monster'),
    new Character('Hag', 90, 'magic', 80, 'monster'),
    new Character('Falkreath', 100, 'magic', 75, 'human'),
    new Character('Hulda', 90, 'close_combat', 60, 'human'),
    new Character('Skald the Elder', 100, 'close_combat', 50, 'human'),
    new Character('Serana', 120, 'magic', 90, 'human'),
    new Character('Sinding', 100, 'close_combat', 80, 'human'),
    new Character('Dengeir of Stuhn', 90, 'magic', 60, 'human'),
    new Character('Kynareth', 300, 'magic', 250, 'boss'),
    new Character('Meridia', 300, 'magic', 200, 'boss'),
    new Character('Nazeem', 70, 'close_combat', 40, 'human'),
    new Character('Ancano', 100, 'magic', 75, 'human'),
    new Character('Tullius', 120, 'close_combat', 80, 'human'),
    new Character('Tiber Septim', 250, 'close_combat', 200, 'boss'),
    new Character('Elenwen', 90, 'magic', 60, 'human'),
    new Character('Rulindil', 100, 'magic', 70, 'human'),
    new Character('Nightingale', 120, 'magic', 80, 'human'),
    new Character('Niranye', 80, 'magic', 50, 'human'),
    new Character('Silus Vesuius', 90, 'magic', 70, 'human'),
    new Character('Balimund', 90, 'close_combat', 60, 'human'),
    new Character('Talon', 80, 'magic', 50, 'human'),
    new Character('Dulnir', 80, 'magic', 50, 'human'),
    new Character('Yngol', 90, 'magic', 60, 'human'),
    new Character('Froki Whetted-Blade', 100, 'close_combat', 80, 'human'),
    new Character('Skooma Cat', 80, 'magic', 50, 'human'),
    new Character('Farengar Secret-Fire', 90, 'magic', 60, 'human'),
    new Character('Khadar', 70, 'close_combat', 40, 'human'),
    new Character('Veezara', 90, 'magic', 70, 'human'),
    new Character('Iona', 100, 'close_combat', 80, 'human'),
    new Character('Gormlaith Golden-Hilt', 150, 'close_combat', 100, 'boss'),
    new Character('Narfi', 70, 'magic', 50, 'human'),
    new Character('Balgruuf', 150, 'close_combat', 100, 'human'),
    new Character('Aela the Huntress', 130, 'close_combat', 100, 'human'),
    new Character('Mephala', 300, 'magic', 250, 'boss'),
    new Character('Grelod the Kind', 80, 'magic', 50, 'human'),
    new Character('Ghorbash the Iron Hand', 100, 'close_combat', 80, 'human'),
    new Character('Sinding', 100, 'close_combat', 80, 'human'),
    new Character('Tullius', 120, 'close_combat', 80, 'human'),
    new Character('Froki Whetted-Blade', 100, 'close_combat', 80, 'human'),
    new Character('Kjeld', 70, 'close_combat', 50, 'human'),
    new Character('Guldan', 300, 'magic', 250, 'boss'),
    new Character('Eldrin', 90, 'magic', 70, 'human'),
    new Character('Sorex Vinius', 80, 'magic', 50, 'human'),
    new Character('Thalmor Justiciar', 100, 'magic', 60, 'monster'),
    new Character('Farengar Secret-Fire', 90, 'magic', 60, 'human'),
];

//On désigne chaque partie de l'HTML
const firstSubList = document.querySelector('.first_sublist_container');
const firstListOfTypes = document.querySelector('.first_opponent_selector');
const secondSubList = document.querySelector('.second_sublist_container');
const secondListOfTypes = document.querySelector('.second_opponent_selector');

//On crée une fonction pour récupérer dans subList tous les Character ayant pour type la valeur sélectionnée dans listOfTypes
function selectType(listOfTypes, subList) {
    const selectedType = event.target.value;
    subList.innerHTML = '';
    charactersList.forEach(character => {
        let characterType = character.type;
        if (characterType === selectedType) {
            const characterName = document.createElement('option');
            characterName.textContent = character.name;
            subList.appendChild(characterName);
        }
    })
}

//Au clic sur la liste, la fonction créée au-dessus se lance
firstListOfTypes.addEventListener('click', () => {
    selectType(firstListOfTypes, firstSubList);
});

secondListOfTypes.addEventListener('click', () => {
    selectType(secondListOfTypes, secondSubList);
});

//On récupère ici d'autres éléments HTML grâce auxquels nous allons faire afficher les stats des objets Character sélectionnés
const firstStatsSection = document.querySelector('.first_opponent_column .stats');
const secondStatsSection = document.querySelector('.second_opponent_column .stats');

//On crée une fonction pour afficher les stats en donnant comme argument à la fonction l'endroit où les afficher
function displayStats(subList, statsSection) {
    const selectedName = subList.value;
    const selectedCharacter = charactersList.find(character => character.name === selectedName);
    if (selectedCharacter) {
        selectedCharacter.getStats(statsSection);
    }
}

//On affiche les stats au clic
firstSubList.addEventListener('click', () => {
    displayStats(firstSubList, firstStatsSection);
});

secondSubList.addEventListener('click', () => {
    displayStats(secondSubList, secondStatsSection);
});

//On lance le combat
//On désigne un élément pour afficher les résultats du combat
const fightResultsDiv = document.querySelector('.fight_results');

//On met à jour la fonction fight pour afficher les résultats dans le div
function fight() {
    const fightSound = new Audio('./sounds/fusrohdah.mp3');
    const firstOpponentName = firstSubList.value;
    const secondOpponentName = secondSubList.value;

    const firstOpponent = charactersList.find(character => character.name === firstOpponentName);
    const secondOpponent = charactersList.find(character => character.name === secondOpponentName);

    if (!firstOpponent || !secondOpponent) {
        alert('Please select two valid opponents.');
        return;
    }

    let round = 1;
    let fightResult = '';

    //Lancer le son avant le combat
    fightSound.play();

    const roundInterval = setInterval(() => {
        if (firstOpponent.currentHealth <= 0 || secondOpponent.currentHealth <= 0) {
            clearInterval(roundInterval);
            return;
        }

        const coinTossed = Math.floor(Math.random() * 2);
        const criticalStrikeChance = Math.floor(Math.random() * 100);
        const reachingChance = Math.floor(Math.random() * 100);
        const dodgingChance = 15;

        fightResult += `<div class="round_counter">Round #${round}</div>`;
        if (coinTossed === 0) {
            if (reachingChance > dodgingChance) {
                const damage = criticalStrikeChance <= 20 ? firstOpponent.might * 1.5 : firstOpponent.might;
                secondOpponent.currentHealth -= damage;
                secondOpponent.currentHealth = Math.max(0, secondOpponent.currentHealth); //Évite les valeurs négatives
                fightResult += `<div class="event_in_fight">${firstOpponent.name} attacks ${secondOpponent.name} and deals ${damage} damage!</div>`;

                //Mise à jour de la barre de santé
                secondOpponent.updateHealthBar();

                if (secondOpponent.currentHealth <= 0) {
                    fightResult += `<div class="opponent_killed">${secondOpponent.name} is dead.</div><div class="victory">${firstOpponent.name} wins!</div>`;
                    clearInterval(roundInterval);
                    fightResultsDiv.innerHTML = fightResult;
                    return;
                }
            } else {
                fightResult += `<div class="event_in_fight">${secondOpponent.name} dodges! The attack from ${firstOpponent.name} misses...</div>`;
            }
        } else {
            if (reachingChance > dodgingChance) {
                const damage = criticalStrikeChance <= 20 ? secondOpponent.might * 1.5 : secondOpponent.might;
                firstOpponent.currentHealth -= damage;
                firstOpponent.currentHealth = Math.max(0, firstOpponent.currentHealth);
                fightResult += `<div class="event_in_fight">${secondOpponent.name} attacks ${firstOpponent.name} and deals ${damage} damage!</div>`;

                //Mise à jour de la barre de santé
                firstOpponent.updateHealthBar();

                if (firstOpponent.currentHealth <= 0) {
                    fightResult += `<div class="opponent_killed">${firstOpponent.name} is dead.</div><div class="victory">${secondOpponent.name} wins!</div>`;
                    clearInterval(roundInterval);
                    fightResultsDiv.innerHTML = fightResult;
                    return;
                }
            } else {
                fightResult += `<div class="event_in_fight">${firstOpponent.name} dodges! The attack from ${secondOpponent.name} misses...</div>`;
            }
        }
        round++;
        fightResultsDiv.innerHTML = fightResult;
    }, 2000);
}

//Evenements pour le déclenchement des différents sons

//Son de bois qui craque
let titleContainer = document.querySelector('.main_title_container');
let fightContainer = document.querySelector('.fight_button_container');
let eventContainer = document.querySelector('.fight_results');
let woodSound = new Audio('./sounds/wood.mp3');
titleContainer.addEventListener('click', () => {
    woodSound.currentTime = 0;
    woodSound.play();
}) ;
fightContainer.addEventListener('click', () => {
    woodSound.currentTime = 0;
    woodSound.play();
}) ;
eventContainer.addEventListener('click', (event) => {
    //Vérifie si l'élément cliqué a la classe 'event_in_fight'
    if (event.target.classList.contains('event_in_fight')) {
        woodSound.currentTime = 0;
        woodSound.play();
    }
});

//Son de coup contre le métal
firstOpponentContainer = document.querySelector('.first_opponent_column .stats');
secondOpponentContainer = document.querySelector('.second_opponent_column .stats');
let metalSound = new Audio('./sounds/metal.mp3');
firstOpponentContainer.addEventListener('click', () => {
    metalSound.currentTime=0;
    metalSound.play();
});
secondOpponentContainer.addEventListener('click', () => {
    metalSound.currentTime=0;
    metalSound.play();
});

//Son d'épées qui s'entrechoquent
let fightButton = document.querySelector('.fight_button');
let hoverFightSound = new Audio('./sounds/sword.mp3')
fightButton.addEventListener('mouseover', () => {
    hoverFightSound.currentTime = 0; 
    hoverFightSound.play(); 
});
fightButton.addEventListener('click', fight);
