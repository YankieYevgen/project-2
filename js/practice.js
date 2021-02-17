function count(num) {
    return this + num;
}

const viker = count.bind(5);
console.log(viker(10));
console.log(viker(20));