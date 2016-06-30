var neonLogin = neonLogin || {};
var LoginSetup = LoginSetup || {};

$(".login-header").click( function(){

    if( $(".login-header .login-content").is(":visible")  ){


        $(".login-header .login-content").hide();

    }else{

        $(".login-header .login-content").show();

    }


} );


function R_Login(){

    $("#login_plan").show();
    $("#setup_plan").hide();
}


function ShowSetDlg( mdid ){

    $("#login_plan").hide();
    $("#setup_plan").show();
}



$(document).ready(function () {

    neonLogin.$container = $("#form_login");

    neonLogin.$container.validate({
        rules: {
            username: {
                required: true
            },

            passeord_s: {
                required: true
            },

        },
        messages: {
            username: {
                required: '请输入用户名.'
            },

            passeord_s: {
                required: '请输入密码.'
            }
        },

        highlight: function (element) {
            $(element).closest('.input-group').addClass('validate-has-error');
        },


        unhighlight: function (element) {
            $(element).closest('.input-group').removeClass('validate-has-error');
        },

        submitHandler: function (ev) {

            var httpURL =  "https://" +
                           $("#link_adder").val() + ":" +
                           $("#link_port").val()  + "/" +
                           $("#link_dir").val();

            //var pws_md5 = $.md5(  $("#passeord_s").val() );
            //index.php/VDI/Index/Login?n=name&p=pwd
            var turl =  httpURL +"/index.php/VDI/Index/Login?u=" +  $("#username").val()  +"&p=" + $("#passeord_s").val() ;
            //var turl =  httpURL +"/login.jsp?username=" +  $("#username").val()  +"&password=" +
            //            $("#passeord_s").val() ;

            JsonData_get_Android(  turl );

        }
    });


    LoginSetup.$container = $("#form_setup");

    LoginSetup.$container.validate({
        rules: {
            link_adder: {
                required: true
            },

            link_port: {
                required: true
            }


        },
        messages: {
            link_adder: {
                required: '请设置管理端地址或IP.'
            },

            link_port: {
                required: '请设置通讯端口号.'
            }
        },

        highlight: function (element) {
            $(element).closest('.input-group').addClass('validate-has-error');
        },


        unhighlight: function (element) {
            $(element).closest('.input-group').removeClass('validate-has-error');
        },

        submitHandler: function (ev) {

            $("#login_plan").show();
            $("#setup_plan").hide();

            Config_to_Android(  $("#link_adder").val() , $("#link_port").val(), $("#link_dir").val() );

        }
    });

});

