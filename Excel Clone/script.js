//Functions to declare the numbers of cell in container
$(document).ready(function () {
    let cellContainer = $(".input-cell-container");
    for (let i = 1; i <= 120; i++) {
        let str = "";
        let n = i;
        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                str = "Z" + str;
                n = Math.floor(n / 26) - 1;
            } else {
                str = String.fromCharCode(rem + 65 - 1) + str;
                n = Math.floor(n / 26);
            }
        }

        // console.log(str);
        let column = $(`<div class="column-name colId-${i}" id="colCode-${str}">${str}</div>`);
        $(".column-name-container").append(column);
        let row = $(` <div class="row-name" id="rowId-${i}">${i}</div>`)
        $(".row-name-container").append(row);
    }

    for (let i = 1; i <= 120; i++) {
        let row = $(`<div class="cell-row"></div>`);
        for (let j = 1; j <= 120; j++) {
            let colCode = $(`.colId-${j}`).attr("id").split("-")[1];  //important
            let column = $(`<div class="input-cell" contenteditable="false" id="row-${i}-col-${j}" data-="${colCode}"></div>`);
            row.append(column);
        }
        $(".input-cell-container").append(row);
    }

    $(".align-icon").click(function (e) {
        if(e.ctrlKey){
            
        }
        else {
            $(".align-icon.selected").removeClass("selected");  //default to format assign left
            $(this).addClass("selected");
        }
    })
    $(".style-icon").click(function () {
        $(this).toggleClass("selected");      // means if selected make is unselected on click
    })
    $(".input-cell").click(function () {
        $(".input-cell.selected").removeClass("selected");
        $(this).addClass("selected");            // remove the selection from last selected cell and select new cell item on single click.
    })
    $(".input-cell").dblclick(function () {
        $(".input-cell.selected").removeClass("selected");
        $(this).addClass("selected");
        $(this).attr("contenteditable", "true");
        $(this).focus();
    });

    $(".input-cell-container").scroll(function(){
        console.log(this.scrollLeft);
        $(".column-name-container").scrollLeft(this.scrollLeft);
        $(".row-name-container").scrollTop(this.scrollTop);
    });

});
