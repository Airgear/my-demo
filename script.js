function f1() {
    var obj1 = document.getElementById('inp1');
    var obj2 = document.getElementById('inp2');
    if (obj1.value === '' && obj2.value === '') {
        alert('Заполните поле');
    } else if (obj1.value === obj2.value){
        alert('Значения совпадают');
    } else {
        alert('Значения не совпадают');
    }
}  
function f2(arr) {
    var arr = document.getElementById('inp3').value;
    let count = 0;
    // var arr = JSON.parse(a)
    const result = arr => arr.reduce((flatArray) => {
        return flatArray.concat(Array.isArray(item) ? result(item): item);
    },[]);
    const flatArray = flatten (arr);
    flatArray.forEach((value) =>{
        if (value === item){
            count +=1;
        }
    })
    

    alert(result); 
    return count;
}
   

