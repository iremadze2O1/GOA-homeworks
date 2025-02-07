class Thermometer {
    constructor(celsius) {
      this._celsius = celsius;
    }
  
    get temperature() {
      return (this._celsius * 9/5) + 32;
    }
  
    set temperature(value) {
      this._celsius = value;
    }
}
  
class Student {
    constructor(score) {
      this._score = score;
    }
  
    get grade() {
      if (this._score >= 90) return 'A';
      if (this._score >= 80) return 'B';
      if (this._score >= 70) return 'C';
      if (this._score >= 60) return 'D';
      return 'F';
    }
  
    set score(value) {
      this._score = Math.max(0, Math.min(100, value));
    }
  }
  
class Password {
    constructor(password) {
      this._encrypted = this._encrypt(password);
    }
  
    get password() {
      return "*****";
    }
  
    set password(value) {
      this._encrypted = this._encrypt(value);
    }
  
    _encrypt(value) {
      return btoa(value);
    }
}