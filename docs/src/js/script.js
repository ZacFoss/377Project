let url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
let police = "";
console.log(url);

let settings = { method : "Get" };
let policeValues = [];

async function getData() {
    let input = document.getElementById("crime").value;

    // IF Statement for searching the type of CRIME
    if (input == "ACCIDENT" || input == "THEFT FROM AUTO" || input == "THEFT" || input == "ASSAULT" || input == "ASSAULT, WEAPON" || input == "ASSAULT, SHOOTING" || input == "AUTO, STOLEN & RECOVERED"
    || input == "SEX OFFENSE" || input == "AUTO, STOLEN" || input == "ROBBERY, OTHER" || input == "ROBBERY, COMMERCIAL" || input == "HOMOCIDE" || input == "VANDALISM" || input == "B & E, VACANT"
    || input == "B & E, OTHER" || input == "B & E, RESIDENTIAL" || input == "B & E, COMMERCIAL" || input == "B & E, RESIDENTIAL (VACANT)") {
    input.toUpperCase();
    url += "clearance_code_inc_type=" + input;
    }

    await fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                let listSize = json.length;
                console.log(listSize)
                // Loop to pick all the data
                for (x = 0; x < listSize; x++) {
                    let post = json[x];
                    console.log(post)
                    let streetNumber = post.street_number;
                    let streetAddress = post.street_address;
                    let clearanceCode = post.clearance_code_inc_type;
                    let message = "<b>Crime </b>: " + clearanceCode + " <b>Street Number</b>:" + streetNumber
                    + "<b>Street Address</b>: " + streetAddress;

                    let select = document.getElementById("policeList");
                    select.innerHTML += "<li>" + message + "</li>";

                }
            })
}