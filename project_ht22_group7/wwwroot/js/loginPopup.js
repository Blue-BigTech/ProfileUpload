/**
 * Javascript class for the "Login and Register" Page
 * @author Kiara
 */

function init() {
    //For the Login Pop up
    document.getElementById('loginBtn').addEventListener('click',showloginWindow,true);
    document.getElementById('closeLoginCross').addEventListener('click',closeLoginWindow,true);
    document.getElementById('refToRegister').addEventListener('click', changeToRegister,true);
    //For the Register Pop up
    document.getElementById('registerBtn').addEventListener('click',showregisterWindow,true);
    document.getElementById('closeRegCross').addEventListener('click',closeRegisterWindow,true);
    document.getElementById('refToLogin').addEventListener('click',changeToLogin, true);
}

/**
 * Shows the Login pop up
 */
function showloginWindow() {
    document.querySelector('.bgForModalLogin').style.display = 'flex';
}

/**
 * Hides the Login pop up
 */
function closeLoginWindow() {
    document.querySelector('.bgForModalLogin').style.display = 'none';
}

/**
 * Shows the register pop up
 */
function showregisterWindow() {
    document.querySelector('.bgForModalRegister').style.display = 'flex';
}

/**
 * Hides the Register pop up
 */
function closeRegisterWindow() {
    document.querySelector('.bgForModalRegister').style.display = 'none';
}

/**
 * Closes the Register window and shows the login window
 */
function changeToLogin() {
    closeRegisterWindow();
    showloginWindow();
}

/**
 * Closes the login window and shows the register window
 */
function changeToRegister() {
    closeLoginWindow();
    showregisterWindow();
}