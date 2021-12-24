    var restartb=document.querySelector('#b')
    var cells=document.querySelectorAll('td')
    function clearAllCells(){
    for (var i = 0; i < cells.length; i++) {
    cells[i].textContent=''
    }
    }
    restartb.addEventListener('click',clearAllCells)
    function changeContent(){
    if (this.textContent==='') {
    this.textContent='X'
    }
    else if (this.textContent=='X') {
    this.textContent='O'
    }
    else {
    this.textContent=''
    }
    }
    for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click',changeContent)
    }


  

    var myh1=document.querySelector('h1')
     function getRandomColor(){
     var letters='0123456789ABCDEF';
    var color='#';
    for (var i = 0; i < 6; i++) {
    var r=Math.floor(Math.random()*16);
    color=color+letters[r]
}
return color
}


myh1.addEventListener('mouseover',function(){
   
     myh1.style.color=getRandomColor();
    });
     myh1.addEventListener('mouseout',function(){
   
    myh1.style.color=getRandomColor();
    });





