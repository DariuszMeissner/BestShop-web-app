function Calculator() {
  this.prices = {
    product: 0.5,
    order: 0.25,
    package: {
      basic: 15,
      professional: 30,
      premium: 60,
    },
    accounting: 35,
    terminal: 5,
    // adding total prices of keys
    totalProduct: 0,
    totalOrder: 0,
    totalPackage: 0,
    totalAccounting: 0,
    totalTerminal: 0,
  };

  this.form = {
    product: document.querySelector("#product"),
    orders: document.querySelector("#orders"),
    package: document.querySelector(".calc__input--select"),
    packageList: document.querySelector(".calc__dropdown"),
    packageItems: document.querySelectorAll(".dropdown__item"),
    accounting: document.querySelector("#accounting"),
    terminal: document.querySelector("#terminal"),
    totalInputs: document.querySelectorAll("input"),
    totalItems: document.querySelectorAll("li"),
  };

  this.summary = {
    product: document.querySelector("#products__summary"),
    orders: document.querySelector("#orders__summary"),
    package: document.querySelector("#package__summary"),
    accounting: document.querySelector("#accounting__summary"),
    terminal: document.querySelector("#terminal__summary"),
    total: document.querySelector("#total__summary"),
  };
}

Calculator.prototype.inputEvents = function (e) {
  const id = e.currentTarget.id;
  const value = e.currentTarget.value;

  const quantityValue = this.form.product.value * this.prices.product;
  const orderValue = this.form.orders.value * this.prices.order;

  if (value == "" && id == "product") {
    this.summary.product.classList.add("d--none");
    this.prices.totalProduct = 0;
  } else if (id == "product") {
    this.summary.product.classList.remove("d--none");
    this.summary.product.children[1].innerText = `${this.form.product.value}  * $${this.prices.product}`;
    this.summary.product.children[2].innerText = `$${quantityValue}`;
    this.prices.totalProduct = quantityValue;
  }
  if (value == "" && id == "orders") {
    this.summary.orders.classList.add("d--none");
    this.prices.totalOrder = 0;
  } else if (id == "orders") {
    this.summary.orders.classList.remove("d--none");
    this.summary.orders.children[1].innerText = `${this.form.orders.value}  *  $${this.prices.order}`;
    this.summary.orders.children[2].innerText = `$${orderValue}`;
    this.prices.totalOrder = orderValue;
  }
};

Calculator.prototype.selectEvents = function (e) {
  const target = e.currentTarget.id;

  this.form.packageList.style.display = "block";

  if (target == "basic") {
    this.form.package.innerText = target;
    this.form.packageList.style.display = "none";
    this.summary.package.classList.remove("d--none");
    //updating prices
    this.prices.totalPackage = this.prices.package.basic;
    this.summary.package.children[1].innerText = target;
    this.summary.package.children[2].innerText = this.prices.totalPackage;
  } else if (target == "professional") {
    this.form.package.innerText = target;
    this.form.packageList.style.display = "none";
    this.summary.package.classList.remove("d--none");
    this.prices.totalPackage = this.prices.package.professional;
    this.summary.package.children[2].innerText = this.prices.totalPackage;
  } else if (target == "premium") {
    this.form.package.innerText = target;
    this.form.packageList.style.display = "none";
    this.summary.package.classList.remove("d--none");
    this.prices.totalPackage = this.prices.package.premium;
    this.summary.package.children[2].innerText = this.prices.package.premium;
  } else if (target == "none") {
    this.form.package.innerText = target;
    this.form.packageList.style.display = "none";
    this.summary.package.classList.add("d--none");
    this.prices.totalPackage = 0;
    this.summary.package.children[2].innerText = 0;
  }
};

Calculator.prototype.checkboxEvents = function (e) {
  const target = e.currentTarget.id;
  const checked = e.currentTarget.checked;

  // handling of accounting checkbox
  if (target == "accounting" && checked) {
    this.summary.accounting.classList.remove("d--none");
    this.summary.accounting.children[1].innerText = `$${this.prices.accounting}`;
    this.summary.accounting.children[1].dataset.price = this.prices.accounting;
    this.prices.totalAccounting = this.prices.accounting;
    this.summary.total.classList.remove("d--none");
  } else if (target == "accounting" && checked === false) {
    this.summary.accounting.classList.add("d--none");
    this.summary.accounting.children[1].innerText = 0;
    this.prices.totalAccounting = 0;
  }
  if (target == "terminal" && checked) {
    this.summary.terminal.classList.remove("d--none");
    this.summary.terminal.children[1].innerText = `$${this.prices.terminal}`;
    this.summary.terminal.children[1].dataset.price = this.prices.terminal;
    this.summary.total.classList.remove("d--none");
    this.prices.totalTerminal = this.prices.terminal;
  } else if (target == "terminal" && checked === false) {
    this.summary.terminal.classList.add("d--none");
    this.summary.terminal.children[1].innerText = 0;
    this.prices.totalTerminal = 0;
  }
};


Calculator.prototype.updateTotal = function () {
  if (this.prices.totalProduct != 0 || this.prices.totalOrder != 0 || this.prices.totalPackage != 0 || this.prices.totalAccounting != 0 || this.prices.totalTerminal != 0) {
    this.summary.total.classList.remove("d--none");
    this.summary.total.firstElementChild.children[1].innerText = this.prices.totalProduct + this.prices.totalOrder + this.prices.totalPackage + this.prices.totalTerminal + this.prices.totalAccounting;
  } else if (this.prices.totalProduct == 0 && this.prices.totalOrder == 0 && this.prices.totalPackage == 0 && this.prices.totalAccounting == 0 && this.prices.totalTerminal == 0) {
    this.summary.total.classList.add("d--none");
    this.summary.total.firstElementChild.children[1].innerText = 0;
  }
};




Calculator.prototype.listenerEvents = function () {

  //inputs of numbers
  this.form.product.addEventListener("input", (e) => this.inputEvents(e));
  this.form.orders.addEventListener("input", (e) => this.inputEvents(e));
  // //select
  this.form.package.addEventListener("click", (e) => this.selectEvents(e));
  this.form.packageItems.forEach((el) => el.addEventListener("click", (e) => this.selectEvents(e)));
  //checkbox
  this.form.accounting.addEventListener("change", (e) => this.checkboxEvents(e));
  this.form.terminal.addEventListener("change", (e) => this.checkboxEvents(e));
  // total updating
  this.form.totalInputs.forEach((el) => el.addEventListener("input", (e) => this.updateTotal(e)));
  this.form.totalInputs.forEach((el) => el.addEventListener("change", (e) => this.updateTotal(e)));
  this.form.totalItems.forEach((el) => el.addEventListener("click", (e) => this.updateTotal(e)));
};

const calc = new Calculator();
calc.listenerEvents();
