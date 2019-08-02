function f1(){
    var obj1,obj2;
        obj1 = document.getElementById('inp1').value;
        obj2 = document.getElementById('inp2').value;
    if (obj1 == 0 && obj2 == 0){ 
        alert('Заполните поле')
    } 
    else if(obj1 === obj2){
        alert(true);
    }
    else if(Object.keys(obj1).length !== Object.keys(obj2).length){ 
            alert(false);
         }
    for(var propName in obj1){
        if (! obj2.hasOwnProperty(propName)) { 
                alert(false);
        } 
        else if(obj1[propName].valueOf() !== obj2[propName].valueOf()){ 
            if(! f1(obj1[propName], obj2[propName]) ){ 
                    alert(false);
                }
    
        }
    }
} 
function f2(){

}