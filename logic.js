    let startInterval;

    function changeColor(){
    const hexCode = "0123456789ABCDEF"
    let color = "#"
    for(i=0;i<6;i++){
        color = color + hexCode[Math.floor(Math.random()*16)]
    }
    return color;
}

    document.querySelector('#start').addEventListener('click',()=>{
        if(!startInterval){
        startInterval = setInterval(()=>{
            document.body.style.backgroundColor =changeColor()
        },1000);
    }
    })

    document.querySelector('#stop').addEventListener('click',()=>{
        clearInterval(startInterval);
        startInterval = null
    })
