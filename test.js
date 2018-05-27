var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';

$.get(URL, function (data) {
    //turn the data into something you can work with
    var coffeeOrderArray = [];
    var keys = Object.keys(data);

    // cofferOrderArray = Object.values(data) can replace forEach function on the next 4 lines
    keys.forEach(function (aKey) {
        var anOrder = data[aKey];
        coffeeOrderArray.push(anOrder);
    });
    coffeeOrderArray.forEach(function (coffeeOrder) {
        var coffee = coffeeOrder.coffee;
        var email = coffeeOrder.emailAddress;
        var element = $('<p>', {
            text: `${email} ordered a ${coffee}`
          });
        $(document.body).append(element);
    });
})   


// Turn these into functions so that they can be re-used in other ways without having to cop/ypaste or type all te shit out again.