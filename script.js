let input = document.querySelector('#inputBox');
let btn = document.querySelectorAll('button');

let str = "";
let arr = Array.from(btn);

arr.forEach(btn => {
    btn.addEventListener('click',(e)=> {
        if(e.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
        } else if (e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            input.value = str;
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
       
    })
})