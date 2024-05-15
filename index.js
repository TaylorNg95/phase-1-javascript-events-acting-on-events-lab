const dodger = document.querySelector('#dodger');

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
})

function moveDodgerLeft(){
    const leftPos = dodger.style.left.replace('px', '');
    const leftPosNum = parseInt(leftPos, 10);
    if(leftPosNum > 0){
        dodger.style.left = `${leftPosNum - 1}px`;
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
        moveDodgerRight();
    }
})

function moveDodgerRight(){
    const rightPos = dodger.style.left.replace('px', '');
    const rightPosNum = parseInt(rightPos, 10);
    console.log(rightPosNum);
    if(rightPosNum < 360){
        dodger.style.left = `${rightPosNum + 1}px`;
    }
}