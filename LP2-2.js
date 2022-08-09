let target = document.querySelector(".string");
var change = 0;
function lpString(){
  let stringArr=[
    "누가 보면 전깃불에 맞은 것같이 화들짝 놀랐어. 눈도 엄청 비볐어. 그리고 나서야 그 존재를 빤히 쳐다봤어."
,"어떤 이상한 어린 친구가 나를 엄청 진지하게 쳐다보고 있는 거야. 이게 내가 나중에 그린 최선의 초상화야."
,"음... 근데 실물이 훨씬 나아. 내 그림 실력 알잖아. 근데 내 잘못은 아냐."
,"6살 때 화가라는 내 꿈을 대하는 어른들의 태도 때문에, 속이 보이는 보아뱀과 보이지 않는 보아뱀 외에는 그림이라는 걸 배워본 적이 없는 걸."
,"어쨌든 나는 눈을 크게 뜨고 그 믿을 수 없는 광경을 바라봤어. 내가 있었던 곳은 사람들이 사는 곳에서부터 천 마일이나 떨어져 있었다는 것을 잊지 말라고."
,'그런데도 그 친구는 길을 잃은 것 같지도, 배고픔과 갈증에 허덕이는 것 같지도, 심지어는 죽음을 두려워하는 것 같지도 않았어.'
,'그냥... 걔는 사람들이 있는 곳으로부터 천 마일이나 떨어진 사막 한가운데에서 길을 잃은 아이 같지가 않았어.'
,'내가 당황하다가 겨우 입을 떼고 물어봤어.'
,'“근데...너 여기서 뭐하고 있는 건데?”'
,'걔가 아주 느리고 매우 진지하게 대답하더라. “부탁이야... 양 한 마리만 그려줘...”'
,'그...너 같아도 상상하지도 못한 일을 직접 마주하게 되면 당황하고 말 거야. 내 말은, 그걸 거절할 수가 없었어.'
,'좀 웃기긴 하겠지만 사람 하나 보이지 않는 곳에서, 심지어 당장 목숨이 위험한 상황에서 나는 주머니에 있던 종이하고 펜을 꺼냈어.'
,'그런데 그때 딱 내가 지리, 역사, 산수, 문법 같은 것만 배운 게 기억나더라고.'
,'그래서 솔직하게 그림 어떻게 그리는지 모른다고 말했어.'
,'걔는 “상관 없어. 양 한 마리만 그려줘” 라고 하더라.'
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
