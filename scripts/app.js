
document.querySelector('button').addEventListener('click', (e) => {

    let num = document.getElementById("number").value
   
    document.getElementById("out").style.display = "block"
    
    document.getElementById("dec").innerHTML += " in DEC :  " + Number(num)
    document.getElementById("bin").innerHTML += " in BIN :  " + Number(num).toString(2)
    document.getElementById("oct").innerHTML += " in OCT :  " + Number(num).toString(8)
    document.getElementById("hex").innerHTML += " in HEX :  " + Number(num).toString(16)

    e.preventDefault();

    document.querySelector(".in").style.display = "none"
    document.querySelector(".time").style.display = "none"
    
    document.querySelector(".second-in").style.display = "block"

}, false);