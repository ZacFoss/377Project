let url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
let fetchUrl = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
console.log(url);

let settings = { method : "Get" };

async function getData() {
    var crime = document.getElementById("crime").value; // inputs being created into variables
    var streetNumberInput = document.getElementById("streetNumber").value;
    var streetAddressInput = document.getElementById("streetAddress").value;
    var inputArray = new Array (); // array of inputs with their URL JSON filters
    if (crime.includes("B & E,") ){
        inputArray[0] = ["$where=clearance_code_inc_type like", "'%25" + crime.substr(5) + "%25'"];
        inputArray[1] = ["street_number=", streetNumberInput];
        inputArray[2] = ["street_address=", streetAddressInput];
    } else {
        inputArray[0] = ["clearance_code_inc_type=", crime];
        inputArray[1] = ["street_number=", streetNumberInput];
        inputArray[2] = ["street_address=", streetAddressInput];
    }

    for(i = 0; i < inputArray.length; i++){ // for loop to add the URL JSON filters to the fetchURL
        if (inputArray[i][1] == "") {
            fetchUrl;
        } else if (inputArray[i][1] != "" && fetchUrl.length > url.length){
            fetchUrl += "&" + inputArray[i][0] + inputArray[i][1];
        } else {
            fetchUrl += inputArray[i][0] + inputArray[i][1];
        }
    }

    await fetch(fetchUrl, settings)
            .then(res => res.json())
            .then((json) => {
                let listSize = json.length;
                console.log(listSize)
                var array = new Array ();
                var message = "";
                // Loop to pick all the data
                for (i = 0; i < listSize; i++) {
                    let post = json[i];
                    console.log(post)
                    let clearanceCode = post.clearance_code_inc_type;
                    let streetNumber = post.street_number;
                    let streetAddress = post.street_address;
                    array[i] = [clearanceCode, streetNumber, streetAddress];

                }
                
                if (crime != "" && streetNumberInput != "" && streetAddressInput != ""){
                    message = array.length + " cases of " + crime + " happened at " + streetNumberInput + ", " + streetAddressInput;
                } else if (crime != "" && streetNumberInput != "" && streetAddressInput == "") {
                    message = array.length + " cases of " + crime + " happened at " + streetNumberInput;
                } else if (crime != "" && streetAddressInput != "" && streetNumberInput == "") {
                    message = array.length + " cases of " + crime + " happened at " + streetAddressInput;
                } else if (streetNumberInput != "" && streetAddressInput != "" && crime == "") {
                    message = array.length + " cases happened at " + streetNumberInput + ", " + streetAddressInput;
                } else if (crime != "" && streetAddressInput == "" && streetNumberInput == "") {
                    message = array.length + " cases of " + crime + " happened in PG County"
                } else if (streetNumberInput != "" && crime == "" && streetAddressInput == "") {
                    message = array.length + " cases occurred at " + streetNumberInput;
                } else if (streetAddressInput != "" && crime == "" && streetNumberInput == "") {
                    message = array.length + " cases occurred at " + streetAddressInput;
                }
                let select = document.getElementById("policeList"); 
                select.innerHTML += "<li>" + message + "</li>";
            })

            
}