 function total () {
    let numa=Number(document.getElementById("a").value);
   let numb=Number(document.getElementById("b").value);
    let total=numa+numb;
    document.getElementById("select").innerHTML=total
}
 function sub () {
     let numa=Number(document.getElementById("a").value);
     let numb=Number(document.getElementById("b").value);
     let total=numa-numb;
     document.getElementById("select").innerHTML=total
 }
 function mul () {
     let numa=Number(document.getElementById("a").value);
     let numb=Number(document.getElementById("b").value);
     let total=numa*numb;
     document.getElementById("select").innerHTML=total
 }
 function div () {
     let numa=Number(document.getElementById("a").value);
     let numb=Number(document.getElementById("b").value);
     let total=numa/numb;
     document.getElementById("select").innerHTML=total
 }
