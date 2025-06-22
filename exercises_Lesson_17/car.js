export class car {
  constructor(brand,model) {
    this.brand = brand;
    this.model = model;
  }

  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}
const Toyota = new car("Toyota", "Corolla");
const Tesla = new car("Tesla", "Model S");

console.log(Toyota.getDetails(),',',

Tesla.getDetails());

