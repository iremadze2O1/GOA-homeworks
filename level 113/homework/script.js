class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get initials() {
      return `${this.firstName?.charAt(0) ?? ''}${this.lastName?.charAt(0) ?? ''}`.toUpperCase();
    }
  
    get ageInMonths() {
      return this.age ? this.age * 12 : null;
    }
  
    get isRetired() {
      return this.age >= 60;
    }
}
  
class Product {
    constructor(price, discount = 0) {
      this.price = price;
      this.discount = discount;
    }
  
    get formattedPrice() {
      return `$${this.price.toFixed(2)}`;
    }
  
    get discountPrice() {
      return `$${(this.price - this.discount).toFixed(2)}`;
    }
}