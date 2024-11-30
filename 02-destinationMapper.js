function destinationMapper(str) {
    let regex = /(?<specials>\=|\/)(?<dest>[A-Z][A-Za-z]{3,})(\1)/g;

    let travelPoints = 0;
    let destinations = []

    let matches = Array.from(str.matchAll(regex));
        
    for (let match of matches) {
    travelPoints += match.groups.dest.length;
    destinations.push(match.groups.dest);

    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("ThisIs some InvalidInput")