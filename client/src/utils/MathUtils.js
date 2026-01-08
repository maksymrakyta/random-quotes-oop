class MathUtils {
  static generateRandomInt(maxInt) {
    return Math.floor(Math.random() * maxInt.length);
  }
}
export default MathUtils;
