function newItem() {
    // /1. Adding a new item to the list of items:
    let inputValue = $('#input').val();
    if (inputValue === '') {
        alert("This space can't be empty");
    } else {
        let li = $('<li></li>');
        li.append(inputValue);
        $('#list').append(li);

        // 2. Crossing out an item from the list of items:
        function crossOut() {
            li.toggleClass("strike");
        }
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });

        // 3(i). Adding the delete button "X":
        let crossOutButton = $('<crossOutButton>X</crossOutButton>');
        li.append(crossOutButton);
        crossOutButton.on("click", deleteListItem);

        // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        function deleteListItem() {
            li.addClass("delete");
        }
    }
}
// Reorder of items:
$('#list').sortable();
