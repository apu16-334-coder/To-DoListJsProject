const ul = document.querySelector("ul")
const inputField = document.querySelector("input")

document.querySelector("form").addEventListener("submit", addingLists)

// Adding List function to add shoping list to gui
function addingLists() {
    event.preventDefault()
    // Checking input field is not empty
    if (inputField.value !== "") {
        // Adding List to
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = 'Delete';
        li.textContent = inputField.value;
        li.appendChild(deleteBtn)
        ul.appendChild(li);
        // Make ready Input Field for another input
        inputField.value = "";
        inputField.focus();
    }
}

ul.addEventListener("click", deleteList);

function deleteList() {
    const parent = event.target.parentNode
    ul.removeChild(parent);
}