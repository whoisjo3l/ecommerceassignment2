let username=["james1998","whoisjo3l"];
let password=["1234567","1234567"];

function CheckPassword(){

  var user=document.getElementById("username").value;//get input from username
  var pass=document.getElementById("password").value;
  for(let i=0;i<username.length;i++){
  if (user == username[i] && pass == password[i]){
    var move=document.getElementById('log');
    var move1=document.getElementById('success');
    move1.classList.toggle('active');
    move.classList.toggle('active');
    find=1;
  }
  if(find!=1){
    window.alert("Invalid User");
    break;
  }
 }
}


function check()
{
    var input = document.getElementById("password").value;

    input=input.trim();
    document.getElementById("password").value=input;
    if(input.length>=8)
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red";
    }


    if(input.match(/[0-9]/i))
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red";
    }

    if(input.match(/[^A-Za-z0-9-' ']/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red";
    }

    if(input.match(' '))
    {
        document.getElementById("check3").style.color="red";
    }
    else
    {
       document.getElementById("check3").style.color="green";
    }

}
function checkpass(){
  var input = document.getElementById("password").value;
  var input1 = document.getElementById("con-password").value;
  document.getElementById("password").value=input;
  document.getElementById("con-password").value=input1;

  if(password.length != 0){
    if(input1==input)
    {
        document.getElementById("checkp").style.color="green";
    }
    else
    {
      document.getElementById("checkp").style.color="red";
    }
  }
}
var is_visible = false;

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");

    if(is_visible)
    {
        input.type = 'password';
        is_visible = false;
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true;
        see.style.color='#262626';
    }

}
function see1()
{
    var input = document.getElementById("con-password");
    var see = document.getElementById("see1");

    if(is_visible)
    {
        input.type = 'password';
        is_visible = false;
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true;
        see.style.color='#262626';
    }

}
function toggle()
{
  var move=document.getElementById('log');
  var blur=document.getElementById('popout');
  blur.classList.toggle('active');
  move.classList.toggle('active');
}
function togglesuccess()
{
  var move=document.getElementById('log');
  var move1=document.getElementById('success');
  move1.classList.toggle('active');
  move.classList.toggle('active');

}
function toggle3()
{
  var blur=document.getElementById('popout');
  var move1=document.getElementById('success');
  move1.classList.toggle('active');
  blur.classList.toggle('active');
}

function focusme(x)
{
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="#ffffe6";//access style through DOM
}

function blurme(x){
  // let x= document.getElementById("nametxt");
  x.style.backgroundColor="White";//access style through DOM

}
function selectcountry()
{
  let x=document.getElementById("select").value;
  alert(x);
}
function selectlabel()
{
  let x=document.getElementById("select").value;
  alert(x);
}
