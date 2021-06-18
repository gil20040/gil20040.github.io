const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

  button.addEventListener('click', function() {
    if (fav.value != '') {
        //create elements in the list - list item and button
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        //change properties
        li.textContent = fav.value;
        deletebutton.textContent = '❌';
        // add the button to the li
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click',function() {
            output.removeChild(li);
            fav.focus;
        });
        fav.value = '';
        fav.focus;
        }
    });