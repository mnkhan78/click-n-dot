const xcord = document.getElementById('logX');
const ycord = document.getElementById('logY');

let dotArr = [];
let rmvArr = [];


document.addEventListener('click', (e) => {
    xcord.innerHTML = `x-cord: ${e.clientX}` //for x co-ordinate
    ycord.innerHTML = `y-cord: ${e.clientY}` //for y co-ordinate
    
    if (e.target.tagName != 'BUTTON'){ //no dot on when we click on button
        
        const circ = document.createElement('div')

        circ.style.height = '20px'
        circ.style.width = '20px'
        circ.style.backgroundColor = 'red'
        circ.style.borderRadius = '50%'
        circ.style.position = 'absolute'
        circ.style.left = `${e.clientX}px`
        circ.style.top = `${e.clientY}px`
        circ.style.transform = 'translate(-50%, -50%)'
    
        document.body.appendChild(circ)
    
        dotArr.push(circ);
    }

})

//when we click on remove button
document.getElementById('rmv-btn').addEventListener ('click', function (e) {

    if (dotArr.length != 0){
        let lastEle = dotArr.pop()
        rmvArr.push(lastEle);
        console.log(rmvArr);
        
        document.body.removeChild(lastEle)
    } else {
        alert('No dot is present on Screen')
    }

})

//when we click on undo button
document.getElementById('undo-btn').addEventListener('click', (e) => {
    let lastEle = rmvArr.pop();
    dotArr.push(lastEle)
    document.body.appendChild(lastEle)
})