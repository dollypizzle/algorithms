function processData(input) {
    var length = input[0];
    var sum = 0;
    var fullstring = "";
    for(var i = 2; i < input.length; i++){
        fullstring += input[i];
    }
    var splitstring = fullstring.split(" ");
    for(var j = 0; j < splitstring.length; j++){
        sum += parseInt(splitstring[j]);
    }
    console.log(sum);
    return;
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
