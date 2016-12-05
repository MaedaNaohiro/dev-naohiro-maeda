/*js file*/
$(function(){
    $("body").append("<div class='container'></div>");
    var $container = $(".container");

    var xline = 5;
    var yline = 5;
    var scale = 100;

    for(n = 0; n<xline; n++){
    for(i = 0; i<yline; i++){
        $container.append("<div class='box"+i+"_"+n+"'>");
        var $box = $(".box"+i+"_"+n)

        $box.css({
          "top": i * scale,
          "left": n * scale,
          "width": scale,
          "height": scale,
          "background-color": "#ccc",
          "border": "1px solid #000",
          "position": "absolute",
            })
        }
      }
})//end function
