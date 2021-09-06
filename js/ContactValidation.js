class ValidateInputs {
  constructor(nameValue, emailValue) {
    this.nameValue = nameValue;
    this.emailValue = emailValue;

    this.lettersRegex = /^[A-Za-ząężźśćó]+$/;
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.form = {
      name: document.querySelector("#name"),
      email: document.querySelector("#email"),
      submit: document.querySelector("#submit__btn"),
    };
  }
}

class FormInputs extends ValidateInputs {
  inputEvents(e) {
    
  }
  submitAction(e) {
    e.preventDefault();
    (this.nameValue.value.match(this.lettersRegex) && this.emailValue.value.match(this.emailRegex) )?console.log('done'):console.log('error');

    
  }
}

class validateListenerEvents extends FormInputs {
  events() {
    this.form.name.addEventListener("change", (e) => this.inputEvents(e));
    this.form.email.addEventListener("change", (e) => this.inputEvents(e));
    this.form.submit.addEventListener("click", (e) => this.submitAction(e));
  }
}

export default validateListenerEvents;
