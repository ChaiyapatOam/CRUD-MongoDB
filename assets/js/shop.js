// PUT shop
async function handle_submit_form(shop_id){
    let forms = $('#update_shop_'+shop_id).serializeArray()
    let data = {}
    for(let input of forms ){
        console.log(input)
        data[input.name] = input.value
    
    }
    
    let response = await fetch(`http://localhost:3000/api/shop/${data.id}`,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    let response_object =await response.json()
    console.log(response_object)
}