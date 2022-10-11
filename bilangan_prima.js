function processData(input) {
    //Enter your code here
    var data = input.split('\n');
    var panjang_data = data[0];
    for (var i = 1; i <= panjang_data; i++) {
        if (isPrime(parseInt(data[i]))) {
            console.log("Prime")
        } else {
            console.log("Not prime")
        }
    }

}
function isPrime(n) {
    // dibawah angka 1 adalah tidak prima
    if (n <= 1) return false;

    // 2, 3 adalah angka prima
    if (n <= 3) return true;

    // jika selain 1,2,3 maka angka yang dapat di bagi 2 atau di bagi 3 bukan prima
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }

    // loop mulai dari 5 dengan kelipatan 6 :
    // karena 5 termasuk dalam angka prima
    for (var index = 5; index * index <= n; index = index + 6) {
        if (n % index == 0 || n % (index + 2) == 0) {
            return false;
        }
    }
    return true;;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
