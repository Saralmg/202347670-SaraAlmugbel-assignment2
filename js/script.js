
/* ======================================
   Assignment 2 - Interactive Features
   Sara Almugbel
   ====================================== */

// FEATURE 1: DARK / LIGHT MODE

const themeButton = document.getElementById("theme-toggle");

// Load the previously saved theme
try {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
} catch (error) {
  console.warn("Could not load saved theme:", error);
}

// Update the button label
function updateThemeButton() {
  const isDark = document.body.classList.contains("dark");

  themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

// Switch theme when clicked
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  updateThemeButton();

  const selectedTheme = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  // Save preference for future visits
  try {
    localStorage.setItem("portfolio-theme", selectedTheme);
  } catch (error) {
    console.warn("Could not save theme preference:", error);
  }
});


// FEATURE 2: PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const projectStatus = document.getElementById("projects-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleProjects = 0;

    projectCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;

      if (matches) {
        visibleProjects++;
      }
    });

    // Highlight the selected filter
    filterButtons.forEach((filter) => {
      const isSelected = filter === button;

      filter.classList.toggle("active", isSelected);
      filter.setAttribute("aria-pressed", String(isSelected));
    });

    // Give the visitor feedback
    if (visibleProjects === 0) {
      projectStatus.textContent =
        "No projects found. Please select another category.";
    } else {
      projectStatus.textContent =
        `Showing ${visibleProjects} project(s).`;
    }
  });
});


// FEATURE 3: CONTACT FORM VALIDATION

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
  // Prevent the page from reloading
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check for empty fields
  if (!name || !email || !message) {
    formMessage.className = "error";
    formMessage.textContent =
      "Please fill in all fields before submitting.";
    return;
  }

  // Check email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    formMessage.className = "error";
    formMessage.textContent =
      "Please enter a valid email address.";
    return;
  }

  // Display confirmation
  formMessage.className = "success";
  formMessage.textContent =
    `Thank you, ${name}! Your message was validated successfully. ` +
    "This demonstration does not send emails.";

  // Clear the form
  contactForm.reset();
});
