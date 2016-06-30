/**
 * Created by GaoChong on 2015/7/27.
 */


function StartVDesktop( v_id ,cid) {
    var opts = {
        lines: 13, // The number of lines to draw
        length: 11, // The length of each line
        width: 5, // The line thickness
        radius: 17, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        color: '#FFF', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 'auto', // Top position relative to parent in px
        left: 'auto' // Left position relative to parent in px
    };
    var target = document.createElement("div");
    document.body.appendChild(target);
    var spinner = new Spinner(opts).spin(target);
    var overlay = iosOverlay({
        text: "载入中",
        spinner: spinner
    });

    Start_VDesktop(  v_id ,cid );
/*
    window.setTimeout(function() {
        overlay.update({
            icon: "../iosOverlay/img/check.png",
            text: "纯属测试"
        });
    }, 3e3);
*/
    window.setTimeout(function() {
        overlay.hide();
    }, 5e3);

    return false;
}









