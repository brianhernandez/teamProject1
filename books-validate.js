// Get the site search field, site search button and book search fields and
// save them to variables
var siteSearchInputElement = document.querySelector(".siteSearchInput");
var bookSearchInputElement = document.getElementById("overlaySearchBox");
var searchInputButton = document.querySelector(".dem");
// Initialize an object that will save the user's search history
var userSearchHistory = {};
// Iterator for site search history results
var k = 0;
// Iterator for book search history results
var j = 0;
// Add a click event listener to the site search button
searchInputButton.addEventListener("click", function() {
  // Get error message span element for site search field and save to a variable
  var errorMessage = document.querySelector(".siteSearchError");
  // Set the custom validity message of the site search field as the result of
  // the checkFieldValidity function
  siteSearchInputElement.setCustomValidity(checkFieldValidity(siteSearchInputElement));
  // Save the contents of the error message span as the result of the
  // checkFieldValidity function
  errorMessage.innerHTML = checkFieldValidity(siteSearchInputElement);
  // If the checkFieldValidity function returns an empty string...
  if (checkFieldValidity(siteSearchInputElement) === "") {
    // ...set the error message display to 'none' as no error is generated
    errorMessage.style.display = "none";
    // Increase the site search history interator by 1
    k++;
    // Save the recent successful site search in userSearchHistory object
    userSearchHistory["Site Search " + k] = siteSearchInputElement.value;
    // Print the latest version of the userSearchHistory object
    console.log(userSearchHistory);
    // ...else...
  } else {
    // ...set the display to 'inline-block' to show the error message
    errorMessage.style.display = "inline-block";
  }
});
// Add a blur event listener to the book search input element
bookSearchInputElement.addEventListener("blur", function() {
  // Get error message span element for book search field and save to a variable
  var errorMessage = document.querySelector(".bookSearchError");
  // Set the custom validity message of the book search field as the result of
  // the checkFieldValidity function
  bookSearchInputElement.setCustomValidity(checkFieldValidity(bookSearchInputElement));
  // Save the contents of the error message span as the result of the
  // checkFieldValidity function
  errorMessage.innerHTML = checkFieldValidity(bookSearchInputElement);
  // If the checkFieldValidity function returns an empty string...
  if (checkFieldValidity(bookSearchInputElement) === "") {
    // ...set the error message display to 'none' as no error is generated
    errorMessage.style.display = "none";
    // Increase the book search history interator by 1
    j++;
    // Save the recent successful book search in userSearchHistory object
    userSearchHistory["Book Search " + j] = bookSearchInputElement.value;
    // Print the latest version of the userSearchHistory object
    console.log(userSearchHistory);
    // ...else...
  } else {
    // ...set the display to 'inline-block' to show the error message
    errorMessage.style.display = "inline-block";
  }
});
// The checkFieldValidity fuctions checks if the passed in text input element
// is empty, has less than 2 strings or contains special characters
function checkFieldValidity(inputFieldElement) {
  // Get the string value of the passed in text input element
  var inputValue = inputFieldElement.value;
  // Set the customValidityMessage variable to an empty string
  var customValidityMessage = "";
  // Use the isEmpty function from the validator file to see if the inputValue
  // is empty...
  if (validator.isEmpty(inputValue)) {
    // ...set the customValidityMessage with an appropriate custom message
    customValidityMessage = "Please provide some search parameter.";
    // ...else if the input is not alphanumeric...
  } else if (!validator.isAlphanumeric(inputValue)){
    // ...set the customValidityMessage with an appropriate custom message
    customValidityMessage = "You shold only need to search using alphanumeric "+
    "characters and not special characters.";
    // ...else if the input is less than 2 characters long...
  } else if (!validator.isOfLength(inputValue, 2)) {
    // ...set the customValidityMessage with an appropriate custom message
    customValidityMessage = "Please provide at least 2 characters to do an " +
    "effective search of book titles.";
    // ...else set the customValidityMessage to an empty string
  }
  // Return the resulting string for customizing the corresponding error message
  return customValidityMessage;
}
