AFRAME.registerComponent('create-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        console.log("created");
        
        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createBlock();
        });
    },
    createBlock : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let blokElem = document.createElement('a-entity');
        blokElem.setAttribute('geometry', {primitive:'box'});
        blokElem.setAttribute('material', {src:'/assets/textures/25P1geh.jpg'});
        blokElem.setAttribute('remove-component', {}); 
        blokElem.setAttribute('position', {x:2, y:1, z:-4});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(blokElem);
    }
});