/*=============== Email JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_ltja4u7",
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

/*=============== Scroll Sections Active Link ===============*/

/*=============== Scroll Reveal Animation ===============*/
