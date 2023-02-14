function Go(){
    var create = document.createElement('p')
    var div1 = document.querySelector('#principaldiv')
    
    var catchinput1 = document.querySelector('#input1')
    var input1convert = String(catchinput1.value)

    var catchinput2 = document.querySelector('#input2')
    var input2convert = String(catchinput2.value)

    var catchinput3 = document.querySelector('#input3')
    var input3convert = String(catchinput3.value)

    var catchinput4 = document.querySelector('#input4')
    var input4convert = String(catchinput4.value)

    function createp(a, b, c){
        a.innerText = '*Error: Put all informations correctly'
        a.style.fontSize = '12px'
        a.style.color = 'red'
        b.appendChild(a)

        c.style.border = '1px solid red'
    }
if(input1convert == ''){
    createp(create, div1, catchinput1)
    }
else if(input2convert == ''){
    createp(create, div1, catchinput2)
}
else if(input3convert == '' || input3convert.includes('@') == false || input3convert.includes('.com') == false){
    createp(create, div1, catchinput3)
}
else if(input4convert == ''){
    createp(create, div1, catchinput4)
}else{
    div1.style.visibility = 'hidden'
}

setTimeout(() =>{
    div1.removeChild(create)
}, 4000)

if(input1convert != ''){
    catchinput1.style.border = 'none'
    div1.removeChild(create)
}

if(input2convert != ''){
    catchinput2.style.border = 'none'
    div1.removeChild(create)
}

if(input3convert != '' && input3convert.includes('@') == true){
    catchinput3.style.border = 'none'
    div1.removeChild(create)
}

if(input4convert != ''){
    catchinput4.style.border = 'none'
    div1.removeChild(create)
}
    }

function Help(){
    document.querySelector('#helpd').style.marginLeft = '0px'
}

function Close(){
    document.querySelector('#helpd').style.marginLeft = '-300px'
}

