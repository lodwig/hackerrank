function processData(input) {
    const arr_input  = input.split("\n");
    const jml_phonebook = parseInt(arr_input[0]);
    const phoneBooks = [];
    for (let i = 1; i <= jml_phonebook ;i ++ ){
        var pb = arr_input[i].split(" ");
        phoneBooks[pb[0]] = pb[1]
    }
    
    for (let i = jml_phonebook+1; i < arr_input.length ;i ++ ){
        let phone = phoneBooks[arr_input[i]];
        if(phone != undefined){
            console.log(arr_input[i]+"="+phone);
        }else{
            console.log("Not found");
        }
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
