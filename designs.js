

$(function () {

  function makeGrid() {
    // Get a value from the input by id #inputHeight and make input is 100 if user enter more
    const gridHeight = $('#inputHeight').val();
    if (gridHeight > 100) {
      alert('please keep grid height 100 or less');
      gridHeight = 100;
    }

    // Get a value from the input by id #inputWidth and make input is 100 if user enter more
    const gridWidth = $('#inputWidth').val();
    if (gridWidth > 100) {
      alert('please keep grid width 100 or less');
      gridWidth = 100;
    }

    // get table element by id #pixelCanvas and reset it 
    const table = $('#pixelCanvas');
    table.empty();

    //Make loops to fill the table by gridWidth & gridHeight
    for (let i = 0; i < gridHeight; i++) {
      table.append('<tr></tr>');
      for (let j = 0; j < gridWidth; j++) {
        table.children().last().append('<td></td>');
      }
    }
    //make event listner on td to change color 
    $('td').click(function (evt) {
      let pickedColor = $('#colorPicker').val();
      $(evt.target).css('background-color', pickedColor);

      $(table.find('td')).dblclick(function () {
        $(this).removeAttr('style');
      });
    });
  };
  //gey submit input 
  //first check event it has action or not
  //if event not has action so not taken default action
  const submit = $('input[type="Submit"]');
  submit.click(function (evt) {
    evt.preventDefault();
    makeGrid();
  });
});










