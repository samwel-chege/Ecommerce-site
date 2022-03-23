var UpdateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < UpdateBtns.length; i++){
    UpdateBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:',productId, 'action:',action)

        console.log('USER:',user)
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            console.log('User is authenticated, sending data...')
        }
    })
}

// create an if statement inside cart.js and console the user and two differnt statements depending on whether the 
// user is logged in or not 