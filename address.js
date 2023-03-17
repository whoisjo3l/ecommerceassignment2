function Welcome()
{
  alert("Welcome , Please Fill In the Delivery Address Detail Correctly, Thank You !");
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

function toggle2()
{
  var blur=document.getElementById('center');
  blur.classList.toggle('active');
}

function checkValidation(){
  let name=document.getElementById("name");
  let phone1=document.getElementById("phone1");
  let phone2=document.getElementById("phone2");
  let country=document.getElementById("select");
  let label=document.getElementById("select1");
  let address=document.getElementById("add");
  let pos=document.getElementById("pos");
  let alertDisplayed = false; // Initialize flag variable to false

  if(name.value==""){
    alert("Recipient Name Must be filled");
    alertDisplayed = true; // Set flag variable to true if alert is displayed
  }
  else if(phone1.value=="" || phone2.value==""){
    alert("Phone Number Must be filled");
    alertDisplayed = true;
  }
  else if(country.value==""){
    alert("Please select your country");
    alertDisplayed = true;
  }
  else if(label.value==""){
    alert("Please select your address label");
    alertDisplayed = true;
  }
  else if(address.value==""){
    alert("Please fill in your address");
    alertDisplayed = true;
  }
  else if(pos.value==""){
    alert("Please fill in your postcode");
    alertDisplayed = true;
  }

  if (alertDisplayed) { // Check flag variable to ensure each alert is displayed only once
    return false; // Return false to prevent form submission
  }
  else {
    adddetails();
  }
}

function checkValidation1() {
  let name = document.getElementById("name");
  let email = document.getElementById("emailtxt");
  let pass = document.getElementById("password");
  let pass1 = document.getElementById("con-password");
  let phone1 = document.getElementById("phone1");
  let phone2 = document.getElementById("phone2");
  let alertDisplayed = false;

  if (name.value == "") {
    alert("Name Must be filled");
    alertDisplayed = true;
  } else if (pass.value == "") {
    alert("Password must be filled");
    alertDisplayed = true;
  } else if (pass.value <=8) {
    alert("Password length must be more than 8");
    alertDisplayed = true;
  }else if (pass1.value == "") {
    alert("Confirm-Password must be filled");
    alertDisplayed = true;
  } else if (pass.value != pass1.value) {
    alert("Password no match !");
    alertDisplayed = true;
  } else if (phone1.value == "" || phone2.value == "") {
    alert("Phone Number Must be filled");
    alertDisplayed = true;
  } else if (email.value == "") {
    alert("Email must be filled");
    alertDisplayed = true;
  }

  if (alertDisplayed) {
    return false; // Prevent form submission
  } else {
    toggle2(); // Call the function to toggle the display
    return true; // Allow form submission
  }
}

function adddetails(){
  let detail=[];
  let name=document.getElementById('name').value;
  let pnumber=document.getElementById('phone1').value;
  let pnumber2=document.getElementById('phone2').value;
  let add=document.getElementById('add').value;
  if(name){
    detail.push({RecipientName :name,num1:pnumber,num2:pnumber2,add:add});
    localStorage.setItem("DeliveryDetails",JSON.stringify(detail));
    location.reload();
    detaildisplay();
  }

}

function detaildisplay(){
  let displaydetail=localStorage.getItem("DeliveryDetails");
  displaydetail=JSON.parse(displaydetail);
  let productcontainer=document.querySelector(".del");
  let htmltag="";
  if(displaydetail){
    displaydetail.forEach((item,i)=>{
      htmltag="<h5>Delivery Details</h5><p>Recipient : <p></p><span class='text5'>"+item.RecipientName+
      "</span></p><p>Recipient Phone-Number : <p></p><span class='text5'>"+item.num1+item.num2+
      "</span></p><p>Address :</p><span class='text5'>"+item.add+"</span>";
      productcontainer.innerHTML+=htmltag;
    });
  }


  }

  function clear1()
  {
    localStorage.clear();
  }
