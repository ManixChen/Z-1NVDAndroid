/**
 * Created by GaoChong on 2015/7/27.
 */
function Android_to_ExitApp(){

    ShowSetDlg( 'modal-exit' );
}


function _ExitSystem(){

    GC_Android.HTML_CALL_COMMAND('1000'); //退出
    return false;
}

function Android_to_msg( title_str, content_str,style_n ){

    ShowMessage_T( title_str, content_str,style_n );
}


function VPCList_get_Android(  android_get_httpurl ,session_id ){


    //var urlStr = android_get_httpurl + "/test2.jsp";


    var urlStr = android_get_httpurl + "/index.php/VDI/Index/Mobile_list?id=" + session_id;

   // alert( urlStr );

    GC_Android.HTML_GET_VMLIST( urlStr );

}


function Android_set_jsondata(  Json_str  ){


    if ( Json_str == 'null'  ){

        ShowMessage_T('','无法获取桌面列表，请与管理联系...',2);
        return false;
    }

    ShowMessage_T('','正在载入桌面列表...',1);

    /*
    //arr_vmware
        "id": 12,
        "name": "xxx",
        "os_name": "Win7",
        "memory_size": "1024",
        "cpu_count": "2",
        "current_status": 0,
        "server_ip": "192.168.50.104"
    *
    * */


    var vpclist_json = JSON.parse( Json_str );

    if(  vpclist_json.result != 0 ){

        ShowMessage_T('','无法获取桌面列表，请与管理联系...',2);
        return false;
    }

   // alert( vpclist_json.arr_vmware.length );
    var add_li = "";
    $("#myvdList" ).empty();
    for(  var i= 0 ; i<  vpclist_json.arr_vmware.length ;i++ ){

        add_li +="<li>";
        add_li +="<div class=\"tab-con-href\">";
        add_li +="<div class=\"img\">";

        add_li +="<a href=\"javascript:detail('"+  vpclist_json.arr_vmware[i].id +"');\">";

        if ( ((vpclist_json.arr_vmware[i].os_name).substr(0,3)).toLocaleUpperCase() == "WIN" ){

            if(  vpclist_json.arr_vmware[i].current_status == 0 ) {

                add_li +="<img src=\"ico/1windows.png\" alt=\"VD1\" title=\"VD1\">";

            }else{

                add_li +="<img src=\"ico/0windows.png\" alt=\"VD1\" title=\"VD1\">";
            }


        }else{

            if(  vpclist_json.arr_vmware[i].current_status == 0 ) {

                add_li +="<img src=\"ico/1linux.png\" alt=\"VD1\" title=\"VD1\">";

            }else{

                add_li +="<img src=\"ico/0linux.png\" alt=\"VD1\" title=\"VD1\">";
            }

        }

        //add_li +="<i class=\"hoticon\"></i>";
        add_li +="</a>";
        add_li +="</div>";
        add_li +="<h4>"+  vpclist_json.arr_vmware[i].name +"</h4>";
        add_li +="<p>系统：<i>"+ vpclist_json.arr_vmware[i].os_name  +"</i></p>";
        //add_li +="<p>属性：<i>未知</i></p>";
        if(  vpclist_json.arr_vmware[i].current_status == 0 ) {
            add_li += "<p>状态：<i>" + "运行" + "</i></p>";
        }else{
            add_li += "<p>状态：<i>" + "关闭" + "</i></p>";
        }
        add_li +="</div>";
        add_li +="</li>";

        $("#myvdList").append( add_li  );

        add_li = "";

    }

    if( vpclist_json.count >= 4 ){

        $("#span_n").height("100px");

    }else{


    }

}

function detail( os_name  ){

    GC_Android.SetVM_ID( os_name );
    window.location.href = './detail.html';
}