const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');
const displayBill = document.getElementById('displayBill');

function calculate() {
    const billValue = billAmount.value;
    const tipValue = tipPercentage.value;
    const totalValue = billValue * (1 + tipValue / 100);
    displayBill.innerText = totalValue.toFixed(2);
}