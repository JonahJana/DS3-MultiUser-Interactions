var counter = 0;

AFRAME.registerComponent('remove-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.soundElem = document.querySelector('#deleteSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.deleteMyself();
            counter++;
            console.log(counter);

            

            if (counter == 1){
                Context_AF.initDate = new Date();
                document.querySelector('#timeTracker').components['time-component'].currentTime = Context_AF.initDate;
             }
            if (counter == 14){
                var currentDate = new Date();
                var pastDate = document.querySelector('#timeTracker').components['time-component'].currentTime;
                var finalTime = currentDate - pastDate;
                
            }

        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
});