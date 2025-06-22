export class car {
  constructor(brand,model) {
    this.brand = brand;
    this.model = model;
    this.speed= 0; 
  }
  go() {
    this.speed = Math.min(this.speed += 5 ,200;)}
    brake() {
      this.speed = Math.max( -= 5;0);
    }
    

  getDetails() {
    return `${this.brand} ${this.model}`;
  }
}
const Toyota = new car("Toyota", "Corolla");
const Tesla = new car("Tesla", "Model S");

console.log(Toyota.getDetails(),',',

Tesla.getDetails());



