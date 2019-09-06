const menuItems = document.getElementById("menuitems");
const url = "http://192.168.0.15:5000/menu";
fetch(url).then((resp) => resp.json()).then(function(data){
    //for each inside of data
    return data.map(function(coffeeItem){

        //make a container div
        let coffeeItemDiv = newDivWithClassName("container");

        //make a coffee name div within that container
        let coffeeNameDiv = newDivWithClassName("coffeeName");
        coffeeNameDiv.innerHTML = coffeeItem.coffee;
        coffeeItemDiv.appendChild(coffeeNameDiv);

        //make a coffee type div within that container
        let coffeeTypeDiv = newDivWithClassName("coffeeType");
        coffeeTypeDiv.innerHTML = coffeeItem.type;
        coffeeItemDiv.appendChild(coffeeTypeDiv);


        //append to menu items
        menuItems.appendChild(coffeeItemDiv);
        console.log(coffeeItem.type);
    });

});
function newDivWithClassName(name){
    el = document.createElement("div");
    el.className = name;
    return el;
}