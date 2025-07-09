function getInputTextFiledValue(id) {
    const inputTextvalue = document.getElementById(id).innerText;
    const inputText = parseFloat(inputTextvalue);
    return inputText;
}

function getFieldInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function showSectionById(id) {
    document.getElementById('Donation-section').classList.add('hidden');
    document.getElementById('History-section').classList.add('hidden');
    document.getElementById('Donation-section2').classList.add('hidden');
    document.getElementById('Donation-section1').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}