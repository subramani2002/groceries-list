let userInput = document.getElementById("inputText") ;
let allItems = document.getElementById("items");
userInput.addEventListener("keydown",(e)=>{
        if(e.key == "Enter" && userInput.value!=""){
            createItem();
        }
    })
function createItem(){
        let h2 = document.createElement("h2");
        let deleteBTn = document.createElement("button");
        let delIcon = document.createElement("i");
        let item = document.createElement("div");
        h2.innerText = userInput.value;
        deleteBTn.classList.add("del");
        delIcon.classList.add("fa-solid");
        delIcon.classList.add("fa-trash");
        item.classList.add("item");
        deleteBTn.appendChild(delIcon);
        item.appendChild(h2);
        item.appendChild(deleteBTn);
        allItems.appendChild(item);
        h2.addEventListener("click",()=>{
            if(h2.style.textDecoration=="line-through"){
                h2.style.textDecoration="none";
            }
            else{
                h2.style.textDecoration="line-through";
            }
        });
        userInput.value = "";
        deleteBTn.addEventListener("click",()=>{
            deleteBTn.parentElement.remove();
        })
    }
let pencil = document.getElementById("pencilIcon");
pencil.addEventListener("click",()=>{
    if(confirm("Are you sure to delete all?")){
        allItems.innerHTML="";
    }
})
let icon = document.getElementById("dark-theme");
icon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.classList.add("white");
        document.body.style.background = "radial-gradient(#2C3E50, #000000) no-repeat";
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.remove("white");
        icon.classList.add("fa-moon");
        document.body.style.background = "radial-gradient(#000000, #166D3B) no-repeat";
    }
})