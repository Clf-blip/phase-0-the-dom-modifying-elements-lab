// Write your code here!
// Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign it the id "victory"
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "Cliff Jonathan is the champion";

// Append the new header to the document body
document.body.appendChild(newHeader);
