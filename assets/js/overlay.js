export {test}

function test(index){
    $("#overlay").fadeIn().css('display','flex');;
}

$("#overlayTask").click(function(e){
    e.stopPropagation();
})

$("#overlay").click(function(){
    $("#overlay").fadeOut();
});

