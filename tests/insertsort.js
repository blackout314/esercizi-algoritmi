module("tests", {
	setup: function () {
	},
	teardown: function () {
	}
});

test('function exist', function() {
    ok( typeof sort === "function", "la funzione non esiste" );
});

test('function return some result', function() {
    ok( typeof sort([]) !== "undefined", "la funzione restituisce un risultato");
});

test('function need right var', function() {
    var a = [1,2],
        b = "",
        c = 2,
        d = {};
    ok( sort(a) !== false, "ho passato un array");
    ok( sort(b) === false, "ho passato una stringa");
    ok( sort(c) === false, "ho passato un numero");
    ok( sort(d) === false, "ho passato un oggetto");
});

test('try to sort', function() {
    var example = [45, 56, 21, 33, 6, 9],
        newArray = sort(example);
    console.log(JSON.stringify(newArray));
    ok( JSON.stringify(newArray) === "[6,9,21,33,45,56]", "il sort non ha dato i risultati sperati");
});
