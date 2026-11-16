function searchSubjects() {
    const input = document.getElementById("searchInput");
    const searchValue = input.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".subject-card");
    let found = 0;

    cards.forEach(card => {
        const subject = card.textContent.toLowerCase();

        if (subject.includes(searchValue)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        alert("No matching subject found.");
    }
}

document.getElementById("searchInput")
    .addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchSubjects();
        }
    });
