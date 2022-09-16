window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let ids = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];
let cnt = 0;

function startGame(){
    let xo = ['x', 'o'];
    document.getElementById('main').style.display = 'grid';
    document.getElementById('click').style.display = 'none';
    document.getElementById('startGame').innerText = 'Back'
    document.getElementById('startGame').onclick = function(){
        location.reload();
    }
    for(let i = 0; i < 9; i++){
        document.getElementById(ids[i]).onclick = function(){
            if (cnt % 2 == 1 && document.getElementById(ids[i]).innerText != 'x' && document.getElementById(ids[i]).innerText !=  'o'){
                document.getElementById(ids[i]).innerText = xo[cnt % 2];   
                document.getElementById(ids[i]).style.color = 'green'; 
            cnt++;
            } else if(document.getElementById(ids[i]).innerText != 'x' && document.getElementById(ids[i]).innerText !=  'o'){
                document.getElementById(ids[i]).innerText = xo[cnt % 2];
                document.getElementById(ids[i]).style.color = 'red';    
            cnt++;
            }
                //checking who win

                if (document.getElementById(ids[0]).innerText == document.getElementById(ids[4]).innerText &&
                document.getElementById(ids[4]).innerText == document.getElementById(ids[8]).innerText &&
                document.getElementById(ids[0]).innerText != ''){
                    alert(document.getElementById(ids[0]).innerText + ' is win!!!');
                } 
                else if (document.getElementById(ids[2]).innerText == document.getElementById(ids[4]).innerText &&
                document.getElementById(ids[4]).innerText == document.getElementById(ids[6]).innerText &&
                document.getElementById(ids[2]).innerText != ''){
                    alert(document.getElementById(ids[2]).innerText + ' is WINNER!!!');
                } 
                else if (document.getElementById(ids[0]).innerText == document.getElementById(ids[1]).innerText &&
                document.getElementById(ids[1]).innerText == document.getElementById(ids[2]).innerText &&
                document.getElementById(ids[0]).innerText != ''){
                    alert(document.getElementById(ids[i]).innerText + ' is WINNER!!!');
                } 
                else if (document.getElementById(ids[3]).innerText == document.getElementById(ids[4]).innerText &&
                document.getElementById(ids[4]).innerText == document.getElementById(ids[5]).innerText &&
                document.getElementById(ids[3]).innerText != ''){
                    alert(document.getElementById(ids[3]).innerText + ' is WINNER!!!');
                }
                else if (document.getElementById(ids[6]).innerText == document.getElementById(ids[7]).innerText &&
                document.getElementById(ids[7]).innerText == document.getElementById(ids[8]).innerText &&
                document.getElementById(ids[6]).innerText != ''){
                    alert(document.getElementById(ids[6]).innerText + ' is WINNER!!!');
                }

                else if (document.getElementById(ids[0]).innerText == document.getElementById(ids[3]).innerText &&
                document.getElementById(ids[3]).innerText == document.getElementById(ids[6]).innerText &&
                document.getElementById(ids[0]).innerText != ''){
                    alert(document.getElementById(ids[0]).innerText + ' is WINNER!!!');
                } 
                else if (document.getElementById(ids[1]).innerText == document.getElementById(ids[4]).innerText &&
                document.getElementById(ids[4]).innerText == document.getElementById(ids[7]).innerText &&
                document.getElementById(ids[1]).innerText != ''){
                    alert(document.getElementById(ids[1]).innerText + ' is WINNER!!!');
                }
                else if (document.getElementById(ids[2]).innerText == document.getElementById(ids[5]).innerText &&
                document.getElementById(ids[5]).innerText == document.getElementById(ids[8]).innerText &&
                document.getElementById(ids[2]).innerText != ''){
                    alert(document.getElementById(ids[2]).innerText + ' is WINNER!!!');
                } else if (cnt == 9){
                    alert('draw');
                }
        }
    }
}