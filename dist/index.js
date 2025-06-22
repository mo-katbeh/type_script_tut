"use strict";
let sales = 20099999;
let level;
let queue = [1, 3, 4, 5, 6, 7, 8, 8];
queue.forEach(element => {
    console.log(element.toString);
});
let user = [1, 'mm'];
function render(resposne) {
    console.log(resposne);
}
var Size;
(function (Size) {
    Size[Size["Small"] = 3] = "Small";
    Size[Size["Medium"] = 4] = "Medium";
    Size[Size["Large"] = 5] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 50000)
        return income * 1.2;
    return income;
}
calculateTax(22);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map