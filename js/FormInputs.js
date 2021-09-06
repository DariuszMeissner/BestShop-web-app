import Summary from "./ShowSummary";

class FormInputs extends Summary {
    inputEvents(e) {
      this.id = e.currentTarget.id;
      this.value = e.currentTarget.value;
      this.priceTotal = this.value * this.prices[this.id];
  
      this.show(this.id, this.value, this.priceTotal);
    }
  
    checkboxEvents(e) {
      this.id = e.currentTarget.id;
      this.value = e.currentTarget.checked;
      this.priceTotal = this.value * this.prices[this.id];
  
      this.show(this.id, this.value, this.priceTotal);
    }
  
    selectEvents(e) {
      this.id = "package";
      this.value = e.currentTarget.innerText;
      this.priceTotal = Number(e.currentTarget.dataset.value);
  
      this.form.packageList.style.display = "none";
      this.form.package.style.color = "black";
      this.form.package.innerText = this.value;
  
      this.show(this.id, this.value, this.priceTotal);
    }
    dropdownEvents() {
      if (this.form.packageList.style.display == "block") {
        this.form.packageList.style.display = "none";
      } else {
        this.form.packageList.style.display = "block";
      }
    }
}

export default FormInputs;