
const showModal=document.querySelectorAll('.show-modal');
const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');



for (i=0; i<showModal.length;i++)
showModal[i].addEventListener('click',function() {
modal.classList.remove('hidden')
});

//add eventlisterner to cloe modal button to set hidden class to ur modal
closeModal.addEventListener('click',function() {
    modal.classList.add('hidden')
    });
