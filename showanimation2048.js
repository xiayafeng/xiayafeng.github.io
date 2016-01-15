function showNumberWithAnimation(i, j, randNumber){
    var numberCell = $("#number-cell-" + i + "-" + j);
    //设置该单元格的样式
    numberCell.css("background-color", getNumberCellBackgroundcolor(randNumber));
    numberCell.css("color", getNumberCellColor(randNumber));
    numberCell.text(randNumber);
    //设置动画效果
    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getPosTop(i, j),
        left: getPosLeft(i, j)
    }, 50);



}
