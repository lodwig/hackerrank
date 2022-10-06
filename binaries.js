'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function check(n){
    const c = n.toString(2);
    let start = 0;
    let max = 0;
    for(let i= 0; i < c.length; i ++){
        if(c.charAt(i) == 1){
            start++;
            if(start > max) {
                max = start;
            }
        }else{
            start = 0;
        }
    }
    console.log(max);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    check(n)
}
