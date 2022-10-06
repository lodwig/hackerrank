function processData(input) {
    const arr_str = input.split("\n");
    for(let i = 1; i < arr_str.length; i++){
        const c = Array.from(arr_str[i]);
        let str_genap = "";
        let str_ganjil = "";
        for(let j = 0; j < c.length; j ++){
            if(j % 2 == 0){ // Event (Genap)
                str_genap += c[j];
            }else{
                str_ganjil += c[j];
            }
        }
    console.log(str_genap, str_ganjil);
    }
    
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
