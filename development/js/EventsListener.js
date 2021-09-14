import FormInputs from "./FormInputs";


class ListenerEvents extends FormInputs {
    events() {
      // handling inputs
      this.form.product.addEventListener("input", (e) => this.inputEvents(e));
      this.form.orders.addEventListener("input", (e) => this.inputEvents(e));
      // handling checkbox eventlistener
      this.form.accounting.addEventListener("change", (e) => this.checkboxEvents(e));
      this.form.terminal.addEventListener("change", (e) => this.checkboxEvents(e));
      // handling select eventlistener
      this.form.packageItems.forEach((el) => el.addEventListener("click", (e) => this.selectEvents(e)));
      this.form.package.addEventListener("click", (e) => this.dropdownEvents(e));
    }
}

export default ListenerEvents;