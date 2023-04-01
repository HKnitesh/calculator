let string = "";
var input = document.getElementById('number01');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'AC') {
            string = '';
            input.value = string;
        } else if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
            if(e.target.innerHTML === buttons){
                string='';
            }
        } else if (e.target.innerHTML === 'DE') {
            string = string.slice(0,-1);
            input.value = string;
        } 
        
        else {
            console.log(e.target);
            string += e.target.innerHTML;
            input.value = string;
        }

    })

});