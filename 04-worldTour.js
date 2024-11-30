function worldTour(arr) {
    let stops = arr.shift();
    let command = arr.shift();

    while (command !== "Travel") {
        let tokens = command.split(':');
        let action = tokens.shift();

        if (action === "Add Stop") {
            let [index, string] = tokens;
            index = Number(index);

            if (index >= 0 && index < stops.length) {
                stops = stops.substring(0, index) + string + stops.substring(index);
            }
        } else if (action === "Remove Stop") {
            let [startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);
            if (startIdx >= 0 && endIdx < stops.length) {
                stops = stops.substring(0, startIdx) + stops.substring(endIdx + 1);
            }
        } else if (action === "Switch") {
            let [oldString, newString] = tokens;
            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
        }

        console.log(stops);

        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
])