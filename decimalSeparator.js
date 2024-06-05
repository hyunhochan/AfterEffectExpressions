var k = effect("Point Control")("Point")[0].toFixed(0);
k = parseInt(k);
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
addCommas(k)