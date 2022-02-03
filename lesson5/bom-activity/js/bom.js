const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let inpItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const delBtn = document.createElement('button');

    listItem.textContent = inpItem;
    delBtn.textContent = '❌';
    delBtn.ariaLabel = 'Remove' + listItem
    listItem.appendChild(delBtn);
    list.appendChild(listItem);

    delBtn.addEventListener('click', function(){
        list.removeChild(listItem);
    })

    input.focus();
})

