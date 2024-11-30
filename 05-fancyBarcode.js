function fancyBarcode(arr) {
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let digitPattern = /\d+/g;
    let barcodeCount = Number(arr.shift());

    for (let curBarcode = 1; curBarcode <= barcodeCount; curBarcode++) {
        let barcodeText = arr.shift();
        let match = pattern.exec(barcodeText);

        if (match) {
            let digitMatches = barcodeText.match(digitPattern);
            let productGroup = digitMatches ? digitMatches.join('') : '00';
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
            
        }
    }
}
fancyBarcode([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
])