const icon = document.getElementById("icon");
const counter = document.getElementById("counter");
const textarea = document.getElementById("textarea");

// textarea.addEventListener("change", updateCounter());
textarea.addEventListener("input", updateCounter);

counter.addEventListener("click", () => {
    counter.dataset.mode = counter.dataset.mode == "word" ? "char" : "word";
    updateCounter();
})

function updateCounter() {
    const text = textarea.value;
    let counterMode = counter.dataset.mode;
    let wordCount = text.split(/\s+/).length;
    let charCount = text.length;
    console.log(wordCount, charCount);
    if (counterMode == "word") {
        counter.innerText = `${wordCount} words`;
    }
    else {
        counter.innerText = `${charCount} characters`;
    }
}
