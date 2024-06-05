document.addEventListener("DOMContentLoaded", function () {
    let currentParagraph = 1;
    const totalParagraphs = 7;

    function showNextParagraph() {
        // Hide the current paragraph
        document.getElementById(`paragraph-${currentParagraph}`).style.display = 'none';

        // Move to the next paragraph
        currentParagraph = (currentParagraph % totalParagraphs) + 1;

        // Show the next paragraph
        document.getElementById(`paragraph-${currentParagraph}`).style.display = 'block';
    }

    // Set interval to change paragraph every 2 minutes (120000 milliseconds)
    setInterval(showNextParagraph, 60000);

    // Initial call to show the first paragraph
    showNextParagraph();
});
