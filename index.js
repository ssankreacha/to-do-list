const item = document.createElement("li");
var list = document.querySelector("ul");
var button = document.querySelector("button");
var text = document.querySelector("text")

button.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = "Task"; // Add some text to the new item
    list.appendChild(newItem);
    
    // Create a delete button for the new item
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    newItem.appendChild(delButton);

    // Add event listener to cross out the item when clicked
    newItem.addEventListener("click", function() {
        newItem.style.textDecoration = "line-through"; // Cross out the item
    });

    // Add event listener to the delete button to remove the item
    delButton.addEventListener("click", function() {
        list.removeChild(newItem); // Remove the item from the list
    });
});
