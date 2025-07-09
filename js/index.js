document.getElementById('mine-click-btn').addEventListener('click', function () {
    const inputValue = getFieldInputValue('input-number');
    const inputText = getInputTextFiledValue('add-me-btn');
    const mainBalance = getInputTextFiledValue('main-balance');

    if (!isNaN(inputValue) && inputValue > 0 && inputValue <= mainBalance){
        const newMainBalance = mainBalance - inputValue;
        const newAddMeValue = inputText + inputValue;
        document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);
        document.getElementById('add-me-btn').innerText = newAddMeValue.toFixed(2);
        document.getElementById('input-number').value = '';

        const historyContainer = document.getElementById('History-section');
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();
        const historyDiv = document.createElement('div');
        historyDiv.style.fontWeight = 'bold';
        historyDiv.style.fontSize = '20px';
        historyDiv.style.border = '1px solid #ccc';
        historyDiv.style.padding = '20px';
        historyDiv.style.margin='20px'
        historyDiv.style.marginBottom = '20px';
        historyDiv.style.borderRadius = '5px';
        historyDiv.style.backgroundColor = '#f9f9f9';

        historyDiv.innerText = `${inputValue} TK Donate for the Flood in Noakhali, Bangladesh,
         Bangladesh-Date:${dateString} Time:${timeString}`;

        historyContainer.appendChild(historyDiv);
        alert('❤️Congratulations❤️, you have donated in every way.');

    }
    else {
        alert('Please give correct number')
    }

})

document.getElementById('mine-click-btn2').addEventListener('click', function () {
    const inputValue2 = getFieldInputValue('input-number2');
    const inputText2 = getInputTextFiledValue('add-me-btn2');
    const mainBalance = getInputTextFiledValue('main-balance');


    if (!isNaN(inputValue2)) {
        const inputnNegtive = mainBalance - inputValue2;
        const inputPrgitive = inputText2 + inputValue2;
        document.getElementById('main-balance').innerText = inputnNegtive.toFixed(2);
        document.getElementById('add-me-btn2').innerText = inputPrgitive.toFixed(2);
        document.getElementById('input-number2').value = '';


    }

    else {
        alert('Please give correct number')
    }

})




document.getElementById('Donation-btn').addEventListener('click', function () {
    showSectionById('Donation-section')
})


document.getElementById('History-btn').addEventListener('click', function () {
    showSectionById('History-section')
});




