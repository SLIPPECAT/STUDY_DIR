function main() {

    // Step 1. Initialize HTML elements
    const userInput = document.getElementById("user-input")
    const searchBtn = document.getElementById("search-btb")
    const dropdownBox = document.getElementById("dropdown-box")
    const dropdownList = document.getElementById("dropdown-list")
    const dropdownItemTemplate = document.getElementById("dropdown-item-template")

    // Step 2. Initialize search item candidates and variables
    const items = ["google", "apple", "microsoft",];
    let resultCandidates = [];
    let currentFocusedCandidateIndex = null;

    // Step 3. Write functions to update above variables and UI
    function updateCandidates(text) {
        resultCandidates = [];
        currentFocusedCandidateIndex = null;

        if (text.length <= 0) {
            return;
        }

        for (let index = 0; index < items.length; index++) {
            const candidate = items[index];
            if (candidate.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
                resultCandidates.push(candidate);
            }
        }
    }

    function updateDropdownItemsUI() {
        dropdownList.innerHTML = ""

        if (resultCandidates.length <= 0) {
            return;
        }

        for (let index = 0; index < resultCandidates.length; index++) {
            const candidate = resultCandidates[index];

            const clonedItem = document.importNode(
                dropdownItemTemplate.content,
                true
            );
            const listItem = clonedItem.querySelector(".dropdown-item");
            listItem.innerText = candidate;
            if (currentFocusedCandidateIndex === index) {
                listItem.style.backgroundColor = "pink";
            }
            dropdownList.appendChild(listItem);
        }
    }

    // Step 4. Register event listener when user input updates
    userInput.addEventListener("input", (event) => {
        const text = event.target.value;

        updateCandidates(text);
        updateDropdownItemsUI();
    })

    // Step 5. Register event listener when arrow up and down, and enter key pressed
    userInput.addEventListener("keyup", (event) => {
        const key = event.key;
        if (key === "ArrowDown"){
            if (currentFocusedCandidateIndex === null && resultCandidates.length > 0){
                currentFocusedCandidateIndex = 0;
            } else if (currentFocusedCandidateIndex < resultCandidates.length - 1){
                currentFocusedCandidateIndex++;
            }
        } else if (key === "ArrowUp"){
            if (currentFocusedCandidateIndex > 0){
                currentFocusedCandidateIndex--;
            }
        } else if (key === "Enter") {
            if (currentFocusedCandidateIndex === null){
                // TODO: Submit user text to backend
                return;
            }
            const newText = resultCandidates[currentFocusedCandidateIndex];
            event.target.value = newText;
            updateCandidates(newText);
        }
            updateDropdownItemsUI();

    })
}

main();