//event handling
document.getElementById('btn-intersection')
        .addEventListener('click', handleIntersection);

document.getElementById('btn-flatten')
        .addEventListener('click', handleFlatten);

document.getElementById('btn-concat')
        .addEventListener('click', handleConcat);

function getInputValue(id){
    return document.getElementById(id)?.value ?? '';
}

function handleIntersection(){
    const array1 = getInputValue('intersection-a1');
    const array2 = getInputValue('intersection-a2');
    const result = setIntersection(array1, array2);
    renderResult(result, 'output-intersection');
}

function handleFlatten(){
    const input = getInputValue('flatten-input');
    const result = flattenArray(input);
    renderResult(result, 'output-flatten');
}

function handleConcat(){ 
    const array1 = getInputValue('concat-a1');
    const array2 = getInputValue('concat-a2');
    const result = concatArray(array1, array2);
    renderResult(result, 'output-concat');
}

//render
function renderResult(output, id){
        document.getElementById(id).textContent = `${output}`;
}

function arrayHelper(input){
    if(!input.trim()) return "Please enter data";
    let arr = input.split(","); 
    arr = arr.map(item => item.trim());
    arr = arr.map(item => Number(item)); 
    return arr;
}

function parseInput(input){
    if(!input.trim()) return "Please enter data";
    try {
        return JSON.parse(input);
    } catch {
        return null;
    }
}
//logic
/* 
    Bài 1
    Lấy kết quả giao giữa 2 mảng
    var arrA = [1, 4, 3, 2];
    var arrB = [5, 2, 6, 7, 1];
    Kết quả [1,2]
*/
function setIntersection(array1, array2){
    const arr1 = arrayHelper(array1);
    const arr2 = arrayHelper(array2);
    let arr = arr1.filter(x => arr2.includes(x));   
    return arr;
}

/* 
Bài 2
Làm phẳng array sau (Chuyển về mảng 1 chiều) Không được sử dụng flat()
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
Kết quả
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/
function handleFlattenRecursive(arr){
    let result = [];

    arr.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(handleFlattenRecursive(item));
        } else {
            result.push(item);
        }
    });

    return result;
}

function flattenArray(input){
    const arr = parseInput(input); 
    
    if(Array.isArray(arr)){
            return handleFlattenRecursive(arr).join(', ');
        } else {
            return 'error: array cannot be parse';
        }
}

/* 
Bài 3
Tách phần tử trong mảng theo đúng kiểu dữ liệu
var arr = [["a", 1, true], ["b", 2, false]]
Kết quả
[["a", "b"], [1, 2], [true, false]]
 */
function concatArray(array1, array2){
    arrayHelper(array1);
    arrayHelper(array2);
}
/* 
Bài 4
Dựa vào hình ảnh giao diện sau, 
hãy thiết kế 1 mảng phù hợp và thực hiện đổ dữ liệu lên giao diện 
*/