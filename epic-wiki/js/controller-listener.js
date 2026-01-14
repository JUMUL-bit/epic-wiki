// 🌙 Dark Mode
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");

// Listen for controller commands
window.addEventListener("storage", () => {
  // Page Navigation
  if (localStorage.getItem("controller-page")) {
    const target = localStorage.getItem("controller-page");
    if (window.location.href.indexOf(target) === -1) {
      window.location.href = target;
    }
  }

  // Dark Mode
  if (localStorage.getItem("controller-dark") === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Update elements by ID
  const elements = JSON.parse(localStorage.getItem("controller-elements") || "{}");
  for (let id in elements) {
    const el = document.getElementById(id);
    if (el) el.innerText = elements[id];
  }

  // Show / Hide sections
  const sections = JSON.parse(localStorage.getItem("controller-show") || "{}");
  for (let id in sections) {
    const el = document.getElementById(id);
    if (el) el.style.display = sections[id] ? "block" : "none";
  }
});
