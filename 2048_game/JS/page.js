let arrOfImages = ['url("../img/color0.png")', 'url("../img/color2.png")', 'url("../img/color4.png")', 'url("../img/color8.png")',
    'url("../img/color16.png")', 'url("../img/color32.png")', 'url("../img/color64.png")', 'url("../img/color128.png")',
    'url("../img/color256.png")', 'url("../img/color512.png")', 'url("../img/color1024.png")', 'url("../img/color2048.png")'];

let arr=[];
let score=0;  // avriable to calculate the player score
let c=document.getElementById("yourscore") // variable to log out the player score


//==================================
// function reset game
//==================================
    function resetGame() {
        let con = document.getElementById("container")
        let tbl = document.createElement("table")
    
        for (let i = 0; i < 4; i++) {
            let tr = document.createElement("tr");
            arr.push([])
            for (let j = 0; j < 4; j++) {
                let td = document.createElement("td")
                td.style.backgroundImage =  arrOfImages[0];
                tr.appendChild(td);
                arr[i].push(td)
            }
            tbl.appendChild(tr)
        }
        con.appendChild(tbl)
        console.log(arr);
        EnterRandomNumber(arr);
    
    }
    resetGame();
function chekindex(arr, i, j) {
    let index;
    for (index = 0; index < 12; index++) {
        if (arr[i][j].style.backgroundImage == arrOfImages[index]) {
            return index;
        }
    }
    return 0;
}

//==================================
// function random number in array
//==================================
function EnterRandomNumber(arr) {
    for (let r = 0; r < 2; r++) {
        let placeI = Math.floor(Math.random() * 4);
        let placeJ = Math.floor(Math.random() * 4);
        arr[placeI][placeJ].style.backgroundImage = arrOfImages[1];
    }
}

//==================================
// function Count Empty Squres
//==================================
function CountEmptySqures(arr){
    let counter = 0;
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(arr[i][j].style.backgroundImage != arrOfImages[0]){
                counter++;
            }
        }
    }
    if(counter === 16){
        CheckIfGameOver(arr);
    }
}

//==================================
// function check if game is over
//==================================
function CheckIfGameOver(arr){
    sum=0;
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
          if( j!=3 && arr[i][j].style.backgroundImage === arr[i][j+1].style.backgroundImage ){
              sum++;
            }
            if(i!=3 && arr[i][j].style.backgroundImage === arr[i+1][j].style.backgroundImage){
                sum++;
            }
        }
    }
    if(sum === 0){
        GameOver();
    }
}

//==================================
// function right arrow
//==================================
function rightSide(arr) {
    for (let i = 0; i <= 3; i++) {
        for (let j = 3; j > 0; j--) {
            if ( arr[i][j].style.backgroundImage === arrOfImages[0]) {
                arr[i][j].style.backgroundImage = arr[i][j-1].style.backgroundImage;
                arr[i][j-1].style.backgroundImage = arrOfImages[0];
            }
            else if ( arr[i][j].style.backgroundImage === arr[i][j-1].style.backgroundImage) {
                arr[i][j].style.backgroundImage = arrOfImages[chekindex(arr, i, j)+1];
				      arr[i][j-1].style.backgroundImage = arrOfImages[0];
                        score+=10;
                        c.innerHTML="Your score is: "+score;
              }
        }
    
	}
}

//==================================
// function left arrow
//==================================
function leftSide(arr) {
    for (let i = 0; i <= 3; i++) {
        for (let j = 3; j>0; j--) {
            if (arr[i][j-1].style.backgroundImage === arrOfImages[0]) {
                arr[i][j-1].style.backgroundImage = arr[i][j].style.backgroundImage;
                arr[i][j].style.backgroundImage = arrOfImages[0];
               
            }
            else if ( arr[i][j].style.backgroundImage === arr[i][j-1].style.backgroundImage) {
                arr[i][j-1].style.backgroundImage = arrOfImages[chekindex(arr, i, j)+1];
				arr[i][j].style.backgroundImage = arrOfImages[0];
                score+=10;
                c.innerHTML="Your score is: "+score;
              }
        }
    
	}
  
}

