$(document).ready(onReady);



var clickGenerate = 0
var backgroundColor = true

function onReady() {
    console.log('dog')
    $('#generateButton').on('click', generateFunction);
    $('body').on('click', '#swap', swapFunction);
    $('body').on('click', '#delete', deleteFunction)
}//end onReady

function generateFunction() {
    clickGenerate++

    $('body').append('<div data-index="'+clickGenerate+'" class= "divInside"><p>'+clickGenerate+'</p><button id="swap">Swap</button><button id="delete">Delete</button></div>')
}//end generateFunction

function swapFunction () {
    console.log('trim')

    if ($(this).closest('.divInside').css("background-color") == "rgb(255, 0, 0)") {
        $(this).closest('.divInside').css("background-color", 'yellow')
    }
    else {
        $(this).closest('.divInside').css("background-color", 'red')
    }
}//end of swapFunction

function deleteFunction () {
    console.log('fish')
    $(this).closest('div').remove();
}

