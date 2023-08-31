let pawnBlackElementsArray=document.querySelectorAll('.pawnBlack')
let rows=['A','B','C','D','E','F','G','H']
    for(pawn of pawnBlackElementsArray){
        pawn.addEventListener('dragstart',function(e){
            let currentElement=e.target
            let position=currentElement.parentElement.classList[0]
            let temp=rows.indexOf(position[0])
            position=rows[temp+1]+position[1]
            let to=document.querySelector(`.${position}`)
            console.log(to)

            to.addEventListener('dragover',function(e){
                e.preventDefault()
            })
            
            to.addEventListener('drop',function(e){
                to.appendChild(currentElement)
                currentElement=null
            })
        })
    }
    let pawnWhiteElementsArray=document.querySelectorAll('.pawnWhite')
    for(pawn of pawnWhiteElementsArray){
        pawn.addEventListener('dragstart',function(e){
            let currentElement=e.target
            let position=currentElement.parentElement.classList[0]
            let temp=rows.indexOf(position[0])
            position=rows[temp-1]+position[1]
            let to=document.querySelector(`.${position}`)
            console.log(to)

            to.addEventListener('dragover',function(e){
                e.preventDefault()
            })
            
            to.addEventListener('drop',function(e){
                to.appendChild(currentElement)
                currentElement=null
            })
        })
    }