const ask = document.getElementById("ask");
const askTab = document.getElementById("ask-tab");

const openTab = document.getElementsByClassName("open-tab");
const hideTab = document.getElementsByClassName("hidden-tab");

$(askTab).ready(function () 
{
    $(ask).hover(function(){
        $(askTab).attr('class',openTab);
    }, function() {
        $(askTab).attr('color',hideTab);
    });
});