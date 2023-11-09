function reverse(n, inputArr) {
    const arr = inputArr.slice(0, n).reverse().join(" ");
    console.log(arr)
}

reverse(3, [10, 20, 30, 40, 50])