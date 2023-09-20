function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    }
    return pizza;
}

var pizza1 = pizzaOven("delgada", "Pomarola", "tres quesos", ["americana", "criolla", "italiana"]);
console.log(pizza1);

var pizza2 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza2);

var pizza3 = pizzaOven("lanzada a mano", "marinara", ["mozzarela", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza3);

var pizza4 = pizzaOven("mediana", "blanca", ["mozzarella", "cuatro quesos"], ["amapola", "citrus", "hummus"]);
console.log(pizza4);

var pizza5 = pizzaOven("a la piedra", "antartica", ["brie", "parmesano"], ["cheddar", "tomate", "piamontesa"]);
console.log(pizza5);
