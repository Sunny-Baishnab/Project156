AFRAME.registerComponent('gameplay',{
    schema:{
        elementId:{type:'string',default:'#ring1'}
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener('collide',e =>{
            if(elementId.includes('#coin')){
                element.setAttribute('visible',false);
                console.log('ring collision')
            }
            else if(elementId.includes('#fish')){
                console.log('fish collision')
            }
        })
    },

    update:function(){
        this.isCollided(this.data.elementId)
    },

    startTimer:function(duration,timerEl){
        var min;
        var sec;
        setInterval(()=>{
            if(duration>=0){
                min = parseInt(duration/60)
                sec = parseInt(duration%60)
                if(min<10){
                    min = '0'+min
                }
                if(sec<10){
                    sec = '0'+sec
                }
                timerEl.setAttribute('text',{value:min+':'+sec})
                duration-=1
            }
        },1000)
    },

    updateTargets:function(){
        const element = document.querySelector('#targets')
        var count = element.getAttribute('text').value
        let currentTargets = parseInt(count)
        currentTargets-=1
        element.setAttribute('text',{
            value:currentTargets
        })
    },

    updateScores:function(){
        const element = document.querySelector('#scores')
        var count = element.getAttribute('text').value
        let currentScoress = parseInt(count)
        currentScoress+=50
        element.setAttribute('text',{
            value:currentScores
        })
    }
})