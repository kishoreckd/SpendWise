const input=document.querySelector("#inputtext")
// console.log(input);
const inputamt=document.querySelector("#inputamt")

const ul=document.querySelector(".list")

const btn=document.querySelector("#submit")
const balance=document.querySelector("#balance")
const history =document.querySelector("#history")


const moneyplus=document.querySelector(".moneyplus")
const moneyminus=document.querySelector(".moneyminus")

btn.addEventListener("click",(e)=>{
    //preventing default for form tag
    e.preventDefault();
 
    if (input.value !="" && inputamt.value !="") {
        history.innerText="History"

        //creating element li
        

        let li=document.createElement("li")
        li.style.listStyle="none";
        li.style.display="flex";
        li.style.justifyContent = "space-between";
        li.setAttribute("id","li")
        li.innerText=input.value;

        // creating element span

        let span=document.createElement("span")
        span.setAttribute("id","cash")
        span.innerText=inputamt.value
        // appending span to li
        
        li.appendChild(span)

        // creating element delete btn
        let del =document.createElement("button")
        del.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
        del.style.color="red"
        li.appendChild(del)
        ul.appendChild(li)


        // looping for calculation
        let sum = document.querySelectorAll("#cash")
    let array = []
for(let i=0;i<sum.length;i++){
    array.push(Number(sum[i].innerText))
}

let Totalamt = 0;
for(let k=0;k<array.length;k++){
    Totalamt += array[k]

}

let add = 0;
let sub = 0;

for(let m=0;m<array.length;m++){
    if(array[m] > 0){
        add += array[m]
    }
    else{
        sub += array[m]
    }
}
balance.innerText = Totalamt
moneyplus.innerText=add
moneyminus.innerText=sub

       // checking if the no is gretaer than 0
       if (inputamt.value > 0) {
       
        li.style.color="green"
        balance.classList.add("add")
        setTimeout(() => {
            balance.classList.remove("add")
        }, 1000);
    }
    // checking if the no is less than 0
    if(inputamt.value <= 0 ){
    
        li.style.color="red"
        balance.classList.add("remove")
        setTimeout(() => {
            balance.classList.remove("remove")
        }, 1000);
    }
    del.addEventListener("click",(event)=>{
        event.target.parentElement.parentElement.remove()

        let sum = document.querySelectorAll("#cash")
        let array = []
    for(let i=0;i<sum.length;i++){
        array.push(Number(sum[i].innerText))
    }
    
    let Totalamt = 0;
    for(let k=0;k<array.length;k++){
        Totalamt += array[k]
    
    }
    
    let add = 0;
    let sub = 0;
    
    for(let m=0;m<array.length;m++){
        if(array[m] > 0){
            add += array[m]
        }
        else{
            sub += array[m]
        }
    }
    balance.innerText = Totalamt
    moneyplus.innerText=add
    moneyminus.innerText=sub


    })
    input.value=""
    inputamt.value=""
      
    }
    else{
        
        alert("please input the value")
      

       
    }

    })
     

        
