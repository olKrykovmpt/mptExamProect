let contentVue=document.querySelector('.content')
let button=document.querySelector('.btn')

button.addEventListener('click', function (evt){
    evt.preventDefault();
    contentVue.classList.toggle('hidden');
});