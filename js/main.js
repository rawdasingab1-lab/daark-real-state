const navList = document.getElementById("navList");
const meunBtn = document.getElementById("meunBtn");

meunBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navList.classList.toggle("active");
});
