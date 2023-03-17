let items=[
  {title:"Yuka Okkotsu", price: 1500, image: "01",word:"Yoyo Studio - Jujutsu Kaisen Series 01 - Ratio 1:6"},
  {title:"Iron Man mark VII", price: 6000, image: "1",word:"Queen Studio - Iron Man 3 - Life Size Bust"},
  {title:"Luffy & Ace", price: 4500, image: "3",word:"Ryu Studio - One Piece Limited Edition - Ratio 1:6"},
  {title:"Thunder God Enel", price: 5500, image: "enel",word:"Jimei Palace - Scale 1:6"},
  {title:"Roronoa Zoro", price: 4000, image: "zoro",word:"Jimei Palace - Scale 1:6"},
  {title:"Agatsuma Zenitsu", price: 1800, image: "zenitsu",word:"Hero Belief Studio - Scale 1:6"},
  {title:"Kocho Kanae", price: 1400, image: "kocho",word:"Magic Cube Studio - Scale 1:6"},
  {title:"Kamado Nezuko", price: 1500, image: "nezuko",word:"U-King Studio - Scale 1:6"},
  {title:"Jiraiya", price: 4800, image: "jiraiya",word:"Revive Studio - Scale 1:6"}

]

let addtocartbtn;

function indexdisplays(){
  let productlist=document.getElementById("indexproducts");
  let htmltag="";
  items.forEach((item,i)=>{
    htmltag="<div class='col-md-4'><div class='card'><img class='img-newarrival' src='Images/"+item.image+
    ".jpg' class='card-img-top' alt=''/><div class='card-body title'><h5 class='card-title'><strong>"+item.title+
    "</strong></h5><h6 class=''>$ "+item.price+
    "</h6><p class='card-text'>"+item.word+
    "</p><a href='#' class='btn btn-outline-dark btn-block add-to-cart'>Add to Cart</a></div></div>";
    productlist.innerHTML+=htmltag;
  });
  addtocartbtn=document.querySelectorAll(".add-to-cart");
  //console.log(addtocartbtn.length);

  for(let i=0; i<addtocartbtn.length;i++)
  {
    addtocartbtn[i].addEventListener('click',()=>{
      additem(i);
    });
  }
}


let itemincart=[]; //store the item user buy

function additem(i){
  let itemindex=localStorage.getItem('cartnumber'); //create localStorage called cartnumber
  itemindex=parseInt(itemindex); //convert to int

  if(itemindex)
  {
    itemincart=localStorage.getItem('lsitemincart');
    itemincart=JSON.parse(itemincart);
    itemincart.push(items[i]);//push items data inside itemincart
    itemindex++;
    localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
    localStorage.setItem('cartnumber',itemindex);
    console.log(itemincart);
    cartdisplay();
    cartpagedisplay1();
    location.reload();

  }
  else{
    itemincart[0]=items[i];
    console.log(itemincart);
    localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
    localStorage.setItem('cartnumber',1);
    cartdisplay();
    cartpagedisplay1();
    location.reload();
  }
}

function cartdisplay(){
  let cart = localStorage.getItem('cartnumber'); //find localStorage called cartnumber
  cart =parseInt(cart);
  if(cart)
  {
    document.getElementById('cartdisplay').textContent=cart;
  }
  else{
    document.getElementById('cartdisplay').textContent=0;
  }
}

window.addEventListener('load',()=>{
  cartdisplay();
});


