document.getElementById("courseForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("courseName").value;
    const desc = document.getElementById("courseDesc").value;

    // Get existing data
    let courses = JSON.parse(localStorage.getItem("courses")) || [];

    // Add new course
    courses.push({ name, desc });

    // Save to localStorage
    localStorage.setItem("courses", JSON.stringify(courses));

    alert("Course added successfully!");
    this.reset();
});
