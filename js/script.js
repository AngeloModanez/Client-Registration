function searchCEP() {
    var cep = document.getElementById("inputCep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    $.getJSON(url, (location) => {
        if (("erro" in location)) {
            errorMsg("~~CEP NOT FOUND~~");
        } else {
            fillLocation(location);
            document.getElementById("error").innerHTML = "";
        }
    }).fail(() => {
        errorMsg("~~INVALID CEP~~");
    })
}

function fillLocation(location) {
    disableNumber(false);
    document.getElementById("inputAddress").value = location.logradouro || "";
    document.getElementById("inputDistrict").value = location.bairro || "";
    document.getElementById("inputCity").value = location.localidade || "";
    document.getElementById("inputState").value = location.uf || "";
}

function disableNumber(option) {
    $("#inputNumber").prop("disabled", option);
}

function errorMsg(message) {
    fillLocation({});
    disableNumber(true);
    document.getElementById("error").innerHTML = message;
}

/*
function loadClients() {
    for (cli of clients) {
        addNewRow(cli);
    }
}

loadClients();

function addNewRow(cli) {
    var table = document.getElementById("clientTable");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(cli.id);
    newRow.insertCell().appendChild(idNode);

    var fullNameNode = document.createTextNode(cli.fullName);
    newRow.insertCell().appendChild(fullNameNode);

    var addressNode = document.createTextNode(cli.address);
    newRow.insertCell().appendChild(addressNode);

    var cepNode = document.createTextNode(cli.cep);
    newRow.insertCell().appendChild(cepNode);

    var districtNode = document.createTextNode(cli.district);
    newRow.insertCell().appendChild(districtNode);

    var cityNode = document.createTextNode(cli.city);
    newRow.insertCell().appendChild(cityNode);

    var stateNode = document.createTextNode(cli.state);
    newRow.insertCell().appendChild(stateNode);
    
}
    */