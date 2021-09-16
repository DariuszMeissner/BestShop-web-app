import Calculator from './DataCalc';


class Total extends Calculator {
    showTotal(id, value) {
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

export default Total;