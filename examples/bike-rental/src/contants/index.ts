export const PRICES_OF_BIKES = {
  electrical: {
    days: 0,
    priceByDay: 0,
    /* Price is equal to days * price by day */
    getPrice: function () {
      return this.priceByDay * this.days;
    },
  },
  normal: {
    days: 0,
    priceByDay: 0,
    /* I decided because in the requirements not especified it when the days to rent are less than 3
        - If days to rent are mayor of 3 days, the first 3 days is the price by day
        - If days to rent are less of 4 Price is equal to days * price by day
         */
    getPrice: function () {
      const price =
        this.days >= 4
          ? this.priceByDay + this.priceByDay * (this.days - 3)
          : this.days * this.priceByDay;
      return price;
    },
  },
  old: {
    days: 0,
    priceByDay: 0,
    /* I decided because in the requirements not especified it when the days to rent are less than 5
        - If days to rent are mayor of 5 days, the first 3 days is the price by day
        - If days to rent are less of 6 Price is equal to days * price by day
         */
    getPrice: function () {
      const price =
        this.days >= 5
          ? this.priceByDay + this.priceByDay * (this.days - 5)
          : this.days * this.priceByDay;
      return price;
    },
  },
};
