function processData(input) {
    //Enter your code here
    var data = input.split('\n');
    var aktual = data[0].split(' ');
    var expektasi = data[1].split(' ');
    // Index dari tanggal 
    var hari = 0;
    var bulan = 1;
    var tahun = 2;
    
    var denda= 0;
    // validasi 
    if(aktual[tahun] > expektasi[tahun]){
        denda = 10000;
    }else {
        if(aktual[tahun] == expektasi[tahun]){
            if( parseInt(aktual[bulan]) > parseInt(expektasi[bulan] )){
                denda = 500 * (aktual[bulan] - expektasi[bulan]);    
            }else{
                if(parseInt(aktual[bulan]) == parseInt(expektasi[bulan])){
                    if(parseInt(aktual[hari]) > parseInt(expektasi[hari])){
                        denda = 15 * (aktual[hari] - expektasi[hari]);
                    }
                }
            }
        }
    }
    
    
    console.log(denda > 0 ? denda : 0);
    
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
