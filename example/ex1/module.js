let number = 0;

const next = () => {
    return ++number ;
}

const prev = () => {
    return --number ;
}

const squere = () => {
    return number * number;
}

module.exports.next = next;
module.exports.prev = prev;
module.exports.squere = squere;