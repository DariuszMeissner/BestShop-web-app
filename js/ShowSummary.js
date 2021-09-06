import Total from "./ShowTotal";

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

export default Summary;