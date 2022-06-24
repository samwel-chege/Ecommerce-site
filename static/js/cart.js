var UpdateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < UpdateBtns.length; i++){
    UpdateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:',productId, 'action:',action)

        console.log('USER:',user)
        if (user == 'AnonymousUser'){
            addCookieItem(productId, action)
        }else{
            updateUserOrder(productId , action)
        }
    })
}

function addCookieItem(productId, action){
    console.log('Not logged in')
}


function updateUserOrder(productId, action){
    console.log('User is authenticated, sending data...')

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken, //pass the csrftaken variable in the fetch() call
            //this will allow us to see changes appear in our cart immediately once we render them
        },
        body:JSON.stringify({'productId': productId, 'action':action})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data:', data)
        location.reload()
    })
    
}

// we query all the buttons by the class of update cart and add an event handler in  a loop
// create an if statement inside cart.js and console the user and two differnt statements depending on whether the 
// user is logged in or not 