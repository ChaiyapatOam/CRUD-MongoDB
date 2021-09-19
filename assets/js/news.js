// PUT news
async function handle_submit_form(news_id){
    let forms = $('#update_news_'+news_id).serializeArray()
    let data = {}
    for(let input of forms ){
        console.log(input)
        data[input.name] = input.value
    
    }
    
    let response = await fetch(`http://localhost:3000/api/news/${data.id}`,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    let response_object =await response.json()
    console.log(response_object)
}