let x=document.querySelectorAll(".box");
let y=document.querySelector(".c1");
let z=document.querySelector(".c2");
let turn0=true;
let xx=document.querySelector(".c4");

const arr=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[3,4,5],
[6,7,8],
[2,4,6],
];

z.addEventListener("click",()=>{
        turn0=true;
        x.forEach((val) => {
            val.innerHTML = "";
            val.disabled = false;
        });
        xx.classList.remove("c4");
        xx.innerHTML = "";
      
    });


    xx.classList.remove("c4");
    y.addEventListener("click",()=>{
        turn0=true;
        x.forEach((val) => {
            val.innerHTML = "";
            val.disabled = false;
        });
        xx.classList.remove("c4");
        xx.innerHTML = "";
   
    });

const check=()=> {
    xx.classList.add("c4");
    for(let ss of arr){
        if(x[ss[0]].innerHTML!="" && x[ss[1]].innerHTML!="" && x[ss[2]].innerHTML!="" ){
            if(x[ss[0]].innerHTML==x[ss[1]].innerHTML && x[ss[1]].innerHTML==x[ss[2]].innerHTML){
                console.log(`winner is ${x[ss[0]].innerHTML}`);
         
               
                xx.innerHTML=`Congrats!! Winner is ${x[ss[0]].innerHTML}`;
            }
        }
   
}
 };
x.forEach((val)=>{
    
    val.addEventListener("click",()=>{
       if(turn0){
        val.innerHTML="X";
        turn0=false;
       }
       else{
        val.innerHTML="0";
        turn0=true;
       }
       val.disabled=true;
       check();
     
    });


 
});
 
