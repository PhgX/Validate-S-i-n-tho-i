var ValidatePhoneNumber = /** @class */ (function () {
    function ValidatePhoneNumber() {
        this.validate_Name_class = /^\([0-9]{2}\)\-\(0+[0-9]{9}\)$/;
    }
    ValidatePhoneNumber.prototype.validate = function (value) {
        return this.validate_Name_class.test(value);
    };
    return ValidatePhoneNumber;
}());
var phoneNumber = new ValidatePhoneNumber();
var validPhoneNumber = ['(84)-(0978489648)'];
var invalidPhoneNumber = ['(a8)-(22222222)', '(ab2)-(81923712983)'];
for (var _i = 0, validPhoneNumber_1 = validPhoneNumber; _i < validPhoneNumber_1.length; _i++) {
    var value = validPhoneNumber_1[_i];
    var isvalid = phoneNumber.validate(value);
    console.log('Số điện thoại: ' + value + 'so với biểu mẫu là ' + isvalid);
}
for (var _a = 0, invalidPhoneNumber_1 = invalidPhoneNumber; _a < invalidPhoneNumber_1.length; _a++) {
    var value = invalidPhoneNumber_1[_a];
    var isvalid = phoneNumber.validate(value);
    console.log('Số điện thoại: ' + value + 'so với biểu mẫu là ' + isvalid);
}
