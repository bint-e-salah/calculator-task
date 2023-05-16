function getNum(num){
  console.log(num)
document.getElementById("result").value += num;
}
function clearNum(){
  document.getElementById("result").value = '';
}
function removeNum(){
  var res = document.getElementById("result").value
  document.getElementById("result").value =document.getElementById("result").value.slice(0,res.length-1)
 console.log(document.getElementById("result").value.slice(0,res.length-1));
}
function getResult(){
  document.getElementById("result").value = eval(document.getElementById("result").value)
console.log(document.getElementById("result").value)

}