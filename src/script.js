let imgBox  = document.querySelector('.img-box')
let imgWrap = document.querySelector('.img-wrap')





var leftSpace = imgBox.offsetLeft;

// imgBox.addEventListener("mousemove", (event)=> {
//     let boxWidth = (event.pageX - leftSpace) + "px"
//     imgWrap.computedStyleMap.width = boxWidth;
//     console.log(boxWidth)
// })


imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px"
    imgWrap.style.width = boxWidth
    console.log(boxWidth)
}
// onmousemove()