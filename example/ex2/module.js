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

export default {
    next,
    prev,
    squere
}