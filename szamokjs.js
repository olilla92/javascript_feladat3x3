function csere(){
    let egy = document.getElementById("egy").value;
    let ketto = document.getElementById("ketto").value;
    let harom = document.getElementById("harom").value;
    let negy = document.getElementById("negy").value;
    let ot = document.getElementById("ot").value;
    let hat = document.getElementById("hat").value;
    let het = document.getElementById("het").value;
    let nyolc = document.getElementById("nyolc").value;
    let kilenc = document.getElementById("kilenc").value;
    let tomb = [];
    tomb[tomb.length] = 9;
    tomb.push(egy, ketto, harom, negy, ot, hat, het, nyolc, kilenc);
    Math.random(tomb);
}