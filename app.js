const form = document.querySelector("#addForm")
const ul= document.getElementById("items")
const itemLister = document.getElementById("filter")
const item1 = ul.children[0]

form.addEventListener("submit" , addItem)
ul.addEventListener("click", ondelete)
itemLister.addEventListener("keyup" ,search)
function addItem(e){
    e.preventDefault();
        //get input
    const inputValue = document.getElementById("item")
    const inputValue2=document.getElementById("item2")
    //create  x button
    const button1= document.createElement("button")
    button1.className="btn btn-danger btn-sm float-right delete"
    button1.textContent="X"

    //create edit button
    const button2= document.createElement("button")
    button2.className="btn btn-warning btn-sm float-right edit"
    button2.textContent="Edit"
    //create new li
    const newli = document.createElement("li")
    newli.className="list-group-item";

    newli.textContent= inputValue.value + " "+inputValue2.value
    newli.appendChild(button2) // appended button
    newli.appendChild(button1)
    ul.appendChild(newli)
    inputValue.value=""
    inputValue2.value=""
    console.log(inputValue.value)
}
function ondelete(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentNode.style.display='none'
       console.log()
    }
}

function search(e){
 let text = e.target.value.toLowerCase();
let items = ul.getElementsByTagName("li")

 Array.from(items).forEach((item)=>{
    let itemName = item.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(text)!= -1){
        console.log("matched")
        item.style.display="block"
    }else{
        console.log("not matched")
        item.style.display="none"
    }

})
}
