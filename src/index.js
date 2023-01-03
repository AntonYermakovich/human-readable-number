module.exports = function toReadable(n) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const nums = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (n.toString().length === 1) {
        return numbers[n]
    }

    if (n.toString().length === 2) {
        if (nums[n]) {
            return nums[n]
        }

        let firstnum = n.toString().slice(0, 1) + 0
        let lastnum = n.toString().slice(1, 2)

        return nums[firstnum] + ' ' + numbers[lastnum]
    }

    if (n.toString().length === 3) {
        let firstnum = n.toString().slice(0, 1)

        if (+n.toString().slice(1, 2) === 1) {
            return `${numbers[firstnum]} hundred ${nums[n.toString().slice(1, 3)]}`.trim()
        }

        let midnum = n.toString().slice(1, 2) + 0
        let lastnum = n.toString().slice(2)

        if (+n.toString().slice(1, 2) === 0 && +n.toString().slice(2) === 0) {
            return `${numbers[firstnum]} hundred`.trim()
        }

        if (+n.toString().slice(1, 2) === 0) {
            return `${numbers[firstnum]} hundred ${numbers[lastnum]}`.trim()
        }

        return `${numbers[firstnum]} hundred ${nums[midnum]} ${+lastnum === 0 ? '' : numbers[lastnum]}`.trim()
    }

    return 'Такого числа нету'
}
