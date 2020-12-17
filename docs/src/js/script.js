let url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
let police = "";
console.log(url);

let settings = { method : "Get" };
let policeValues = [];

async function getData() {
    let crime = document.getElementById("crime").value;
    let streetNumberInput = document.getElementById("streetNumber").value;
    

    // IF Statement for searching the type of CRIME
    if (crime == "ACCIDENT" || crime == "THEFT FROM AUTO" || crime == "THEFT" || crime == "ASSAULT" || crime == "ASSAULT, WEAPON" || crime == "ASSAULT, SHOOTING" || crime == "AUTO, STOLEN & RECOVERED"
    || crime == "SEX OFFENSE" || crime == "AUTO, STOLEN" || crime == "ROBBERY, OTHER" || crime == "ROBBERY, COMMERCIAL" || crime == "HOMOCIDE" || crime == "VANDALISM" || crime == "B & E, VACANT"
    || crime == "B & E, OTHER" || crime == "B & E, RESIDENTIAL" || crime == "B & E, COMMERCIAL" || crime == "B & E, RESIDENTIAL (VACANT)") {
    url += "clearance_code_inc_type=" + crime;
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