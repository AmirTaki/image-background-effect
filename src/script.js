let imgBox  = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')





var leftSpace = imgBox.offsetLeft;

imgBox.addEventListener("mouseover", (event)=> {
    let boxWidth = (event.pageX - leftSpace) + "px"
    console.log(boxWidth)
})