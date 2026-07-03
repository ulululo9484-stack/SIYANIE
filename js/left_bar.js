const main_left_button_button = document.querySelectorAll("#main_left_button button");

main_left_button_button.forEach(button => {
    button.addEventListener("click", () => {
        main_left_button_button.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

const add_friend = document.getElementById("add_friend");

add_friend.addEventListener("click", function () {

    

});