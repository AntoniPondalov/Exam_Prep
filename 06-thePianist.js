function thePianist(arr) {
    let pieceCount = Number(arr.shift());
    let pieceInfo = {};

    for (let curPiece = 1; curPiece <= pieceCount; curPiece++) {
        let [piece, composer, key] = arr.shift().split('|');
        pieceInfo[piece] = {composer, key};
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();
        let piece = tokens.shift();

        if (action === 'Add') {
            let [composer, key] = tokens;

            if (piece in pieceInfo) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieceInfo[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action === 'Remove') {
           if (piece in pieceInfo) {
            delete pieceInfo[piece];
            console.log(`Successfully removed ${piece}!`);
           } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
           }
        } else if (action === 'ChangeKey') {
            let newKey = tokens.shift();
            if (piece in pieceInfo) {
                pieceInfo[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = arr.shift();
    }
    let entries = Object.entries(pieceInfo);
    for (const [pieceTitle, detailsObj] of entries) {
        console.log(`${pieceTitle} -> Composer: ${detailsObj.composer}, Key: ${detailsObj.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2 | Liszt | C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor', 
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])