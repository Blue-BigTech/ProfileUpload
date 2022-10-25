/**
 * Javascript class for the "Choose your Interests" Page
 * @author Kiara
 */
//TODO: Deselect from final List should work

let elemntsSelected = 0;

//This is just for test-usages
//Gameobjects
let selectedGames = [];

let leagueOfLegends = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "League Of Legends",
    isChecked: false
};
let counterStrike = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "Counter Strike",
    isChecked: false
};
let lifeIsStrange = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "Life is Strange",
    isChecked: false
};
let game4 = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "Game 4",
    isChecked: false
};
let game5 = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "Game 5",
    isChecked: false
};
let game6 = {
    image: "https://gamequitters.com/wp-content/uploads/LOL_CMS_152_Article_01_dsnpbw97lpr2tcdw6cjm.jpg",
    name: "Game 6",
    isChecked: false
};
selectedGames[0] = leagueOfLegends;
selectedGames[1] = counterStrike;
selectedGames[2] = lifeIsStrange;
selectedGames[3] = game4;
selectedGames[4] = game5;
selectedGames[5] = game6;

/**
 * Adds EventsListener to different kind of DOM elements
 */
function init() {
    //For the Search-Pop Up
    document.getElementById('search-btn').addEventListener("click",showSearchWindow, true);
    document.getElementById('closeSearchCross').addEventListener('click',closeSearchWindow,true);
    //For the Final-Game-View
    document.getElementById('interest-btn').addEventListener('click',showFinalGamesWindow,true);
    document.getElementById('closeFinalGameView').addEventListener('click',closeFinalGamesWindow,true);
}
/**
 * Changes opacity and color of an image overlay (select/deselect)
 * @param e element, that was clicked
 */
function selectGame(e) {
    //Get the overlay element inside clicked element
    let elemOverlay =  e.querySelector('.game-selected');
    /*This variable (testName) is only for test reasons: Please delete or override later, when real
    implemantation is finished*/
    let testName = e.querySelector('.game-selected').getElementsByTagName("P")[0];
    updateCheckbox(testName);
    //The image should be selected
    if(elemOverlay.style.opacity != 1 && elemOverlay.style.color != "041730FF") {
        elemOverlay.style.opacity = 1;
        //Font color when image is selected
        elemOverlay.style.color = "#A0D113";
        elemntsSelected++;
    } else {
        //The image should be deselected
        elemOverlay.style.opacity = 0;
        elemOverlay.style.color = "#0C2E5B";
        elemntsSelected--;
    }
    checkForSubmit(elemntsSelected);

}

/**
 * Update the checked status of a Checkbox for each game
 * @param gameName name of the game, which checkbox should be updated
 */
function updateCheckbox(gameName) {
    selectedGames.forEach((game) => {
        if(gameName.textContent == game.name && game.isChecked == false) {
            game.isChecked = true;
        }else if(gameName.textContent == game.name && game.isChecked == true) {
            game.isChecked = false;
        }
    })
}

/**
 * Update the recommendation divs depending on their Checkbox status
 */
function updateRecSelection() {
    //get all Game-Divs
    let allGameDivs = document.getElementsByClassName('game-selected');
    //Counter to count the divs
    let divcounter = 0;
    //Iterate every game
        //if the game.name and the div.p is equal, change the div
        for (var i = 0; i < allGameDivs.length; i++) {
            selectedGames.forEach(game => {
                if (allGameDivs.item(i).getElementsByTagName("p")[0].textContent == game.name) {
                    if(game.isChecked) {
                        allGameDivs.item(i).style.opacity = 1;
                        //Font color when image is selected
                        allGameDivs.item(i).style.color = "#A0D113";
                    } else {
                        //The image should be deselected
                        allGameDivs.item(i).style.opacity = 0;
                        allGameDivs.item(i).style.color = "#0C2E5B";
                    }
                }
            })
        }
    checkForSubmit(elemntsSelected);
}

/**
 * Update the Array of all gameobjects with current Checkbox status
 * @param e
 */
