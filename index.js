let upload_btn = $("#upload_file")
upload_btn.on("change",function(e){
    let ext = upload_btn.val().split('.').pop().toLowerCase()

    if($.inArray(ext,['gif','png','jpg','jpeg']) == -1){
        console.log("error")
        $("#error_msg").addClass("show")
    }
    else{
        $("#error_msg").removeClass("show")
        let uploaded_img = URL.createObjectURL(e.target.files[0])
        $("#uploaded_view").append('<img src="'+uploaded_img+'" />')
    }
})