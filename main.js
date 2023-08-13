// main.js
document.addEventListener("DOMContentLoaded", function() {
    const testButton = document.getElementById("testButton");

    testButton.addEventListener("click", function() {
        onClickTest();
    });

    function onClickTest() {
        alert("Clicked: Test");
    }
});
