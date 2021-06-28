AFRAME.registerComponent('game', {
    schema: {
        elementId:{type:"string",default:"#coin1"}
    },

    init: function () {
        
    },
    update: function () {
        this.iscollided(this.data.elementId);
    },
    iscollided: function(elementid){
        let element = document.querySelector(elementid);
        let scoreEl = document.querySelector("#score");
        let score = scoreEl.getAttribute("text").value;
        let timeEL = document.querySelector("#time");
        let time = timeEL.getAttribute("text").value;
        setInterval(() => {
            time-=1;
            timeEL.setAttribute("text",{value:time});
        }, 1000);
        element.addEventListener("collide",(e)=>{
            if(elementid.includes("#coin")){
                score+=1;
                scoreEl.setAttribute("text",{value:score,font:"exo2bold",width:10});
            }
            if(elementid.includes("#fish")){
                console.log("FISH COLLISION");
            }
        });
    },
    gameOver: function(){
        let over = document.querySelector("#over");
        over.setAttribute("visible",true);
        let man = document.getElementById("controlman"); 
        let sea  = document.getElementById("sea");
        sea.setAttribute("scale",{x:0,y:0,z:0});
    },
    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
    let timeE = document.querySelector("#time");
    let times = timeE.getAttribute("text").value;
    if(times<=0){
        this.gameOver();
        timeE.setAttribute("scale",{x:0,y:0,z:0})
    }
    }
});
