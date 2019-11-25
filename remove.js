document.querySelector('.remove-todo').addEventListener('click', function(){
    
    removeIndex = document.querySelector('.index-input').value
    list = Array.from(document.querySelectorAll('li'))
    for (let i = 0; i <list.length; i++){
        console.log(list[i])
        if( i === Number(removeIndex)){
            list.splice(i , i+1)
            console.log(list)
            list.removeChild(list.childNodes[i]);
        }
        }


    });


