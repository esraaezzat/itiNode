
$.ajax('/api/student',{

    accepts:'application/json',
    success:function(data,status){
        var body = $('body');
        data.forEach(student => {
            var elem = '<div>name : '+ student.name +'------------'+' age :  '+ student.age+ '</div>'
        body.append(elem);
        });
    },

    error:function(ajax,status,err){
        var body = $('body');
        var elem = '<div> Error : ' + err
    }
})



$('#btnsubmit').on('click',function(e){
    debugger;
    var student_name = $('input[name="name"]').val();
    var student_age = $('input[name="age"]').val();
    $.ajax('/api/student',{
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify({
            name:student_name,
            age:student_age
        }),

        error:function(ajax,status,err){
            debugger;
            var body = $('body');
            var elem = '<div> Error : ' + err
        }
    })
})