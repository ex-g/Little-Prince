let target = document.querySelector(".string");
var change = 0;
function lpString(){
  let stringArr=[
""
,"그래서 나는 6년 전 사하라 사막에 불시착할 때까지, 이야기를 나눌 사람 하나 없이 혼자 살았어."
,"비행기 엔진에 뭔가 이상이 있었던 모양이야. 비행기 안에는 기계공도 승객도 없었으니까, 그 어려운 엔진 수리를 나 혼자서 해야 했어."
,"게다가 마실 물도 8일치밖에 남아있지 않았어."
,"첫 날 밤은 사람들이 사는 곳으로부터 천 마일이나 떨어진 곳에서 잠을 청했어. 정말이지 뗏목 위에서 바다 한가운데를 떠다니는 사람보다 외로웠다니까."
,"그런데 있지, 새벽에 어린 친구의 작은 목소리가 들려오는 거야, 내가 얼마나 놀랐겠니!"
,'"...부탁이 있는데, 양 한 마리만 그려줘."'
,'"뭐라고?"'
,'"양 한 마리만 그려줘..."'
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
