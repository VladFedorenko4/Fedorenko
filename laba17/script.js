'use strict'

let date = new Date() 
let time = date.getTime() 
 
alert(date, time) 
 
function myFun() { 
    var n = Math.floor(Math.random() * 101); 
    console.log (n); 
    while(true) { 
        var x = prompt("Число від 0 до 100"); 
        if (isNaN(x)) { 
            alert("не правильно введено число") 
            break; 
        } 
        else if (x == n){
            alert("перемога")
            break;
        }
        else if (x < n) { 
            alert("Мало"); 
        }else if (Math.abs(x-n)<20){ 
            if (x < n){ 
                alert("Дуже близько, але трошки більше") 
            } else { 
                alert("Дуже близько, але трошки менше") 
            } 
             if (Math.abs(x-n)<10 ){
               if (x < n){ 
                    alert("ще блище, але трошки більше") 
                } else { 
                    alert("ще блище , але трошки менше") 
                } 
            }
        } else if (x > n) { 
            alert("Багато"); 
        }   
    } 
}