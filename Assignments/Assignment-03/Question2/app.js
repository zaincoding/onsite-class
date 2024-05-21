var car = {
    engine: {
        hoursePower: "1200cc",
    },
    getHoursePower: function () {
        return "".concat(this.engine.hoursePower);
    }
};
console.log(car.getHoursePower());
