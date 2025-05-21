let imgBox  = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')
let orginalImg = document.querySelector('#orginalImg')
let line = document.querySelector('#line')

orginalImg.style.width = imgBox.offsetWidth + "px"




var leftSpace = imgBox.offsetLeft;



imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace ) + "px"
    var widthArrow = e.pageX + "px"
    imgWrap.style.width = boxWidth
    line.style.left = widthArrow  

}
