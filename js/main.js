
Main()

function Main(){
    var radio_btn =document.querySelectorAll('.form-check-input')
    radio_btn.forEach(radio=> {
        radio.addEventListener('click', ()=>radiobtnHandler(radio))
    })
}

function radiobtnHandler(radio){
    const commentBox = document.querySelector('#text_box-b')
    if(radio.id == 'flexRadioDefault1' || radio.id == 'flexRadioDefault2'){
      commentBox.hidden = true;
    }
    else{
      commentBox.hidden = false;
    }    
}