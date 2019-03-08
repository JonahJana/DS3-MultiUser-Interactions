AFRAME.registerComponent('spawn-blocks-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.spawnBlock();
    },
    spawnBlock : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let boxy = document.createElement('a-entity');

        boxy.setAttribute('geometry', {primitive:'box; width: 1; height: 1; depth: 1'});
        boxy.setAttribute('material', {src:'#boxes; repeat: 2 2 2; transparent: false; metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;'});
        boxy.setAttribute('remove-component', {}); 
        boxy.setAttribute('position', {x:0, y:3, z:-5});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(boxy);
    }
});