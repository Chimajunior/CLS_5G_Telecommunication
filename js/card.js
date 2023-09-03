let tColorA=document.getElementById('tColorA'),
tColorB =document.getElementById('tColorB'),
tColorC= document.getElementById('tColorC'),
iconA =document.querySelector('.fa-credit-card'),
iconB =document.querySelector('.fa-building-columns'),
iconC =document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details'),
cDetails2 = document.querySelector('.card-details2'),
cDetails3 = document.querySelector('.card-details3');


function doFun(){
    tColorA.style.color="#27ae71";
    tColorB.style.color="#444";
    tColorC.style.color ="#444";
    iconA.style.color= "#27ae71";
    iconB.style.color= "#aaa";
    iconC.style.color="#aaa";
    cDetails.classList.add("active");
    cDetails2.classList.remove("active");
    cDetails3.classList.remove("active");
}

function doFunA(){
    tColorA.style.color ="#444";
    tColorB.style.color ="#27ae71";
    tColorC.style.color ="#444";
    iconA.style.color ="#aaa";
    iconB.style.color ="#27ae71";
    iconC.style.color ="#aaa";
    console.log(cDetails.classList);
    cDetails.classList.remove("active");
    cDetails2.classList.add("active");
    cDetails3.classList.remove("active");
}
function doFunB(){
    tColorA.style.color ="#444";
    tColorB.style.color ="#444";
    tColorC.style.color ="#27ae71";
    iconA.style.color ="#aaa";
    iconB.style.color ="#aaa";
    iconC.style.color ="#27ae71";
    cDetails.classList.remove("active");
    cDetails2.classList.remove("active");
    cDetails3.classList.add("active");
}

let cNumber =document.getElementById('number');
cNumber.addEventListener('keyup', function(){
    let num =cNumber.value;

    let newValue = '';
    num = num.replace(/\s/g, '');
    for(var i=0; i<num.length; i++){
        if(i%4 ==0 && i>0) newValue=newValue.concat(' ');
        newValue = newValue.concat(num[i]);
        cNumber.value=newValue;
     }

     let ccNum= document.getElementById('c-number');
     if(num.length<16){
        ccNum.style.border="1px solid red";
     }else{
        ccNum.style.border="1px solid greenyellow";
     }
});

let eDate =document.getElementById('e-date');
eDate.addEventListener('keyup', function(e){

    let newInput = eDate.value;

    if(e.which !=8){
        var numChars =e.target.value.length;
        if(numChars ==2){
            var thisVal =e.target.value;
            thisVal +='/';
            e.target.value= thisVal;
            console.log(thisVal.length)
        }
    }

    if(newInput.length<5){
        eDate.style.border="1px solid red ";
    }else{
        eDate.style.border="1px solid greenyellow";
    }
});

let cvv =document.getElementById('cvv');
cvv.addEventListener('keyup', function(){

    let elen = cvv.value;
    let cvvBox =document.getElementById('cvv-box');
    if(elen.length<3){
        cvvBox.style.border="1px solid red";
    }else{
        cvvBox.style.border="1px solid greenyellow";
    }
});

let cvv2 =document.getElementById('cvv2');
cvv2.addEventListener('keyup', function(e){

    let elen = cvv.value;
    let cvvBox =document.getElementById('cvv-box');
    if(elen.length<3){
        cvvBox.style.border="1px solid red";
    }else{
        cvvBox.style.border="1px solid greenyellow";
    }
});



    
$(document).ready(function () {
    $(".submit").click(function () {
      var name = $(".cc-number").val();
      var email = $("#email").val();
      var cvv = $(".cc-cvv").val();
      var expDate = $("#e-date").val();

      if (name == "" || email == "" || cvv == "" || expDate == "") {
        // alert('fill in the missing column')
        Swal.fire({
          icon: "error",
          title: "error!!",
          text: "please fill in the missing column",
          
        });
        return;
      } else if (
        !name == "" ||
        !email == "" ||
        !cvv == "" ||
        !expDate == ""
      ) {
        Swal.fire("Good job!", "You have paid for this product(s)!", "success").then(
          function () {
            window.location = "index.html";
          }
        );
      }
      });

      

  
});
  
