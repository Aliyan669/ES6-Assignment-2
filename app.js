//nseted Array//
let arr = [
    [
        ["abc"]
    ],
        "xyz"];
let b = [...arr[0]];
let c = [...b[0]];
// console.log(c);
let print= document.getElementById("print")
print.innerHTML += `${c}`

//nested Opbject//
let obj = {
    n: {
      mn: {
        name: "Aliyan Amir",
      },
    },
  };
let d ={...obj.n}
let e ={...d.mn}
// console.log(e);
let print2= document.getElementById("print2")
print2.innerHTML += `${Object.values(e)}`
