import "./sidebar.css";

// Helper Functions
const closeSidebar = (element) => {
    element.classList.remove('active');
}

// Add Click Event for Sidebar Toggles
const sidebarToggle = document.querySelector('[data-sidebar-target]')
sidebarToggle.addEventListener("click", () => {
    const target = document.querySelector("#" + sidebarToggle.dataset.sidebarTarget)
    target.classList.toggle('active')
})

// Add Click Event for closing Sidebars
const backdrops = document.querySelectorAll('.sidebar-backdrop')
for (const backdrop of backdrops) {
    backdrop.addEventListener("click", () => closeSidebar(backdrop.parentElement))
}

const closeButtons = document.querySelectorAll('.sidebar .sidebar-close-btn')
for (const btn of closeButtons) {
    btn.addEventListener("click", () => closeSidebar(btn.parentElement.parentElement))
}

const sidebars = document.querySelectorAll('.sidebar')
window.addEventListener("load", () => {
    sidebars.forEach(e => e.classList.add('transition-visibility'))
})

