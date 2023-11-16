const InputEl1={
    name:document.querySelector("#inputName1"),
    sum:document.querySelector("#inputSum1"),
    btn:document.querySelector("#information_btn"),
    div:document.querySelector("#information_columnDiv_left")
}
const InputEl2={
    inputName:document.querySelector("#inputName2"),
    inputSum:document.querySelector("#inputSum2"),
    btn:document.querySelector("#information_bt2"),
    div:document.querySelector("#information_columnDiv_right")
}
InputEl1.btn.addEventListener("click",()=>{
    const rerender=()=>{    
        InputEl1.name.innerHTML=""
        InputEl1.sum.innerHTML=""
        const InputEl=(item)=>{
            InputEl1.div.innerHTML=`
            <div id="information_columnDiv_left_item" class="information_columnDiv_left_item">
                    <div class="information_columnDiv_left_item_name">${item.name}</div>
                    <div class="information_columnDiv_left_item_sum">${item.sum}</div>
            </div>
            `
        }
    }
    rerender()
    InputEl(item)
})
