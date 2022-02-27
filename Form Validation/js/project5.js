document.querySelector('#name').addEventListener('keydown',function(){
    let name=document.querySelector('#name').value
    if(name.match(/^[a-zA-Z]{3,30}$/)){
        document.querySelector('#name').style.border='2px solid green'
    }else{
        document.querySelector('#name').style.border='2px solid red'
    }
})

document.querySelector('#email').addEventListener('keydown',function(){
    let email=document.querySelector('#email').value
    if(email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        document.querySelector('#email').style.border='2px solid green'
    }else{
        document.querySelector('#email').style.border='2px solid red'
    }
})

document.querySelector('#pswd').addEventListener('keydown',function(){
    let password=document.querySelector('#pswd').value
    if(password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        document.querySelector('#pswd').style.border='2px solid green'
    }else{
        document.querySelector('#pswd').style.border='2px solid red'
    }
})

document.querySelector('#number').addEventListener('keydown',function(){
    let email=document.querySelector('#number').value
    if(email.match(/^[0-9]/)){
        document.querySelector('#number').style.border='2px solid green'
    }else{
        document.querySelector('#number').style.border='2px solid red'
    }
})

document.querySelector('#submit').addEventListener('click',function(){
    let x=document.querySelectorAll('.inputs')
    for( y of x){
        if(x.style.border=='green'){
            document.querySelector('#validation').innerHTML='Form valid Successfully'
        }else{
            document.querySelector('#validation').innerHTML='Form valid not Successfully'
        }
    }
})