let ArrOfNumbers=[0,2,4,8,16,32,64,128,256,512,1024,2048];
let arrOfImages = ["url('../img/color0.png')", "url('../img/color2.png')", "url('../img/color4.png')", "url('../img/color8.png')",
    "url('../img/color16.png')", "url('../img/color32.png')", "url('../img/color64.png')", "url('../img/color128.png')",
    "url('../img/color256.png')", "url('../img/color512.png')", "url('../img/color1024.png')", "url('../img/color2048.png')"];
let arr = [];
function resetGame() {
    let con = document.getElementById("container")
    let tbl = document.createElement("table")

    for (let i = 0; i < 4; i++) {
        let tr = document.createElement("tr");
        arr.push([])
        for (let j = 0; j < 4; j++) {
            let td = document.createElement("td")
            td.style.backgroundImage =  0;
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
function StyleForSqure(arr){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
     
        }
    }
}