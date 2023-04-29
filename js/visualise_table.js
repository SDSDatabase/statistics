//data is stored in array 'mountains'
let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
];

//generates the table head
function generateTableHead(table) {

    //returns table head element of given table, if no header exists, it creates one
    let thead = table.createTHead();

    //add a row to thead
    let row = thead.insertRow();

    //populate the table head
    for (let key of data) {

        //create th element
        let th = document.createElement("th");

        //append a text node
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    //for every item
    for (let element of data) {
        //create a new row
        let row = table.insertRow();

        //iterates over every key of the current object 
        for (key in element) {
            //creates a new cell
            let cell = row.insertCell();
            //creates a new text node
            let text = document.createTextNode(element[key]);
            //appends the text node to the cell
            cell.appendChild(text);
        }
    }
}

//grab table from visualise_table.html
let table = document.querySelector("table");

let data = Object.keys(mountains[0]);

//populates the table
generateTable(table, mountains);

//generate table head with table from visualise_table.html as parameters
generateTableHead(table);
