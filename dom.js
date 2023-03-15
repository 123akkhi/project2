var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
var input = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'green';

var SecondItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'green';

//Queryselectorforall//

var titles = document.querySelectorAll('.title');

console.log(title);
title[0].textContent = 'Hello';

var odd = document.querySelectorAll('.li:nth-child(odd)');

for(var i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}