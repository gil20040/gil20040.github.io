const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click',function()) {
    if (input.value != '') {
        //create elements in the list list item and button
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        //change properties
        li.textContent = input.value;
        deletebutton.textContent = '❌';
        // add the button to the li
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click',function()){
            list.removeChild(li);
            input.focus;
        }
        input.value = '';
        input.focus;
        }


}