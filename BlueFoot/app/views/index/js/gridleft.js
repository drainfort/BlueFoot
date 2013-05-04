        

$(function(){
    $('.column1').draggable();
     $("#calendar").droppable({
            drop: function (event, ui) {
                $("#info").html("dropped!");
            },
        });
    
    eventDrop: 

   });
$(function(){
    
    var data = [[1, 1], [1, 1]];

$("#grid").jqGrid({
    datatype: "local",
    height: 250,
    colNames: ['Actividad', 'Intensidad'],
    colModel: [{
        name: 'Actividad',
        index: 'Actividad',
        width: 60,
        sorttype: "int"},
    {
        name: 'Intensidad',
        index: 'Intensidad',
        width: 100},
    ],
    caption: "Actividades",
    // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}
});

var names = ["Actividad", "Intensidad"];
var mydata = [];

for (var i = 0; i < data.length; i++) {
    mydata[i] = {};
    for (var j = 0; j < data[i].length; j++) {
        mydata[i][names[j]] = data[i][j];
    }
}

for (var i = 0; i <= mydata.length; i++) {
    $("#grid").jqGrid('addRowData', i + 1, mydata[i]);
}

/*
$("#grid").jqGrid('setGridParam', {onSelectRow: function(rowid,iRow,iCol,e){alert('row clicked');}});
*/
$("#grid").jqGrid('setGridParam', {ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}});
    
    });