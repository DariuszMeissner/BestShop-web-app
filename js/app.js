class Calculator {
  constructor() {

    this.prices = {
      product: 0.5,
      orders: 0.25,
      package: '',
      accounting: 35,
      terminal: 5,
    };
    this.total = {
      product: 0,
      orders: 0,
      package: 0,
      accounting: 0,
      terminal: 0,
    };
    this.form = {
      product: document.querySelector("#product"),
      orders: document.querySelector("#orders"),
      package: document.querySelector(".calc__input--select"),
      packageList: document.querySelector(".calc__dropdown"),
      packageItems: document.querySelectorAll(".dropdown__item"),
      accounting: document.querySelector("#accounting"),
      terminal: document.querySelector("#terminal"),
    };
  
    this.summary = {
      product: document.querySelector("#products__summary"),
      orders: document.querySelector("#orders__summary"),
      package: document.querySelector("#package__summary"),
      basic: document.querySelector("#package__summary"),
      professional: document.querySelector("#package__summary"),
      premium: document.querySelector("#package__summary"),
      accounting: document.querySelector("#accounting__summary"),
      terminal: document.querySelector("#terminal__summary"),
      total: document.querySelector("#total__summary"),
    };
  }
}


class Total extends Calculator {
  showTotal(id,value) {

    this.totals = this.total.product + this.total.orders + this.total.accounting + this.total.terminal + this.total.package;
    
    if (this.totals != 0) {
      this.total[id] = value;
      this.summary.total.classList.remove("d--none");
      this.summary.total.firstElementChild.lastElementChild.innerText = `$${this.totals}`;
    } else {
      this.summary.total.classList.add("d--none");
    }
  }
}
class Summary extends Total {

  show(id, value, priceTotal) {
    if (value == 0 || value == false || value == "none") {
      this.summary[id].classList.add("d--none");
      this.total[id] = 0;
      this.showTotal(id, priceTotal);
    } else if (value == "Basic" || value == "Professional" || value == "Premium") {
      this.summary[id].classList.remove("d--none");
      this.summary[id].children[1].innerText = value;
      this.summary[id].lastElementChild.innerText = `$${priceTotal}`;
      this.total[id] = priceTotal;
      this.showTotal(id, priceTotal);
    } else {
      this.summary[id].classList.remove("d--none");
      this.summary[id].children[1].innerText = `${value} * $${this.prices[id]}`;
      this.summary[id].lastElementChild.innerText = `$${priceTotal}`;
      this.total[id] = priceTotal;
      this.showTotal(id, priceTotal);
    }
  }
}

class FormInputs extends Summary {

  inputEvents(e) {
    this.id = e.currentTarget.id;
    this.value = e.currentTarget.value;
    this.priceTotal = this.value * this.prices[this.id];

    this.show(this.id,this.value,this.priceTotal);
  }

  checkboxEvents(e) {
    this.id = e.currentTarget.id;
    this.value = e.currentTarget.checked;
    this.priceTotal = this.value * this.prices[this.id];
    
    this.show(this.id,this.value,this.priceTotal);
  }

  selectEvents(e) {
    this.id = 'package';
    this.value = e.currentTarget.innerText;
    this.priceTotal = Number(e.currentTarget.dataset.value);

    this.form.packageList.style.display = "none";
    this.form.package.style.color = "black";
    this.form.package.innerText = this.value;
    
    this.show(this.id,this.value,this.priceTotal);
  }
  dropdownEvents() {
    if (this.form.packageList.style.display == "block") {
      this.form.packageList.style.display = "none";
    } else {
      this.form.packageList.style.display = "block";
    }
  }
}

class ListenerEvents extends FormInputs {
  
   events() {
     // handling inputs
    this.form.product.addEventListener("input", (e) => this.inputEvents(e));
    this.form.orders.addEventListener("input", (e) => this.inputEvents(e));
    // handling checkbox eventlistener
    this.form.accounting.addEventListener("change", (e) => this.checkboxEvents(e));
    this.form.terminal.addEventListener("change", (e) => this.checkboxEvents(e));
    // handling select eventlistener
    this.form.packageItems.forEach( (el) => el.addEventListener("click", (e) => this.selectEvents(e)));
    this.form.package.addEventListener("click", (e) => this.dropdownEvents(e));
   }
};


const calc = new ListenerEvents();
calc.events();