//1 Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

function changeStyle(NameOfTheSelector) {
    var listOfSelector = document.querySelectorAll(NameOfTheSelector);
    var i;

    for (i = 0; i < listOfSelector.length; i++) {
        listOfSelector[i].style.fontStyle = "italic";
        listOfSelector[i].style.fontWeigth = "bold";
        listOfSelector[i].style.textDecoration = "underline";
    }
}

changeStyle("p");
