var sayı1=document.getElementById("sayı1");
var sayı2=document.getElementById("sayı2");
var sonuc=document.getElementById("sonuc");
var silme=document.getElementById("silme");

var topla=document.getElementById("topla");
var çıkart=document.getElementById("çıkart");
var çarp=document.getElementById("çarp");
var böl=document.getElementById("böl");

topla.addEventListener("click",function(){
var toplama=Number(sayı1.value) + Number(sayı2.value);
sonuc.value=toplama;
})

çıkart.addEventListener("click",function(){
  var çıkartma=Number(sayı1.value) - Number(sayı2.value);
  sonuc.value=çıkartma;  
})

çarp.addEventListener("click",function(){
var çarpma=Number(sayı1.value) * Number(sayı2.value);
sonuc.value=çarpma;
})

böl.addEventListener("click",function(){
    var bölme=Number(sayı1.value) / Number(sayı2.value);
    sonuc.value=bölme;
})

 silme.addEventListener("click",function(){
   sayı1.value="";
   sayı2.value="";
   sonuc.value="";
 })
    
