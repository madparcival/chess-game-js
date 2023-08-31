let rookElementsArray=document.querySelectorAll('.rook')
let columns=[1,2,3,4,5,6,7,8]

    for(ele of rookElementsArray){
        ele.addEventListener('dragstart',function(e){
        let currentElement=e.target
        let position=currentElement.parentElement.classList[0]
        let rookMovementsArray=[]

        for(i of rows){
            rookMovementsArray.push(i+position[1])
        }
        for(j of columns){
            rookMovementsArray.push(position[0]+j)
        }

        for(tile of rookMovementsArray){
            let rookTo = document.querySelector(`.${tile}`)
            rookTo.addEventListener('dragover',function(e){
                e.preventDefault()
            })
            
            rookTo.addEventListener('drop',function(e){
                rookTo.appendChild(currentElement)
                currentElement=null
            })
                
            
        }
    })

    }