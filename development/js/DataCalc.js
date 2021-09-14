class dataCalculator {
    constructor() {
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
  }
  

export default dataCalculator;
  
  
  
  