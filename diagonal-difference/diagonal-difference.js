function processData(input) {
    var lines = input.split("\n");
    var N = parseInt(lines[0]);
    var t = 0;
    for(i = 1; i <= N; i++) {
        var line = lines[i].split(" ");
        t += parseInt(line[i - 1]) - parseInt(line[N - i]);
    }
    console.log(Math.abs(t));
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
