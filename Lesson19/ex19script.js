
 
// Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
function findMinMax() {
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


// Bài 02
// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
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


// Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
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



// Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
// Bước 1: Sắp xếp mảng theo thứ tự tăng dần
// Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
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


 