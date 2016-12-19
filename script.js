//Write your function calls below this line
function setColor(row,col, color) {
    var cell = $('#t')[0].rows[row].cells[col];
    cell.style.backgroundColor = color;
}
// Write your code below this line
setColor(0, 0, "purple"); 
setColor(9, 0, "green"); 
setColor(0, 9, "red"); 
setColor(9, 9, "blue");
setColor(2, 2, "black");
setColor(2,7, "black");
setColor(5,1, "black");
setColor(6,2, "black");
setColor(7,3, "black");
setColor(7,4, "black");
setColor(7,5, "black");
setColor(7,6, "black");
setColor(6,7, "black");
setColor(5,8, "black");