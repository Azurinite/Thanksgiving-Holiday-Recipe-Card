/* Dark Mode Toggle */
function enableDarkMode() {
    const body = document.body;
    const ovenImage = document.querySelector('.ovenImg')
    const clockImage = document.querySelector('.clockImg')
    const plateImage = document.querySelector('.plateImg')
    
    const darkModeActive = body.classList.contains('darkMode')

    if (darkModeActive) {
        body.classList.toggle("darkMode", false);
        ovenImage.src = "images/lightModeIcons/oven.png"
        clockImage.src = "images/lightModeIcons/clock.png"
        plateImage.src = "images/lightModeIcons/plate.png"
    } else {
        body.classList.toggle("darkMode", true);
        ovenImage.src = "images/darkModeIcons/oven.png"
        clockImage.src = "images/darkModeIcons/clock.png"
        plateImage.src = "images/darkModeIcons/plate.png"
    }
}
const darkModeSwitch = document.querySelector('.darkModeInput');
darkModeSwitch.addEventListener("click", enableDarkMode)



/* Read More on phone */
var readMoreButton = document.querySelector('.readMore')

function expandText() {
    var wholeText = document.querySelector('.introductoryParagraph p')
    var dots = document.querySelector(".dots");
    var moreText = document.querySelector(".more");

    if (dots.style.display === "none") {
        wholeText.style.maskImage = "linear-gradient(to bottom, transparent, black 0%, black 20%, transparent)";
        dots.style.display = "inline";
        readMoreButton.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        wholeText.style.maskImage = "linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)";
        dots.style.display = "none";
        readMoreButton.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

readMoreButton.addEventListener("click", expandText)