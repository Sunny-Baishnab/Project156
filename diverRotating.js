AFRAME.registerComponent('diver-rotation-reader',{
    schema:{
        // speedOfRotation:{type:'number',default:0},
        speedOfAscent:{type:'number',default:0}
    },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            this.data.speedOfAscent = this.el.getAttribute('position')
            var diverPosition = this.data.speedOfAscent
            if(e.key==='ArrowUp'){
                if(diverPosition.y<2){
                    diverPosition.y+=0.1
                    this.el.setAttribute('position',diverPosition)
                }
            }
            if(e.key==='ArrowDown'){
                if(diverPosition.y>-2){
                    diverPosition.y-=2
                    this.el.setAttribute('position',diverPosition)
                }
            }
        })
    }
})