<<<<<<< HEAD
var counter = 0;
=======
var counter = 0; 
var timeoutID;
>>>>>>> parent of 1115a8f... Merge branch 'master' of https://github.com/JonahJana/DS3-MultiUser-Interactions

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
<<<<<<< HEAD
=======

>>>>>>> parent of 1115a8f... Merge branch 'master' of https://github.com/JonahJana/DS3-MultiUser-Interactions
        });
    },
    deleteMyself : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); 
        //note memmory may stay aroudn until "garbage collected" so consider pooling instead of deleting. See note in create-cow element
    }
<<<<<<< HEAD
});
=======
});

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2000, 'You iz out of time');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
>>>>>>> parent of 1115a8f... Merge branch 'master' of https://github.com/JonahJana/DS3-MultiUser-Interactions
