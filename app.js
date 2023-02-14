const form = document.querySelector("#addForm")
const ul= document.getElementById("items")


const item1 = ul.children[0]

form.addEventListener("submit" , addItem)
ul.addEventListener("click", ondelete)

function addItem(e){
    e.preventDefault();
        //get input
    const inputValue = document.getElementById("item")
    //create button
    const button= document.createElement("button")
    button.className="btn btn-danger btn-sm float-right delete"
    button.textContent="X"
    //create new li
    const newli = document.createElement("li")
    newli.className="list-group-item";

    newli.textContent= inputValue.value
    newli.appendChild(button) // appended button
    ul.appendChild(newli)
}
function ondelete(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentNode.style.display='none'
       console.log()
    }
}