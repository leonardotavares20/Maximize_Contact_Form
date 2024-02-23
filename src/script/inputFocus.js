class FocusInput {
  constructor(selector) {
    this.inputs = document.querySelectorAll(selector);
  }

  focusInputs() {
    this.inputs.forEach((input) => {
      const label = input.previousElementSibling;
      input.addEventListener("focus", (e) => {
        label.classList.add("form-contact__label--active");
      });

      input.addEventListener("blur", (e) => {
        if (!input.value) {
          label.classList.remove("form-contact__label--active");
        }
      });
    });
  }
}

const focusedInput = new FocusInput('input[type="text"], input[type="email"]');

focusedInput.focusInputs();
