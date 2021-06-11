var p =  prompt('pilih : batu, gunting, kertas');
var comp = Math.random();
if( comp < 0.34 ) {
    comp = 'batu';
} else if( comp >= 0.34 && comp < 0.67) {
    comp = 'gunting';    
} else {
    comp = 'kertas';
}

var hasil = '';
if  ( p == comp) {
    hasil = 'DRAW'

}