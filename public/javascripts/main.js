

//front



/**delete */
$('body').on('click','.btn',function(e){
    var studentId = $(this).attr('id');
    console.log(JSON.stringify({
        _id:studentId
    }))
    debugger;
        $.ajax('api/student/delete/'+studentId,{
            method:'delete',
            success:function(){
                alert("deleted");
            }
        })
    
    })


/*get*/
$.ajax('/api/student/getAllStudents',{

    accepts:'application/json',
    contentType:'application/json',    
    success:function(data,status){
        debugger;
        var body = $('body');
        data.forEach(student => {
            
            var elem = '<div>name : '+ student.name +'------------'+' age :  '+ student.age+ ' <button class ="btn" id='+student._id+'>Delete</button></div><br>'
        body.append(elem);
        });
    },

    error:function(status,err){
        var body = $('body');
        var elem = '<div> Error : ' + err +'</div>';
        body.append(elem);
    }
})


/***post**** */
$('#btnsubmit').on('click',function(e){
 debugger;
    var student_name = $('input[name="name"]').val();
    var student_age = $('input[name="age"]').val();
    var student_password = $('input[name="password"]').val();
    $.ajax('/api/student',{
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify({
            name:student_name,
            age:student_age,
            password:student_password
        }),
        success:function(data,status){
            var body = $('body');
            var elem = '<div>name : '+ data.name +'------------'+' age :  '+ data.age+ '</div>'
            body.append(elem);
        },
        error:function(ajax,status,err){
        
            var body = $('body');
            var elem = '<div> Error : ' + err
        }
    })
})


