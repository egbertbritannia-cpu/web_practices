


window.addEventListener('DOMContentLoaded', () => {
        document.getElementById('findMaxNumber').addEventListener('click', ()   => renderResult (findMaxNumber(getInputValue()))); //findMaxNumber(input)
        document.getElementById('avgCal').addEventListener('click', ()          => renderResult (avgCal(getInputValue())));
        document.getElementById('removeDuplicate').addEventListener('click', () => renderResult(removeDuplicate(getInputValue())));
        document.getElementById('insertAndSort').addEventListener('click', ()     => renderResultEx04(insertAndSort(getInputValueEx04(),  getElementInput())));
});

function getInputValue() {
    return document.getElementById('input')?.value ?? '';
}

function getInputValueEx04() {
    return document.getElementById('input2')?.value ?? '';
}

function getElementInput() {
    return document.getElementById('elementInput')?.value ?? '';
}

function renderResult(output){
        document.getElementById('output').textContent = `${output}`;
}

function renderResultEx04(output){
        document.getElementById('output2').textContent = `${output}`;
}

/* 
Bài 01
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
*/
function findMaxNumber(input){
        if(!input.trim()) return "Please enter data";
        let arr = input.split(","); 
        arr = arr.map(item => item.trim());
        arr = arr.map(item => Number(item)); 
        
        //return [Math.max(...arr), Math.min(...arr)];
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return `Max: ${max} at ${arr.indexOf(max)}, Min: ${min} at ${arr.indexOf(min)}`;
}

/* 
Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. 
Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
 */

function isPrime(n){
        if(n<2) return false;
        if(n === 2) return true; 
        for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0) return false;
        }
        return true;
}

function avgCal(input){ 
        if(!input.trim()) return "Please enter data";
        let arr =input.split(","); 
        arr = arr.map(item => item.trim());
        arr = arr.map(item => Number(item));

        let avg = 0;
        let count = 0;
        for (let item of arr) {
                if(isPrime(item)){
                        count++;
                        avg += item;
                }
        }
        if(count === 0) return 'there is no prime numbers'
        else return avg/count;
}

/* 
Bài 03
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau 
thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
 */
function removeDuplicate(input){ 
        if(!input.trim()) return "Please enter data";
        let arr = input.split(","); 
        arr = arr.map(item => item.trim());
        arr = arr.map(item => Number(item));

        arr.forEach((item, i) => {
                for(let j = i+1; j < arr.length; j++) {
                        if(arr[i] === arr[j]) {
                                arr.splice(j,1);
                                j--;
                        }
                }
        }); 

        return arr;
}

/* 
Bài 04: Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
        Bước 1: Sắp xếp mảng theo thứ tự tăng dần
        Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong 
        mảng mà không làm thay đổi thứ tự sắp xếp của mảng
Ví dụ:
var numbers = [5, 1, 9, 8, 10];
var element = 4;
Bước 1
numbers = [1, 5, 8, 9, 10]
Kết quả hiển thị:
Bước 2
numbers = [1, 4, 5, 8, 9, 10]
 */
function insertAndSort(input, element){  
        if(!input.trim()) return "Please enter data";
        if(!element.trim()) return "Please enter data";

        let arr = input.split(","); 
        arr = arr.map(item => item.trim());
        arr = arr.map(item => Number(item));
        arr.push(parseInt(element));
        arr.sort((a, b) => a - b);

        return arr;
}