function changeCheckedStatusInArray(e) {
    //e.target is the whole div
    let gameNameElem;
    let allGameDivs = document.getElementsByClassName(e.target.className);
    for(let i = 0; i < allGameDivs.length; i++){
        //Find the correct div that throw the error
        if(allGameDivs.item(i) === e.target) {
            //Get the name of the game via element
           gameNameElem = allGameDivs.item(i).parentNode.querySelector('.gameName');
           //Compare to the selectGames array and change the checked value
            selectedGames.forEach(game => {
                if(game.name == gameNameElem.innerHTML) {
                    if(game.isChecked) {
                        game.isChecked = false;
                    }else{
                        game.isChecked = true;
                    }
                }
            })
        }
    }
    updateRecSelection();
}

/**
 * Update the Array of all selected gameobjects with current Checkbox status
 * @param e
 */
function changeCheckedStatusFinal(e) {
    //e.target is the whole div
    let gameNameElem;
    let allGameDivs = document.getElementsByClassName(e.target.className);
    for(let i = 0; i < allGameDivs.length; i++){
        //Find the correct div that throw the error
        if(allGameDivs.item(i) === e.target) {
            //Get the name of the game via element
            gameNameElem = allGameDivs.item(i).parentNode.querySelector('.selectedGameName');
            //Compare to the selectGames array and change the checked value
            selectedGames.forEach(game => {
                if(game.name == gameNameElem.innerHTML) {
                    if(game.isChecked) {
                        game.isChecked = false;
                    }else{
                        game.isChecked = true;
                    }
                }
            })
        }
    }
    updateRecSelection();
}

/**
 * Checks if enough games are selected, so the submit button can be activated
 * @param elemNbr number of current activated elements
 */
function checkForSubmit(elemNbr) {
//TODO Redo. Resetting the elemNbr is not a clean coding
    elemNbr = 0;
    selectedGames.forEach(game => {
        if(game.isChecked) {
            elemNbr++;
        }
    })
    let confirmButton = document.getElementById('confirmBtn');
    //Get the submit button of this page
    let subButton = document.getElementById('interest-btn');
    //Button is active
    if(elemNbr > 0) {
        subButton.style.color = "#DCF1FF";
        subButton.style.backgroundColor = "#0C2E5B";
        subButton.disabled = false;
        subButton.style.cursor = "pointer";
    } else {
        //Button is disabled
        subButton.style.color = "#041730";
        subButton.style.backgroundColor = "#DCF1FF";
        subButton.disabled = true;
        subButton.style.cursor = "not-allowed";
    }
}

/**
 * Creates new DOM Elements and fills them with content, depending on the given game objects.
 */
function showAllGames(gameArray) {
    let popUpElem = document.getElementById('contentSearchModal');
    let formTag = document.getElementById('allGamesForm');
    //Create a new div for all of the content and give it an id
    let bigContainer = document.createElement('div');
    bigContainer.id = 'allGamesDiv';
    let divTag;
    let imageTag;
    let gameImage;
    let pTag;
    let gameName;
    let checkTag;
    //Is the form empty? Has it no content? If it has, remove and refill
    if(formTag.childElementCount == 0) {
        //Go through the whole game array
        gameArray.forEach((game, index) => {

            //Div where information is placed. Give it a class
            divTag = document.createElement('div');
            divTag.classList.add("gameContent");

            //Image of the Game. Give it a class
            imageTag = document.createElement('img');
            imageTag.classList.add('allGamesImage');
            gameImage = document.createTextNode(game.image);
            //Set the source of the image

            //Name of the Game
            pTag = document.createElement('p');
            pTag.classList.add("gameName");
            gameName = document.createTextNode(game.name);
            pTag.appendChild(gameName);

            //Checkbox of the Game
            checkTag = document.createElement('input');
            checkTag.type = 'checkbox';
            checkTag.classList.add('gameSelect');
            divTag.addEventListener("change", changeCheckedStatusInArray, true);
            if(game.isChecked) {
                //game should be selected
                checkTag.checked = true;
            } else {
                //game should not be selected
                checkTag.checked = false;
            }

            //Everything adding to the big div
            divTag.appendChild(imageTag);
            divTag.appendChild(pTag);
            divTag.appendChild(checkTag);
            bigContainer.appendChild(divTag);

        })
        formTag.appendChild(bigContainer);
        popUpElem.appendChild(formTag);
    }
    //Get all image tags
    let allImages = document.getElementsByClassName('allGamesImage');
    //Get all p tags
    let allNames = document.getElementsByClassName('gameName');
    //Get all checkboxes
    let allBoxes = document.getElementsByClassName('gameSelect');
    let gameCounter = 0;
    gameArray.forEach((game) => {
        //Overwrite the images
        allImages[gameCounter].src = game.image;
        //Overwrite the names
        allNames[gameCounter].innerHTML = game.name;
        //Overwrite the checkboxes
        allBoxes[gameCounter].checked = game.isChecked;
        gameCounter++;
    })

}

