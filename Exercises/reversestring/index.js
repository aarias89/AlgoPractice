// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    str.split("").reverse().join('');
}

function reverse(str) {
    function rev(input, output) {
        if (input.length === 0) {
            return output.join('');
        }
        output.push(input[input.length - 1]);
        input.pop();
        return rev(input, output);
    }

    var new_array = [];
    var input = str.split("");
    return rev(input, new_array);
}


module.exports = reverse;