function cartpagedisplay(){

  let cartitems=localStorage.getItem('lsitemincart'); //to find localStorage called lsitemincart
  cartitems=JSON.parse(cartitems);
  let productcontainer=document.querySelector(".product-container");

  if(cartitems && productcontainer)
  {
    productcontainer.innerHTML='';
    let totalprice=0;
    let htm="";
    let shipfees=12;
    let grandtotal=0;
    cartitems.forEach((item,i)=>{
      htm="<div class='col-sm-1'><input class='rdb pos' type='checkbox'></div><div class='col-lg-4'><img class='cartimage'src='Images/"+item.image+
      ".jpg'></div><div class='col-lg-4'><div class='textt'><strong>"+item.title+
      "</strong><p class='font'>"+item.word+
      "</p></div></div><div class='col-lg-3'><div class='pricetext'><strong>$ </strong>"+item.price+
      "</div></div></div><hr></div>";
      productcontainer.innerHTML+=htm;
      totalprice=item.price+totalprice;
      grandtotal=totalprice+shipfees;
    });
    document.getElementById('totalprice').innerHTML=totalprice;
    document.getElementById('fees').innerHTML=shipfees;
    document.getElementById('grandprice').innerHTML=grandtotal;
    localStorage.setItem('grandtotal',grandtotal);
  }
  else{
    document.getElementById("delbtn").style.visibility='hidden';
    document.getElementById("plobtn").style.visibility='hidden';
  }
}

function removeitem(){
  let delbtn=document.getElementsByClassName('rdb');
  console.log(delbtn.length);
  let cartitems=localStorage.getItem('lsitemincart');
  cartitems=JSON.parse(cartitems);
  for(let i=delbtn.length-1;i>=0;i--)
  {
    if(delbtn[i].checked==true)
    {
      cartitems.splice(i,1); //delete array using splice
      localStorage.setItem("lsitemincart",JSON.stringify(cartitems));
      localStorage.setItem("cartnumber",cartitems.length);
      if(cartitems.length==0)
      {
        localStorage.clear();
      }
    }
  }

  location.reload(); //reload page
}
function removeitem1(){
  let totalprice=0;
  let delbtn=document.getElementsByClassName('remove');
  console.log(delbtn.length);
  let cartitems=localStorage.getItem('lsitemincart');
  cartitems=JSON.parse(cartitems);
  for(let i=0;i<delbtn.length;i++)
  {
        delbtn[i].addEventListener('click',()=>{
        cartitems.splice(i,1); //delete array using splice
        localStorage.setItem("lsitemincart",JSON.stringify(cartitems));
        localStorage.setItem("cartnumber",cartitems.length);
        cartpagedisplay1();
        if(cartitems.length==0)
        {
          localStorage.clear();
          cartpagedisplay1();
        }
      });
  }
}


function toggle1()
{
  var blur=document.getElementById('productOnCart');
  blur.classList.toggle('show');
}
function toggle4()
{
  var blur=document.getElementById('popout');
  blur.classList.toggle('active');
}

function cartpagedisplay1(){

  let cartitems=localStorage.getItem('lsitemincart'); //to find localStorage called lsitemincart
  cartitems=JSON.parse(cartitems);
  let productcontainer=document.querySelector(".productcartcontainer");

  if(cartitems && productcontainer)
  {
    productcontainer.innerHTML='';
    let htm="";
    cartitems.forEach((item,i)=>{
      htm="<li class='buyItem'><img src='Images/"+item.image+
            ".jpg'><div><h5>"+item.title+
            "</h5><h6>$"+item.price+
            "</h6><div><a href='#' onclick='removeitem1()' class='remove' id='delbtn'>remove</a>";

      productcontainer.innerHTML+=htm;
    });
    removeitem1();
    cartdisplay();

  }
  else{
    document.getElementById("btn").style.visibility='hidden';
    document.getElementById("buyItems").innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
  }
}

function purchaseDetail(){

  let cartitems=localStorage.getItem('lsitemincart'); //to find localStorage called lsitemincart
  cartitems=JSON.parse(cartitems);
  let productcontainer1=document.querySelector(".productcartcontainer1");
  let total1=localStorage.getItem('grandtotal'); //to find localStorage called lsitemincart
  if(cartitems && productcontainer1)
  {
    productcontainer1.innerHTML='';
    let htm="";
    cartitems.forEach((item,i)=>{
      htm="<li class='buyItem1'><img src='Images/"+item.image+
            ".jpg' class='imgsuc'><div><h5>"+item.title+
            "</h5><h6>$"+item.price+"";

      productcontainer1.innerHTML+=htm;
      document.getElementById('grandprice1').innerHTML=total1;
    });
    cartdisplay();
  }

}
