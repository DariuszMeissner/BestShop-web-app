function Calculator() {
  this.prices = {
    product: 0.5,
    orders: 0.25,
    package: "",
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

Calculator.prototype.showSummary = function (id, value, priceTotal) {
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
};

Calculator.prototype.showTotal = function (id, priceTotal) {
  let total = this.total.product + this.total.orders + this.total.accounting + this.total.terminal + this.total.package;

  if (total != 0) {
    this.total[id] = priceTotal;
    this.summary.total.classList.remove("d--none");
    this.summary.total.firstElementChild.lastElementChild.innerText = `$${total}`;
  } else {
    this.summary.total.classList.add("d--none");
  }
};

Calculator.prototype.inputEvents = function (e) {
  const id = e.currentTarget.id;
  const value = e.currentTarget.value;
  const priceTotal = value * this.prices[id];

  this.showSummary(id, value, priceTotal);
};

Calculator.prototype.checkboxEvents = function (e) {
  const id = e.currentTarget.id;
  const value = e.currentTarget.checked;
  const priceTotal = value * this.prices[id];

  this.showSummary(id, value, priceTotal);
};

Calculator.prototype.selectEvents = function (e) {
  const id = "package";
  const value = e.currentTarget.innerText;
  const priceTotal = Number(e.currentTarget.dataset.value);

  this.form.packageList.style.display = "none";
  this.form.package.style.color = "black";
  this.form.package.innerText = value;

  this.showSummary(id, value, priceTotal);
};

Calculator.prototype.selectDropdown = function () {
  if (this.form.packageList.style.display == "block") {
    this.form.packageList.style.display = "none";
  } else {
    this.form.packageList.style.display = "block";
  }
};

Calculator.prototype.listenerEvents = function () {
  //inputs of numbers
  this.form.product.addEventListener("input", (e) => this.inputEvents(e));
  this.form.orders.addEventListener("input", (e) => this.inputEvents(e));
  //checkbox
  this.form.accounting.addEventListener("change", (e) => this.checkboxEvents(e));
  this.form.terminal.addEventListener("change", (e) => this.checkboxEvents(e));
  // //select
  this.form.packageItems.forEach((el) => el.addEventListener("click", (e) => this.selectEvents(e)));
  this.form.package.addEventListener("click", (e) => this.selectDropdown(e));
};

const calc = new Calculator();
calc.listenerEvents();
