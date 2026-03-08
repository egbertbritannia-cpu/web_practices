// File: js/ex17script.js

function swapNumbers() {

    // Get values from box inputs through DOM
    let a = document.getElementById('numA1').value;
    let b = document.getElementById('numB1').value;
 
    if (a === "" || b === "") {
        alert("please enter both numbers!");
        return;
    }
 
    let temp = a;
    a = b;
    b = temp;
 
    document.getElementById('result1').innerText = `After swap: A = ${a}, B = ${b}`;
}

function findLargest() {
    let a = document.getElementById('numA2').value;
    let b = document.getElementById('numB2').value;
    let c = document.getElementById('numC2').value;

    if (a === "" || b === "" || c === "") {
        alert("Please enter all three numbers!");
        return;
    }

    let largest = Math.max(a, b, c);
    document.getElementById('result2').innerText = `The largest number is: ${largest}`;
}

function checkSameSign() {
    let a = parseFloat(document.getElementById('numA3').value);
    let b = parseFloat(document.getElementById('numB3').value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result = (a > 0 && b > 0) || (a < 0 && b < 0);
    document.getElementById('result3').innerText = `Numbers have the same sign: ${result}`;
}

function organizeNumbers(){
    let a = parseFloat(document.getElementById('numA4').value);
    let b = parseFloat(document.getElementById('numB4').value);
    let c = parseFloat(document.getElementById('numC4').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers!");
        return;
    }

    let numbers = [a, b, c];
    numbers.sort((x, y) => x - y);
    document.getElementById('result4').innerText = `Numbers in ascending order: ${numbers.join(', ')}`;
}

function taxiCharge(){
    // Số km ≤ 1 giá 15000đ
    // 1 < số km ≤ 5 giá 13500đ
    // Số km > 5 giá 11000đ
    // Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

    let km = parseFloat(document.getElementById('numA5').value);

    if (isNaN(km) || km < 0) {
        alert("Please enter a valid distance!");
        return;
    }

    let charge = 0;
    if (km <= 1) {
        charge = km * 15000;
    } else if (km <= 5) {
        charge = 1 * 15000 + (km - 1) * 13500;
    } else {
        charge = 1 * 15000 + 4 * 13500 + (km - 5) * 11000;
    }

    if (km > 120) {
        charge *= 0.9; // Apply discount
    }

    document.getElementById('result5').innerText = `Total taxi charge: ${charge.toLocaleString()} VND`;
}

function electricityConsumed(){
    // 50 số đầu giá 1678đ/số
    // 51-100 số giá 1734đ/số
    // 101-200 số giá 2014đ/số
    // 201-300 số giá 2536đ/số
    // 301-400 số giá 2834đ/số
    // Trên >400 số giá 2927đ/số

    let consumption = parseFloat(document.getElementById('numA6').value);

    if (isNaN(consumption) || consumption < 0) {
        alert("Please enter a valid consumption amount!");
        return;
    }
    let charge = 0;
    if (consumption <= 50) {
        charge = consumption * 1678;
    } else if (consumption <= 100) {
        charge = 50 * 1678 + (consumption - 50) * 1734;
    } else if (consumption <= 200) {
        charge = 50 * 1678 + 50 * 1734 + (consumption - 100) * 2014;
    } else if (consumption <= 300) {
        charge = 50 * 1678 + 50 * 1734 + 100 * 2014 + (consumption - 200) * 2536;
    } else if (consumption <= 400) {
        charge = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (consumption - 300) * 2834;
    } else {
        charge = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + (consumption - 400) * 2927;
    }
    document.getElementById('result6').innerText = `Total electricity charge: ${charge.toLocaleString()} VND`;
}

function calculateExpression(){
    let x = parseFloat(document.getElementById('numA7').value);

    if (isNaN(x)) {
        alert("Please enter a valid number!");
        return;
    }
    let result = (x * x) + (2 * x) + 1;
    document.getElementById('result7').innerText = `Result of the expression x^2 + 2x + 1 is: ${result}`;
}

function isPrimeNumber(){ 
    let number = parseFloat(document.getElementById('numA8').value);

    if (isPrime(number)) { 
        document.getElementById('result8').innerText = `${number} is a prime number`;
    } else { 
        document.getElementById('result8').innerText = `${number} is not a prime number`;
    }  
}

function isPrime(x){ 
    if (x == 2 || x == 3) return true;
    if(x < 2) return false
    for(let i =2; i <= Math.sqrt(x); i++){
        if ( x % i === 0) return false;
    }
    return true;
} 

function mutipleTable(){ 

    let result = "";

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            result += `${i} x ${j} = ${i*j}&nbsp;&nbsp;&nbsp;`;
            if(j == 10) result += `<br>`;
        }
    }

    document.getElementById('result9').innerHTML = result;
}

function displayMutipleTable(){ 

    let result = "<table border='1' cellpadding='25px'>";

    for(let i = 1; i <= 10; i++){
        result += "<tr>";
        for(let j = 1; j <= 10; j++){
            result += `<td>${i} x ${j} = ${i*j}</td>`;
        }
        result += "</tr>";
    }

    result += "</table>";

    document.getElementById('result9').innerHTML = result;
}