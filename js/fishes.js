AFRAME.registerComponent('fish', {
    schema: {
        
    },

    init: function () {
        for(let i=0;i<23;i++){
            let id = `fish${i}`;
            var posX = Math.random(-5,10)*i;
            var posY = Math.random(-2,5)*i;
            var posZ = Math.random(-5,10)*i;
            let position = {x:posX,y:posY,z:posZ};
            this.fishdesign(id,position);
        }

    },
    fishdesign: function(id,position){
        let sea = document.querySelector("#sea");
      let fish = document.createElement("a-entity");

        fish.setAttribute("id",id);
        fish.setAttribute("material","color","green");
        fish.setAttribute("position",position);
        fish.setAttribute("scale",{x:"0.01",y:"0.01",z:"0.01"})
        fish.setAttribute("game",{elementId:`#${id}`});
        fish.setAttribute("gltf-model","../models/fish/scene.gltf");   
        sea.appendChild(fish);
    }
});
AFRAME.registerComponent('coins', {
    schema: {
        
    },

    init: function () {
        for(let i=0;i<23;i++){
            let id = `coin${i}`;
            var posX = Math.random()* 100 + -50;
            var posY = Math.random()*42;
            var posZ = Math.random()* -30;
            let position = {x:posX,y:posY,z:posZ};
            this.coindesign(id,position);
        }

    },
    coindesign: function(id,position){
        let sea = document.querySelector("#sea");
        let coin = document.createElement("a-entity");
        coin.setAttribute("id",id);
        coin.setAttribute("material","color","#FF9100");
        coin.setAttribute("position",position);
        coin.setAttribute("Animation",{property:"rotation",to:"0 360 0",loop:true,dur:4000})
        coin.setAttribute("game",{elementId:`#${id}`});
        coin.setAttribute("geometry",{primitive:"circle",radius:1})
        // coin.setAttribute("scale",{x:"0.01",y:"0.01",z:"0.01"})  
        coin.setAttribute("static-body",{shape: "sphere",sphereRadius: 2})
        sea.appendChild(coin);
    }
});