function showAllSelectedGames() {
    let popUpElem = document.getElementById('contentFinalModal');
    let formTag = document.getElementById('finalGamesView');
    //Create a new div for all of the content and give it an id
    let bigContainer = document.createElement('div');
    bigContainer.id = 'allGamesDiv';
    let divTag;
    let imageTag;
    let gameImage;
    let pTag;
    let gameName;
    let checkTag;
    //Is the form empty? Has it no content? If it has, remove and refill
    if(formTag.childElementCount == 0) {
        //Go through the whole game array
        selectedGames.forEach((game, index) => {
            if(game.isChecked){
                //Div where information is placed. Give it a class
                divTag = document.createElement('div');
                divTag.classList.add("gameContent");

                //Image of the Game. Give it a class
                imageTag = document.createElement('img');
                imageTag.classList.add('allSelectedGamesImage');
                gameImage = document.createTextNode(game.image);
                //Set the source of the image

                //Name of the Game
                pTag = document.createElement('p');
                pTag.classList.add("selectedGameName");
                gameName = document.createTextNode(game.name);
                pTag.appendChild(gameName);

                //Checkbox of the Game
                checkTag = document.createElement('input');
                checkTag.type = 'checkbox';
                checkTag.classList.add('gameSelectFinal');
                checkTag.addEventListener("change", changeCheckedStatusFinal, true);
                checkTag.checked = game.isChecked;

                //Everything adding to the big div
                divTag.appendChild(imageTag);
                divTag.appendChild(pTag);
                divTag.appendChild(checkTag);
                bigContainer.appendChild(divTag);
            }
        })
        formTag.appendChild(bigContainer);
        popUpElem.appendChild(formTag);
        let btnDiv = document.createElement("div");
        btnDiv.classList.add('btnDiv');
        let confirmbtn = document.createElement("button");
        confirmbtn.type = "submit";
        confirmbtn.id = "confirmBtn";
        confirmbtn.innerHTML="Confirm";
        //TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        btnDiv.appendChild(confirmbtn);
        formTag.appendChild(btnDiv);
    }
    //Get all image tags
    let allImages = document.getElementsByClassName('allSelectedGamesImage');
    //Get all p tags
    let allNames = document.getElementsByClassName('selectedGameName');
    //Get all checkboxes
    let allBoxes = document.getElementsByClassName('gameSelectFinal');
    let gameCounter = 0;
    selectedGames.forEach((game) => {
        if(game.isChecked) {
            //Overwrite the images
            allImages[gameCounter].src = game.image;
            //Overwrite the names
            allNames[gameCounter].innerHTML = game.name;
            //Overwrite the checkboxes
            allBoxes[gameCounter].checked = game.isChecked;
            gameCounter++;
        }

    })

}

/**
 * Shows the Search Window
 */
function showSearchWindow() {
    //Places all Games (selected and unselected ones)
    showAllGames(selectedGames);
    //show the Pop-Up
    document.querySelector('.bgForModalSearch').style.display = 'flex';
}

/**
 * Hides the Search Window
 */
function closeSearchWindow() {
    //close the Pop-Up
    document.querySelector('.bgForModalSearch').style.display = 'none';
}


/**
 * Shows the Final-Game-Choice Window
 */
function showFinalGamesWindow() {
    //Place all selected Games
    showAllSelectedGames();
    //show the Pop-Up
    document.querySelector('.bgForModalFinalGameView').style.display = 'flex';
}

/**
 * Hides the Final-Game-Choice Window
 */
function closeFinalGamesWindow() {
    //closes the Pop-Up
    document.querySelector('.bgForModalFinalGameView').style.display = 'none';
}