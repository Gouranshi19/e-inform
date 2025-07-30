
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});
const coursesContainer = document.getElementById("coursesList");


function loadCourses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    coursesContainer.innerHTML = "";

    courses.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${course.name}</h3><p>${course.desc}</p>`;
        coursesContainer.appendChild(div);
    });
}

loadCourses();
