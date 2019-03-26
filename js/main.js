$(function(){

    var init = [],
    countTimer = [],
    activeCounter = [];
    
    $(".skillarea").each(function(i){
        init[i] = $(".countdownArea",this).data("num");
    });

    $(".skillarea").click(function(){
        skilltimer($(".skillarea").index($(this)));
    });

    $("#skill4add").click( function() {
        skill4change(1);
    } )

    $("#skill4minus").click( function() {
        skill4change(-1);
    } )

    $('#skill4clear').click( function() {
        if( parseInt( $(".countdownArea").eq(4).text() ) >= 6 )
            $(".skillarea").eq(4).removeClass('active'), 
            document.getElementById("skillIcon4").src = "res/icon4.png";
        $(".countdownArea").eq(4).text("0");
    } )
    
    $(window).keydown(function(e){
      var i = 0;
      switch(e.keyCode){
        case 97:
        case 49:
          i = 0;
        break;
        case 98:
        case 50:
          i = 1;
        break;
        case 99:
        case 51:
          i = 2;
        break;
          default:
         i=100;
      }
        skilltimer(i);
    });
    
    function skill4change(val) {
        var _self = $(".countdownArea").eq(4);

        var temp = parseInt( _self.text() )
        _self.text( ( temp + val ).toString() );

        
        if( temp == 5 && val == 1 ) 
            $(".skillarea").eq(4).addClass('active'),
            document.getElementById("skillIcon4").src = "res/icon4_active.png";

        if( temp == 6 && val == -1 )
            $(".skillarea").eq(4).removeClass('active'), 
            document.getElementById("skillIcon4").src = "res/icon4.png";
    }

    function skilltimer(i) {
        var _self = $(".countdownArea").eq(i);
        
        if( i == 4 ) return;

        if( $(".skillarea").eq(i).hasClass("active") ) {
            counterClear(i);
        } else {
            countTimer[i] = setInterval( function() {

                var next = _self.text() - 1;
                _self.text(next);
                if(next <= 0) counterClear(i);
    
            }, 1000 );

            $(".skillarea").eq(i).addClass("active");

            var temp = i.toString();
            document.getElementById("skillIcon" + temp).src = "res/icon" + temp + "_active.png";
    
        }
    //  	$(".skillarea").eq(i).toggleClass("active");
    }
    
    function counterClear(i) {
        clearInterval(countTimer[i]);
        $(".countdownArea").eq(i).text(init[i]);
        $(".skillarea").eq(i).removeClass('active');

        var temp = i.toString(); 
        document.getElementById("skillIcon" + temp).src = "res/icon" + temp + ".png";
    }
    
    
});