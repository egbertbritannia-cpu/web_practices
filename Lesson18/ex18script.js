// Bài 1: N số fibonaci
// Hiển thị N số Fibonaci đầu tiên
// Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci
// Yêu cầu: Không dùng vòng lặp
function fibonacci(fList, i){
    if (i < 0) return fList; 
    else if (i === 1){
        fList[1] = 1;
        fList[0] = 0;
    } 
    else if (i > 0){ 
        fibonacci(fList, i - 1);   
        fList[i] = fList[i-1] + fList[i-2];
    } 
    return fList;
} 

function generateFibonacci(inputId) {

    const element = document.getElementById(inputId).value; 
    const nValue = parseInt(element);
    if (isNaN(nValue) || nValue < 0) {
        alert("Please enter a valid non-negative number!");
        return;
    }
    var f = new Array(nValue);
    fibonacci(f, nValue-1);
    var result = f.slice(0, nValue).join(", ");
    document.getElementById('fibonacciResult').textContent = `${result}`;
}
 
// Bài 2: Đảo ngược số
// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
// Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321
function inverseNumber(inputId) { 
    const element = document.getElementById(inputId).value; 

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        alert("Please enter a valid non-negative number!");
        return;
    }  
    document.getElementById('inverseResult').textContent = String(element).split('').reverse().join('');
} 
 
// Bài 3: Viết hàm chuyển số thành chữ
// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám
// Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999
function convertNumberToWords(inputId) {
    var numWords = ['không','một', 'hai', 'ba', 'bốn', 
                'năm','sáu', 'bảy', 'tám', 'chín', 'mười']; 
    var num = document.getElementById(inputId).value; 
    if(num < 0 || num > 9999){
        alert("Please enter a valid non-negative number!");
        return;
    }

    var arr = new Array();
    while (num > 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    } 

    var result = '';
    for (var i = arr.length - 1; i >= 0; i--) { 
        if(i === 3 && arr[i] != 0) 
            result += numWords[arr[i]] + ' nghìn ';
        else if(i === 2 && arr[1] === 0 && arr[0] === 0){
            result += numWords[arr[i]] + ' trăm ';
            break;
        }
        else if(i === 2) result += numWords[arr[i]] + ' trăm ';
        else if(i === 1 && arr[i] === 1) result += ' mười ';
        else if(i === 1 && arr[i] != 0) result += numWords[arr[i]] + ' mươi ';
        else if(i === 1 && arr[i] === 0 && arr[0] != 0) result += 'lẻ ';
        else result += numWords[arr[i]] + ' ';  
    }
    document.getElementById('convertResult').textContent = result.trim();
} 
 