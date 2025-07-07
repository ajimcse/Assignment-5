document.getElementById('mine-click-btn').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number').value;
    const inputValue = parseFloat(inputNumber);
    const addMe = document.getElementById('add-me-btn').innerText;
    const addInerTextValue = parseFloat(addMe);


    if (!isNaN(inputValue)) {
        const addBalance = inputValue + addInerTextValue;
        document.getElementById('add-me-btn').innerText = addBalance;
        document.getElementById('input-number').value = '';
       
       const p = document.createElement('p');
        p.innerText = `${addInerTextValue}, Total: ${addBalance}`;
        document.getElementById('History-section').appendChild(p);
        
    }
    else {
        alert('the worin number')
    }


})
document.getElementById('Donation-btn').addEventListener('click', function () {
    showSectionById('Donation-section')
})

document.getElementById('History-btn').addEventListener('click', function () {
    showSectionById('History-section')
})

