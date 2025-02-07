class MathHelper {
    static PI = 3.141592653589793;
  
    static power(base, exp) {
      return base ** exp;
    }
  
    static sqrt(n) {
      return Math.sqrt(n);
    }
}
  
class RandomHelper {
    static CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    static randomChar() {
      return this.CHAR_SET[Math.floor(Math.random() * this.CHAR_SET.length)];
    }
}
  
class TimeHelper {
    static CREATION_TIME = Date.now();
  
    static formatMillis(ms) {
      const date = new Date(ms);
      return date.toISOString().replace("T", " ").split(".")[0];
    }
}