function numberGenaret() {
    const genaretPin = Math.round(Math.random() * 100000);
    if (genaretPin > 9999) {
        document.getElementById('genaret-pin-input').value = genaretPin;
    }
    else{
        numberGenaret()
    }
}
document.getElementById('pin-genaret').addEventListener('click', function(){
    numberGenaret();
});

document.getElementById('type-body').addEventListener('click', function(event){
    const numPade = event.target.innerText;
    const setNumber = document.getElementById('macheing-input');
    if (isNaN(numPade)) {
        if (numPade == 'C') {
            setNumber.value = '';
        }
        else if(numPade == '<'){
            console.log("me clicked <");
        }
    }
    else{
        const prevNumber = setNumber.value;
        const newNumber = prevNumber + numPade;
        setNumber.value = newNumber;
    }
});

document.getElementById('macheing-submit').addEventListener('click', function(){
    const inputNumber = document.getElementById('genaret-pin-input').value;
    const typeNumber = document.getElementById('macheing-input').value;
    const match = document.getElementById('match');
    const cantMatch = document.getElementById("can't-match");
    if (inputNumber == typeNumber) {
        match.style.display = 'block';
        cantMatch.style.display = 'none';
    }
    else{
        match.style.display = 'none';
        cantMatch.style.display = 'block';
    }
});

