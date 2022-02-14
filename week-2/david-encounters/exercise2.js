//2 Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.
// Exercise 2
function findElements(NameOfTheClass) {
    var newList = [];
    var listOfClass = document.getElementsByClassName(NameOfTheClass);
    {
        newList.push(listOfClass);
    }
    return newList;
}

findElements("page-wrapper");
