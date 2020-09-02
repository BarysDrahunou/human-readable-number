module.exports = function toReadable(number) {
    if (number===0) return 'zero';
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const bigNumbers = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const parts = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = [];
    if (number >=100) {
        result.push(numbers[Math.floor(number/100) - 1]);
        result.push("hundred");
        number=number%100;
    }
    if (number > 0) {
        if (number > 19) {
            result.push(bigNumbers[Math.floor(number/10) - 1]);
            if (number%10 > 0) {
                result.push(numbers[number%10 - 1]);
            }
        } else {
            if (number>9) {
                result.push(parts[number - 10])
            } else {
                result.push(numbers[number - 1])
            }
        }
    }
    return result.join(" ");
}
