$(function () {
  $(".add-burger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    var newBurger = {
        burger_name: $("#new-burger").val().trim(),
    };

    console.log(newBurger.burger_name);
    console.log(id);

    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("Created new burger.");
      location.reload();
    });
  });

  $(".not-devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);

    var devouredState = {
      full: true,
    };


    $.ajax("/api/burgers/update/" + id, {
      type: "PUT",
      data: devouredState
    }).success(function () {
      console.log("Devoured burger #", id);
      location.reload();
    }).fail(function(err){
      console.log("Error: " + err);
    });
  });

  $(".devoured").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);

    var devouredState = {
      full: true,
    };

    $.ajax("/api/burgers/delete/" + id, {
      type: "DELETE",
      data: devouredState
    }).success(function () {
      console.log("Deleted burger #", id);
      location.reload();
    }).fail(function(err){
      console.log("Error: " + err);
    });

  });
});
