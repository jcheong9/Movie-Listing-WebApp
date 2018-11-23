$(document).ready(function() {

  $('#mainMenu #topTenMovie').click(function(e) {
    e.preventDefault();
    console.log("click!");

    $.ajax({
      url:"/GET-MOVIES-CONTENT",
      dataType: "html",
      type: "GET",
      data: {format: "html-list"},
      success: function(data) {
        console.log("SUCCESS HTML: ", data);
        $('#serverContent').html(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });

    $.ajax({
      url:"/GET-MOVIES-CONTENT2",
      dataType: "html",
      type: "GET",
      data: {format: "html-list"},
      success: function(data) {
        console.log("SUCCESS HTML: ", data);
        $('#serverContent2').html(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      }
    });
  });

  $.ajax({
    url:"/GET-MOVIES-Titles",
    dataType: "json",
    type: "GET",
    data: {format: "json-list"},
    success: function(data) {
      console.log("SUCCESS HTML: ", data);
      console.log(data.length);

      for(let i = 0; i < data.length; i++){
        var count = 1;
        console.log(count);
        $('#movie' + i).html(data[i]);
        count++;
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });



  // $.ajax({
  //   url:"/GET-movieTitles",
  //   dataType: "json",
  //   type: "GET",
  //   data: {format: "json-list"},
  //   success: function(data) {
  //     console.log("SUCCESS JSON", data);
  //     var div = $('serverContent');
  //   }
  //   error: function(jqXHR, textStatus, errorThrown) {
  //       console.log("ERROR:", jqXHR, textStatus, errorThrown);
  //   }
  // })

});