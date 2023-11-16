const inputEl={
    name:document.querySelector("#inputName1"),
    sum:document.querySelector("#inputSum1"),
    btn:document.querySelector("#information_btn"),
    div:document.querySelector("#information_columnDiv_left")
}
const inputEl2={
    name:document.querySelector("#inputName2"),
    sum:document.querySelector("#inputSum2"),
    btn:document.querySelector("#information_bt2"),
    div:document.querySelector("#information_columnDiv_right")
}
let cardlist=[]
const rerender=()=>{    
    cardlist.forEach(item=>{
        inputEl.div.innerHTML+=`
        <div id="information_columnDiv_left_item" class="information_columnDiv_left_item">
                <div class="information_columnDiv_left_item_name">${item.name}</div>
                <div class="information_columnDiv_left_item_sum">${item.sum}грн</div>
        </div>
        `
    })
}

inputEl.btn.addEventListener("click",()=>{
    cardlist=[
        { 
            name: inputEl.name.value,
            sum: inputEl.sum.value,
        }
    ]
    inputEl.name.value.innerHTML=""
    inputEl.sum.value.innerHTML=""
    rerender()
})
let cardlist2=[]
const rerender2=()=>{    
    cardlist2.forEach(itemcard=>{
        inputEl2.div.innerHTML+=`
        <div id="information_columnDiv_rigt_item" class="information_columnDiv_right_item">
            <div class="information_columnDiv_right_item_name">${itemcard.name}</div>
            <div class="information_columnDiv_right_item_sum">-${itemcard.sum}грн</div>
        </div>
        `
    })
}
inputEl2.btn.addEventListener("click",()=>{
    cardlist2=[
        { 
            name: inputEl2.name.value,
            sum: inputEl2.sum.value,
        }
    ]
    inputEl2.name.value.innerHTML=""
    inputEl2.sum.value.innerHTML=""
    rerender2()
})