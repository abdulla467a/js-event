function handleJustFunctionClick()
{
    const p =document.getElementById('clicking-method');
    p.innerText = 'set by using function';
}

document.getElementById('hve').addEventListener('click',function(){
    const p =document.getElementById('clicking-method');
    p.innerText = 'set by direct add listener';
})

document.getElementById('update-name').addEventListener('click',function(){
    const nameField = document.getElementById('name-input-field');
    const p =document.getElementById('clicking-method');
   p.innerText = nameField.value;
   nameField.value ='';
})