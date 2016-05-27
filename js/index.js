

const NUMBERLIMIT = 11;
var currentNum;
var currentStat;
/*var temp;
var last2Arr;
var realAns;*/
var oprFlag = false;
var dotFlag = false;
var percentFlag1 = false;
var percentFlag2 = false;
var equalFlag = false;
var displayArrTemp;
var displayArr = new Array();
var tempArr = new Array;
var screenText = document.getElementById('screenText');

currentStat = document.getElementsByClassName('num');
var screenLength;

for (i = 0; i < currentStat.length; i++) {
  currentStat[i].addEventListener("click", checkStat);
}

//Run the fuction base on which button was pressed
function checkStat() {
  console.log('dotFlag before stat is ' + dotFlag);
  console.log('oprFlag before stat is ' + oprFlag);
  var checkNum = this.id.slice(0, 3);
  //checking which number button was pressed and assign it to the variable currentNum.
  var checkLength = this.id.split('').length;
  if (checkNum == "num") {
    currentNum = this.id.slice(3, checkLength);
  }

  switch (this.id) {
    case 'num0':
      run0();
      break;

    case 'num1':
      runNum();
      break;

    case 'num2':
      runNum();
      break;

    case 'num3':
      runNum();
      break;

    case 'num4':
      runNum();
      break;

    case 'num5':
      runNum();
      break;

    case 'num6':
      runNum();
      break;

    case 'num7':
      runNum();
      break;

    case 'num8':
      runNum();
      break;

    case 'num9':
      runNum();
      break;

    case 'oprPlus':
      runPlus();
      break;

    case 'oprMinus':
      runMinus();
      break;

    case 'oprMul':
      runMul();
      break;

    case 'oprDivide':
      runDivide();
      break;

    case 'oprEqual':
      runEqual();
      break;

    case 'oprDot':
      runDot();
      break;

    case 'oprPercent':
      runPercent();
      break;

    case 'oprAC':
      runAC();
      break;

    case 'oprCE':
      runCE();
      break;

  }

  console.log(displayArr);
  console.log('dotFlag final status ' + dotFlag);
  console.log('oprFlag final status ' + oprFlag);
  console.log('percentFlag1 final status ' + percentFlag1);
  console.log('percentFlag2 final status ' + percentFlag2);
  console.log('equalFlag final status ' + equalFlag);
}

function run0() {
  if (screenText.innerHTML != 0) {
    saveNum();
    displayNum();

  }

};

function runNum() {
  saveNum();
  displayNum();

};

function runDot() {

  if (!dotFlag) {
    currentNum = ".";
    dotFlag = true;
    saveNum();
    displayNum();

  }

};

function runAC() {
  currentNum = 0;
  screenText.innerHTML = 0;
  temp = 0;
  dotFlag = false;
  oprFlag = false;
  percentFlag1 = false;
  percentFlag2 = false;
  equalFlag = false;
  displayArr = [];
  tempArr = [];

};

function runCE() {
  tempArr = [];
  screenText.innerHTML = 0;
};

function runPlus() {
  operation("+");

};

function runMinus() {
  operation("-");

};

function runMul() {
  operation("*");

};

function runDivide() {
  operation("/");

};

function runPercent() {
  if(!percentFlag1 && !percentFlag2) {
  operation("/100");
  var nowPercent = displayArr.join('');
  currentNum = eval(nowPercent);
  displayArr = [];
  saveNum();
  displayNum();
  } else if(percentFlag2) {
    percentFlag1 = true;
    console.log('percent flaf1 is '+percentFlag1);
    console.log('inside runpercent if precentFlag2');
    var lastNum = displayArr[0];
    console.log("lastNum is "+lastNum);
    currentNum = (currentNum/100)*lastNum;
    tempArr=[];
    saveNum();
     displayNum();
  }
  
  //console.log();
 /* if (screenText.innerHTML != 0) {
  if(!oprFlag) {
    currentNum = currentNum/100;
    saveNum();
    displayNum();
  }else {
    
  }
  }*/
};

function runEqual() {
  if (screenText.innerHTML != 0) {

    if (!oprFlag) {
      
     
         displayArr.push(temp);
      console.log(displayArr);
      var ans = displayArr.join('');
      realAns = eval(ans);
      realAns = realAns.toFixed(9);
      currentNum = realAns;
      oprFlag = true;
      displayNum();
      oprFlag = true;
      /*last2Arr = displayArr.slice(-2).join('');
      equalFlag = true;*/
      percentFlag = false;
      equalFlag = true;
        displayArrTemp = displayArr;
      displayArr = [];
      tempArr = [];
      
     
    }else {
       if(equalFlag) {
         var arrTemp = new Array;
        arrTemp.push(realAns);
        arrTemp.push(displayArrTemp[displayArrTemp.length-2]);
        arrTemp.push(displayArrTemp[displayArrTemp.length-1]);
        var ans = arrTemp.join('');
        realAns = eval(ans);
          realAns = realAns.toFixed(9);
         currentNum = realAns;
      oprFlag = true;
      displayNum();
      oprFlag = true;
       }
    }
    console.log("realAns is = " + realAns);
    console.log("ans is = " + ans);

  }
};

function displayNum() {

  //remove white space and check number length.
  screenLength = screenText.innerHTML.trim().length;
  //Check if screen is full then stop click function

  if (screenLength < NUMBERLIMIT) {

    if (screenText.innerHTML.trim() != "0") {
      if (oprFlag) {
        /* if (screenText.innerHTML != "0") {*/
        /* if (dotFlag) {

           screenText.innerHTML = currentNum;
         } else {*/
        screenText.innerHTML = currentNum;
        oprFlag = false;
        /* }*/
        /*}*/

      } else {
        /*if (dotFlag) {
          console.log('inside dofFlag');
          screenText.innerHTML = "0." + currentNum;
        } else {*/
        /*console.log('outside dofFlag');*/
        if(percentFlag1 && percentFlag2){
          console.log('inside percentFlag1 and percentFlag2');
          screenText.innerHTML = currentNum;
        }else {
          screenText.innerHTML = screenText.innerHTML + currentNum;
        }
        
      }

    } else {

      console.log('inside if display 0');
      if (dotFlag) {
        console.log('inside if dotFlag true');
        screenText.innerHTML = screenText.innerHTML + currentNum;

      } else {
        /*console.log('inside if dotFlag false')*/
        screenText.innerHTML = currentNum;
      }

    }
  }
  console.log('the current display: ' + screenText.innerHTML);

};

function saveNum() {

  console.log("inside if not zero and opr flag flase")
  tempArr.push(currentNum);
  temp = tempArr.join('');

  /*else if(dotFlag){
      console.log("inside if dofFlag true")
      temp = tempArr.push(currentNum.slice(0,1));
      temp = tempArr.join('');
    }*/
  console.log("currentNum = " + currentNum);
  console.log("currenttemp = " + temp);
};

function operation(opr) {
  if (screenText.innerHTML != 0) {
    displayArr.push(temp);
    tempArr = [];
    displayArr.push(opr);
    oprFlag = true;
    dotFlag = false;
    percentFlag2 = true;

  }
};