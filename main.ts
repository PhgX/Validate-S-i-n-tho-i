class ValidatePhoneNumber {
    private validate_Name_class : RegExp = /^\([0-9]{2}\)\-\(0+[0-9]{9}\)$/;

    public validate(value: string): boolean {
        return this.validate_Name_class.test(value)
    }
}

let phoneNumber = new ValidatePhoneNumber();
let validPhoneNumber : string [] = ['(84)-(0978489648)'];
let invalidPhoneNumber : string[] = ['(a8)-(22222222)', '(ab2)-(81923712983)'];

for(let value of validPhoneNumber){
    let isvalid : boolean = phoneNumber.validate(value);
    console.log('Số điện thoại: ' + value + 'so với biểu mẫu là ' + isvalid)
    
}

for(let value of invalidPhoneNumber){
    let isvalid : boolean = phoneNumber.validate(value);
    console.log('Số điện thoại: ' + value + 'so với biểu mẫu là ' + isvalid)
    
}
