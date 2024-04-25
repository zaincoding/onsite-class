function prim(number, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (number <= 2) {
        return (number === 2);
    }
    else if (number % divisor === 0) {
        return false;
    }
    else if (divisor * divisor > number) {
        return true + 'I am true';
    }
    return prim(number, divisor + 1);
}
console.log(prim(5));
