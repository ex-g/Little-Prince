let target = document.querySelector(".string");
var change = 0;
function lpString(){
  let stringArr=[
    "그리고는 그냥 “이건 나무 상자야. 네가 원하는 양은 이 안에 있어.” 라고 말했어."
,"그런데 갑자기 걔 얼굴이 밝아지는 거야, 난 좀 놀랐지."
,'“이게 바로 내가 원하던 양이야! 이 양이 풀을 많이 먹을까...?”'
,'“왜?”'
,'“왜냐하면 내가 사는 곳은 매우 작거든...”'
,'“충분할 거야. 내가 그린 양은 엄청 작으니까.”'
,'이게 나랑 어린왕자의 첫 만남이었어.'
,'<Chapter Ⅱ End.>'
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
