/*=============== Active Link =============== */

/*===============Contact form ========== */

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    //show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    // serviceID - templeteID - #form -publivkey
    emailjs
      .sendForm(
        "service_j1y9bed",
        "template_x433sga",
        "#contact-form",
        "WKNr7pm83xK7xhnf0"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent ✔️";

          //remove message after 5 sec
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG.....", error);
        }
      );

    //clear input fields

    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
