/* eslint-disable no-undef */
// a)
// playercount int

// This is the first exercise where we need to use indentations.
// Indentations can be done with spaces or tabs (tab = 4 spaces) and
// conventions change depending on the project, company, language...
// If working for an existing product, always follow the existing convention
// For JS (and its frameworks like React), most typically you will see an indentation of 2 spaces
// While you are most welcome to use whatever convention you please in your own projects,
// I would still recommend following conventions, because then you will already be
// in the habit when entering working life
if (playerCount === 4) {
    startGameOfHearts();
}

// b)
// isStressed bool, hasIceCream bool

if (!isStressed || hasIceCream) {
    markIsHappy();
}

// c)
// sunIsShining bool, isRaining bool, temperature int

if (sunIsShining && !isRaining && temperature >= 20) {
    hitTheBeach();
}

// d)
// seeingSuzy bool, seeingDan bool, isTuesdayNight bool

if (!(seeingSuzy === seeingDan) && isTuesdayNight) {
    arinIsHappy();
} else {
    arinIsSad();
}