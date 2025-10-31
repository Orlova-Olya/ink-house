let mixins = {
  data() {
    return {
      pluralize(number, label1, label2, label3) {
        //"месяц", "месяца", "месяцев"
        if (number % 10 == 1 && number % 100 != 11) {
          return label1
        }
        if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
          return label2
        }
        return label3
      }
    }
  }
}
export default mixins
