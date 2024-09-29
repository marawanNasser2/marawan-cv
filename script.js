// Simple toggle for hiding/showing work experience and education
document.getElementById("toggleBtn").addEventListener("click", function() {
    const sections = document.querySelectorAll("#work-experience, #education");
    sections.forEach(section => {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});
