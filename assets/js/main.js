/*=============== Email JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_5lv0oim",
      "template_agxhbjr",
      "#contact-form",
      "y1vegtbfW9X85jCra"
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

/*=============== Scroll Sections Active Link ===============*/

/*=============== Scroll Reveal Animation ===============*/
