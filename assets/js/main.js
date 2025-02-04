/*=============== Email JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_sfq9ssd",
      "template_bt6vul2",
      "#contact-form",
      "917enBfQtUfhG5NgP"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Error sending message 😞";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

/*=============== Show Scroll Up ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll-up class to the a tag with the scroll-up class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== Scroll Sections Active Link ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__list a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== Scroll Reveal Animation ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "200px",
  duration: 2500,
  delay: 400,
  // reset: true, // Animation Repeat
});

sr.reveal(`.profile, .contact_form`);
sr.reveal(`.info`, { origin: "left", delay: 800 });
sr.reveal(`.skills`, { origin: "left", delay: 1000 });
sr.reveal(`.about`, { origin: "right", delay: 1200 });
sr.reveal(`.projects_card, .services_card, .experience_card`, {
  interval: 100,
});

// const settingsIcon = document.getElementById("settings-icon");
// const settingsPanel = document.getElementById("settings-panel");
// const applySettingsButton = document.getElementById("apply-settings");
// let selectedHue = null;

// settingsIcon.addEventListener("click", () => {
//   settingsPanel.style.display =
//     settingsPanel.style.display === "none" || settingsPanel.style.display === ""
//       ? "block"
//       : "none";
// });

// document.querySelectorAll(".color-circle").forEach((circle) => {
//   circle.addEventListener("click", (event) => {
//     selectedHue = event.target.getAttribute("data-hue");
//     document
//       .querySelectorAll(".color-circle")
//       .forEach((c) => (c.style.border = "2px solid var(--white-color)"));
//     event.target.style.border = "2px solid var(--first-color)";
//   });
// });

// applySettingsButton.addEventListener("click", () => {
//   if (selectedHue !== null) {
//     document.documentElement.style.setProperty("--hue", selectedHue);
//     document.documentElement.style.setProperty(
//       "--first-color",
//       `hsl(${selectedHue}, 80%, 49%)`
//     );
//     document.documentElement.style.setProperty(
//       "--first-color-alt",
//       `hsl(${selectedHue}, 76%, 45%)`
//     );
//     settingsPanel.style.display = "none";
//   }
// });

const settingsIcon = document.getElementById("settings-icon");
const settingsPanel = document.getElementById("settings-panel");
let selectedHue = null;

settingsIcon.addEventListener("click", () => {
  settingsPanel.style.display =
    settingsPanel.style.display === "none" || settingsPanel.style.display === ""
      ? "block"
      : "none";
});

document.querySelectorAll(".color-circle").forEach((circle) => {
  circle.addEventListener("click", (event) => {
    selectedHue = event.target.getAttribute("data-hue");
    document
      .querySelectorAll(".color-circle")
      .forEach((c) => (c.style.border = "2px solid var(--white-color)"));
    event.target.style.border = "2px solid var(--first-color)";

    // Apply the selected color immediately
    if (selectedHue !== null) {
      document.documentElement.style.setProperty("--hue", selectedHue);
      document.documentElement.style.setProperty(
        "--first-color",
        `hsl(${selectedHue}, 80%, 49%)`
      );
      document.documentElement.style.setProperty(
        "--first-color-alt",
        `hsl(${selectedHue}, 76%, 45%)`
      );
    }
  });
});
