let imgBox  = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')
let orginalImg = document.querySelector('#orginalImg')

orginalImg.style.width = imgBox.offsetWidth + "px"




var leftSpace = imgBox.offsetLeft;



imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px"
    imgWrap.style.width = boxWidth
    console.log(boxWidth)
}
