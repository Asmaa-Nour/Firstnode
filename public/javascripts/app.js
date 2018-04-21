$.ajax('/users',{
    accepts:'application/json',
    success:function(data,status){
        var $body=$('body');
        data.forEach(function(user){
        var $elem='<div>'+ user.username+ ' - '+ user.age+'</div>';
        $body.append($elem);
        });
    }
})

$('#submition').on('click',function(e){
    var username=$('input[name="username"]').val();
    var age=$('input[name="age"]').val();
    $.ajax('/users',{
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify({username:username,age:age}),
        success:function(ajax,status,err){
            debugger;
        }
    });
});