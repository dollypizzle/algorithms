function processData(input) {
    //Enter your code here
    var lines = input.split(/[\r\n]+/);
    var n_k = lines[0].split(' ').map(Number);
    var n = n_k[0], k = n_k[1];
    var ar = lines[1].split(' ').map(Number);
    
    var o = {};
    for(var i = 0; i < ar.length; i++) {
        var r = ar[i] % k;
        o[r] = o[r] ? o[r] + 1 : 1;
    }
    
    var c = 0;
    for(var key in o) {
        var f = parseInt(key);
        
        if (f == 0) {
            if (o[f] >= 1) { c++; }
        }
        else {
            var f2 = k - f;
            if (f > f2 && o[f2]) { continue; }
            else if (f == f2) {
                if (o[f] >= 1) { c++; }
            }
            else {
                var a = o[f] || 0;
                var b = o[f2] || 0;
                c += Math.max(a, b);
            }
        }
    }
    
    console.log(c);
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
