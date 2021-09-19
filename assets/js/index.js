


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

async function handle_submit_form(user_id){
    let forms = $('#update_user_'+user_id).serializeArray()
    let data = {}
    for(let input of forms ){
        console.log(input)
        data[input.name] = input.value
       
    }
    
    let response = await fetch(`http://localhost:3000/api/users/${data.id}`,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    let response_object =await response.json()
    console.log(response_object)
}
// JSON.stringify(data)

// $("#update_user").submit(function(event){
//     event.preventDefault()

//     var unindexed_array = $(this).serializeArray()
//     var data = {}

//     $.map(unindexed_array,function(n,i) {
//         data[n['name']] = n['value']
//     })
//     console.log(unindexed_array);
//     console.log(data);

//     var request = {
//         "url": `http://localhost:3000/api/users/${data.id}`,
//         "method" :"PUT",
//         "data": data
//     }
// })

if(window.location.pathname=='/'){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method" :"DELETE"
        }

        if(confirm("Do you really want to delete?")){
            $.ajax(request).done(function(response){
                alert("Data Delete Succesfully")
                location.reload()
            })
        }
    })
}
