let url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
let fetchUrl = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
console.log(url);

let settings = { method : "Get" };

async function getData() {
    var crime = document.getElementById("crime").value; // inputs being created into variables
    var streetNumberInput = document.getElementById("streetNumber").value;
    var streetAddressInput = document.getElementById("streetAddress").value;
    var array = new Array (); // array of inputs with their URL JSON filters
    array[0] = ["clearance_code_inc_type=", crime];
    array[1] = ["street_number=", streetNumberInput];
    array[2] = ["street_address=", streetAddressInput];

    for(i = 0; i < array.length; i++){ // for loop to add the URL JSON filters to the fetchURL
        if (array[i][1] == "") {
            fetchUrl;
        } else if (array[i][1] != "" && fetchUrl.length > url.length){
            fetchUrl += "&" + array[i][0] + array[i][1];
        } else {
            fetchUrl += array[i][0] + array[i][1];
        }
    }

    await fetch(fetchUrl, settings)
            .then(res => res.json())
            .then((json) => {
                let listSize = json.length;
                console.log(listSize)
                // Loop to pick all the data
                for (i = 0; i < listSize; i++) {
                    let post = json[i];
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