//==================================
// function Up arrow
//==================================
function upSide(arr){
    for(let i=0; i<3;i++){
        for (let j=0; j<4; j++){
            if(arr[i][j].style.backgroundImage === arrOfImages[0]){
                arr[i][j].style.backgroundImage = arr[i+1][j].style.backgroundImage;
                arr[i+1][j].style.backgroundImage = arrOfImages[0];
            }
            else if(arr[i][j].style.backgroundImage === arr[i+1][j].style.backgroundImage) {
                arr[i][j].style.backgroundImage = arrOfImages[chekindex(arr, i, j)+1];
				arr[i+1][j].style.backgroundImage = arrOfImages[0];
                score+=10;
                c.innerHTML="Your score is: "+score;
            }
        }
    }

}



// //==================================
// // function down arrow
// //==================================
// function downSide(arr){
//     for(let i=3; i>0;i--){
//         for (let j=0; j<4; j++){
//             if(arr[i][j].style.backgroundImage === arrOfImages[0]){
//                 arr[i][j].style.backgroundImage = arr[i-1][j].style.backgroundImage;
//                 arr[i-1][j].style.backgroundImage = arrOfImages[0];
//             }
//             else if( arr[i][j].style.backgroundImage === arr[i-1][j].style.backgroundImage) {
//                 arr[i][j].style.backgroundImage = arrOfImages[chekindex(arr, i, j)+1];
// 				arr[i-1][j].style.backgroundImage = arrOfImages[0];
                
//                 score+=10;
//                 c.innerHTML="Your score is: "+score;
//             }
//         }
//     }

// }

//==================================
// function down arrow
//==================================
function downSide(arr){
    for(let i=3; i>0;i--){
        for (let j=0; j<4; j++){
            if(arr[i][j].style.backgroundImage === arrOfImages[0]){
                let m=i;
                for(m;m>1;m--){
                    if(arr[m][j].style.backgroundImage === arrOfImages[0]){
                        arr[i][j].style.backgroundImage = arr[m-1][j].style.backgroundImage;
                        arr[m-1][j].style.backgroundImage = arrOfImages[0];
                    }
                }
              
            }
            else if( arr[i][j].style.backgroundImage === arr[i-1][j].style.backgroundImage) {
                arr[i][j].style.backgroundImage = arrOfImages[chekindex(arr, i, j)+1];
				arr[i-1][j].style.backgroundImage = arrOfImages[0];
                
                score+=10;
                c.innerHTML="Your score is: "+score;
            }
        }
    }

}

//==================================
// function put 2 numbers in the array
//==================================
function EnterNewNumber(arr) {
	let check=0;
    let placeI = Math.floor(Math.random() * 4);
    let placeJ = Math.floor(Math.random() * 4);
    do {
         placeI = Math.floor(Math.random() * 4);
         placeJ = Math.floor(Math.random() * 4);
         if (arr[placeI][placeJ].style.backgroundImage === arrOfImages[0]) {
             arr[placeI][placeJ].style.backgroundImage = arrOfImages[1];
			 check+=1;
        }

   }
  while (arr[placeI][placeJ].style.backgroundImage != arrOfImages[0]&&check<1);
}

//==================================
// function mooving the squres
//==================================
function moove() {
    document.addEventListener("keypress", which_key())
  }
  
//==================================
// function Which key the User pressed
//==================================
  function which_key() {
    
    if (event.keyCode == 37) {
        CheckIfGameWinner(arr);
        leftSide(arr);
        CountEmptySqures(arr);
        EnterNewNumber(arr);
       
    }
    if (event.keyCode == 38) {
        CheckIfGameWinner(arr);
        upSide(arr);
        CountEmptySqures(arr);
        EnterNewNumber(arr);
       
    }
    if (event.keyCode == 39) {
        CheckIfGameWinner(arr);
        rightSide(arr);
        CountEmptySqures(arr);
        EnterNewNumber(arr);
        
    }
    if (event.keyCode == 40) {
        CheckIfGameWinner(arr);
        downSide(arr);
        CountEmptySqures(arr);
        EnterNewNumber(arr);
        
    }
       
 }

//==================================
// function Game over
//================================== 
function GameOver(){
    alert("game over :(")
}

//==================================
// function check if game is winner
//==================================
function CheckIfGameWinner(arr){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if(arr[i][j].style.backgroundImage===arrOfImages[10]){
                alert("you win :)");
                window.close("game.html")
                window.open("main.html");
            }
        }
    }
}
