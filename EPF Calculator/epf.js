function calculateEPF() {
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    const epfPercentage = parseFloat(document.getElementById('epfPercentage').value);

    if (isNaN(monthlySalary) || isNaN(epfPercentage)) {
        alert('Please enter valid numbers.');
        return;
    }

    const annualSalary = monthlySalary * 12;
    const annualEPF = (annualSalary * epfPercentage) / 100;

    document.getElementById ('annualEPF').textContent = ` ${annualEPF.toFixed(2)}`
}