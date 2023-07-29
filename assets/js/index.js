// adapted bootstrap stock modal: https://getbootstrap.com/docs/5.3/components/modal/#how-it-works

const emailModal = document.getElementById("emailModal");

if (emailModal) {
  emailModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = "Jordan";

    const modalTitle = emailModal.querySelector(".modal-title");
    const modalBodyInput = emailModal.querySelector(".modal-body input");

    modalTitle.textContent = `Send ${recipient} an email`;
    // modalBodyInput.value = recipient
  });
}
