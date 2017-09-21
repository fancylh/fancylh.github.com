  $('#jsSearchBtn').on('click',function(){
        search_click()
    });
    //搜索表单键盘事件
    $("#txtInput").keydown(function(event){
        if(event.keyCode == 13){
             $('#jsSearchBtn').trigger('click');
        }
    });
  //顶部搜索栏搜索方法
function search_click(){
    var type = $('#jsSelectOption').attr('data-value'),
        keywords = $('#txtInput').val(),
        request_url = '';
    if(keywords == ""){
        return
    }
    if(type == "course"){
        request_url = "/course/list?keywords="+keywords
    }else if(type == "paper"){
        request_url = "/paper/list?keywords="+keywords
    }
    window.location.href = request_url
}