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

function eksekusi(arr){
    var arrs = [];
    for (let i = 1;i < arr.length -1 ; i++){
        for(let j=1 ; j < arr[i].length-1 ; j++){
            var ttl = 0;
        ttl = parseInt(arr[i-1][j-1]) + parseInt(arr[i-1][j]) + parseInt(arr[i-1][j+1]);
            
            ttl = ttl + parseInt(arr[i][j]);
            
            ttl = ttl +  parseInt(arr[i+1][j-1]) + parseInt(arr[i+1][j]) + parseInt(arr[i+1][j+1]);
            
            arrs.push(ttl);
        }
    }
    
    console.log(Math.max.apply(null, arrs));
}



function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    eksekusi(arr);
}
