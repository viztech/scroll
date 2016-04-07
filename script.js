/**
 * Created by siqi on 4/1/16.
 */

console.log('Scrolling...');

//A controller that globally manages scroll interaction
var controller = new ScrollMagic.Controller({
    addIndicators:true
});

//Then you create a scene
//Then you register the scene with the controller
var scene1 = new ScrollMagic.Scene({
        //specifies options for the scene
        triggerElement:"#scene-1",
        duration:400,
        triggerHook:0,
        offset:0
    })
    .on('enter',function(e){
    })
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    //specifies options for the scene
    triggerElement:"#scene-2",
    duration:400,
    triggerHook:0,
    offset:0
})
    .on('enter',function(e){
    })
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    //specifies options for the scene
    triggerElement:"#scene-3",
    duration:400,
    triggerHook:0,
    offset:0
})
    .on('enter',function(e){
        console.log("scene 3");
    })
    .addTo(controller);
