const FormEl={
    create:document.querySelector(".forma_input"),
    date:document.querySelector(".forma_date"),
    btn:document.querySelector(".ProgressGroup_create")
}
const ProgressGroupEl ={
    create:document.querySelector(".ProgressGroup_colm_divTask_name"),
    date:document.querySelector(".ProgressGroup_colm_divTask_date"),
    startBlock:document.querySelector(".start"),
    group:document.querySelector(".ProgressGroup_colm_divTask")
}

let cardsStorage = []
const reRenderCards = () => { 
    ProgressGroupEl.startBlock.innerHTML = ""
    cardsStorage.forEach(cardItem => { 
        ProgressGroupEl.startBlock.innerHTML += `
        <div class="ProgressGroup_colm_divTask">
                <p class="ProgressGroup_colm_divTask_name">${cardItem.name}</p>
                <p class="ProgressGroup_colm_divTask_date">${cardItem.date}</p>
                <div class="ProgressGroup_colm_divTask_btns">
                    <button class="ProgressGroup_colm_divTask_btns_left">
                        <img class="ProgressGroup_colm_divTask_btns_left_img" src="/img/left-arrow-backup-2-svgrepo-com.svg" alt="">
                    </button>
                    <button class="ProgressGroup_colm_divTask_btns_right">
                        <img class="ProgressGroup_colm_divTask_btns_right_img" src="/img/right-arrow-backup-2-svgrepo-com.svg" alt="">
                    </button>
                </div>
        </div>`
        
    })
}

FormEl.btn.addEventListener("click",() =>{
    cardsStorage = [
        ...cardsStorage, 
        { 
            name: FormEl.create.value,
            date: FormEl.date.value,
            type: "ToDo"
        }
    ]
    FormEl.create.value = ""
    FormEl.date.value = ""
    reRenderCards()
})
