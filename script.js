var pairs = ['lion', 'tiger', 'cat', 'jaguar', 'lobster'];
var endResult = [];

for (var a = 0; a < pairs.length - 1; a++){
    for (var b = a + 1; b < pairs.length; b++){
        endResult.push(pairs[a] + ' ' + pairs[b]);
    }
}
console.log(endResult);
