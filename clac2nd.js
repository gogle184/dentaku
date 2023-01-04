let result=document.getElementById(`result`);

function numClick(target) {
  let target_value = target.innerHTML;

  if (target_value == "AC") {
      result.innerHTML = "0";
  } else if (target_value == "=") {
      result.innerHTML = eval(result.innerHTML);
  } else {
      if (result.innerHTML == "0" && target_value=="0") {
          result.innerHTML = "0";
      }else if(result.innerHTML=="0" &&target_value=="00"){
        result.inner="0";
      }else if(result.innerHTML=="0"&&target_value=="."){
        result.innerHTML="0.";
      }else if(result.innerHTML=="0"){
        result.innerHTML=target_value;
      }else{
        result.innerHTML+=target_value;
      }
  }
}


function opeClick(ope) {
  let ope_value = ope.innerHTML;
  
  if (result.innerHTML.slice(-1) == "+"){
    return;
  } else if (result.innerHTML.slice(-1) == "-"){
    return;
  } else if (result.innerHTML.slice(-1) == "*"){
    return;
  } else if (result.innerHTML.slice(-1) == "/"){
    return;
  } else {
    document.getElementById("result").innerHTML = result.innerHTML + ope_value
  }
}