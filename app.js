function revealMadlib() {
    const nounInput = document.getElementById('noun-input');
    const noun = nounInput.value;
    const nounSpan = document.getElementById('noun');
    nounSpan.textContent = noun;

    const verbInput = document.getElementById('verb-input');
    const verb = verbInput.value;
    const verbSpan = document.getElementById('verb');
    verbSpan.textContent = verb;

    const adjInput = document.getElementById('adj-input');
    const adj = adjInput.value;
    const adjSpan = document.getElementById('adj');
    adjSpan.textContent = adj;

    const showStory = document.getElementById('story');
    showStory.classList.remove("hidden");
}