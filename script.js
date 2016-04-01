/**
 * Created by siqi on 4/1/16.
 */

console.log('Scrolling...');

//A controller that globally manages scroll interaction
var controller = new ScrollMagic.Controller();

//Then you create a scene
//Then you register the scene with the controller
var scene1 = new ScrollMagic.Scene({
        //specifies options for the scene
        triggerElement:"#scene-1",
        duration:3000,
        triggerHook:'onEnter'
    })
    .on('progress',function(e){
       console.log(e.progress);
    })
    .addTo(controller);
