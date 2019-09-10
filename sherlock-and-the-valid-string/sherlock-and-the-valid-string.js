function processData(input) {
    //Enter your code here
    source = input.split("\n").shift();
    counter = []
    for(i=0; i<30;i++) counter[i] = 0;
    
    maxCounter = 0;
    
    for(i=0;i<source.length; i++)
        {
            index = source.charCodeAt(i)-97
            counter[index] ++;
            
            if (counter[index] > maxCounter) { maxCounter = counter[index]; }
        }
    
    
    atZero = 0;
    atOne = 0;
    atMax = 0;
    atMaxMinus = 0;
    atOther =0;
    
    for(i=0; i<30;i++) 
        {
            if (counter[i] >= maxCounter-1 )
                {
                    if (counter[i] == maxCounter) atMax++;
                    else atMaxMinus ++;
                }
            else
                {
                    if (counter[i] <2)
                    {
                        if (counter[i] ==1) atOne ++;
                        else atZero ++;
                    }
                    else
                        {
                            atOther ++;
                        }
                    }
        }
    
    if (maxCounter<2)
        {
            console.log("YES");
            return;
        }
    if ((atOther >0) || (atOne > 1))
        {
        console.log("NO");
        return;
        }
    
    if ((atMax >1) && (atMaxMinus > 0) && (maxCounter>2))
        {
        console.log("NO");
        return;
        }
    
    if ((atMax >1) && (atMaxMinus > 1) && (maxCounter==2))
        {
        console.log("NO");
        return;
        }
    
    if ((atOne >0) && (atMaxMinus > 0))
        {
        console.log("NO");
        return;
        }
    
    console.log("YES");
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

