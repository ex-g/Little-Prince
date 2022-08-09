let target = document.querySelector(".string");

var change = 0;
function lpString(){
  let stringArr=[
    "내가 양을...그려 본 적은 없어서 일단은 내가 그릴 수 있는 유일한 그림 두 개 중에 하나인 속이 안 보이는 보아뱀을 그려줬어."
,"근데 걔가 하는 대답에 되게 놀랐어."
,'“아니 아니, 코끼리를 삼킨 보아뱀을 말한 게 아냐. 보아뱀은 엄청 위험하고, 코끼리는 지나다니는 데 방해가 되고 말 거야...'
,'내가 사는 곳은, 모든 게 다 작아. 나는 양이 필요해. 양을 그려줘.”'
,'그래서 그림을 그렸지. 걔는 내가 그린 그림을 아주 조심스럽게 바라보더니 이렇게 말했어.'
,'“아니야. 이 양은 이미 늙었어. 다른 걸 그려 줘.”'
,'그래서 다른 그림을 그렸어. 이번에는 걔가 희미하게 웃더라?'
,'“한 번 직접 봐 봐... 이건 양이 아니고, 염소야. 뿔이 달려 있잖아...”'
,'그래서 세 번째 그림을 그려줬어. 근데 뭐 다른 것들이랑 똑같이 퇴짜를 맞고 말았지.'
,'“이건 너무 늙었어. 나는 오래 살 수 있는 양을 원해.”'
,'난 엔진을 고쳐야 했기 때문에 마음이 조급해져서 종이에 펜을 대고 휘갈겼어. '
];
  let selectString=stringArr[change];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}





function typeReset(){
  target.textContent = "";
  dynamic(lpString());
}

/*let change = 0;
setInterval(function(){
  console.log(stringArr[change++]);
  if (change == stringArr.length)
  stringArr.textContent=""
}, 5000);*/

function dynamic(st){
  console.log(st);
  if(st.length > 0){
    target.textContent += st.shift();
    setTimeout(function(){
      dynamic(st);
    }, 80);
  }else{
    change += 1;
    setTimeout(typeReset, 2000);
  }
}

dynamic(lpString());


function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500)
