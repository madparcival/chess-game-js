let rookElementsArray=document.querySelectorAll('.rook')
    
        for(ele of rookElementsArray){
            ele.addEventListener('dragstart',function(e){
            let currentElement=e.target
            
                document.getElementsByClassName(`A1`)[0].addEventListener('dragover',function(e){
                    e.preventDefault()
                })
                document.getElementsByClassName(`A1`)[0].addEventListener('drop',function(e){
                    console.log(currentElement)               
                    // document.getElementById('icon').classList.replace('fa-square-check','fa-list-check')                    
                    document.getElementsByClassName(`A1`)[0].appendChild(currentElement)
                    currentElement=null
                })
                document.getElementsByClassName(`A2`)[0].addEventListener('dragover',function(e){
                    e.preventDefault()
                })
                document.getElementsByClassName(`A2`)[0].addEventListener('drop',function(e){
                    console.log(currentElement)               
                    // document.getElementById('icon').classList.replace('fa-square-check','fa-list-check')                    
                    document.getElementsByClassName(`A2`)[0].appendChild(currentElement)
                    currentElement=null
                })
                document.getElementsByClassName(`A3`)[0].addEventListener('dragover',function(e){
                    e.preventDefault()
                })
                document.getElementsByClassName(`A3`)[0].addEventListener('drop',function(e){
                    console.log(currentElement)               
                    // document.getElementById('icon').classList.replace('fa-square-check','fa-list-check')                    
                    document.getElementsByClassName(`A3`)[0].appendChild(currentElement)
                    currentElement=null
                })
            })
        }