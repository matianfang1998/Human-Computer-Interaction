function myFunction() {

    document.getElementById("predictedResult").innerHTML = "";

    $('#clear').hide();
}

function search() {


    $('#load').show();

    $("form").submit(function (evt) {
        //$('#loader-icon').show(); 

        evt.preventDefault();

        //$('#loader-icon').show();
        var formData = new FormData();//声明一个FormData对象
        formData.append('file', document.getElementById("file-1").files[0]);
        

        $.ajax({
            url: 'imgUpload',
            type: 'POST',
            data: formData,
            //async: false,
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,

            success: function (response) {
                $('#load').hide();
                $('#row1').show();
                //$('#clear').show();
                console.log(response);
                localStorage.setItem("tags",response.tags);
                //return ;
                //document.getElementById("predictedResult").innerHTML= response;
                for(var i=0;i<response.total_item;++i){
                    document.getElementById("img"+String(i)).src = response["image"+String(i)].url;
                    document.getElementById("img-tag-"+String(i)).innerText = response["image"+String(i)].tag;
                } 

                $('#table').show();
                $('#clear').show();


            }
        });
        return false;
    })
}