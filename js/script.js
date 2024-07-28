var clients = [];
var valid = false;

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
    valid = false;
    fillLocation({});
    disableNumber(true);
    document.getElementById("error").innerHTML = message;
}

function searchCEP() {
    var cep = document.getElementById("inputCep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    $.getJSON(url, (location) => {
        if (!("erro" in location)) {
            valid = true;
            fillLocation(location);
            document.getElementById("error").innerHTML = "";
        } else {
            errorMsg("~~CEP NOT FOUND~~");
        }
    }).fail(() => {
        errorMsg("~~INVALID CEP~~");
    })
}

function loadClients() {
    for (cli of clients) {
        addNewRow(cli);
    }
}

loadClients();

function addNewRow(cli) {
    var table = document.getElementById("tableClient");
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

function registerClient() {
    if (valid) {
        var client = {
            id: clients.length + 1,
            fullName: `${document.getElementById("inputName").value} ${document.getElementById("inputSurname").value}`,
            address: `${document.getElementById("inputAddress").value}, ${document.getElementById("inputNumber").value}`,
            cep: document.getElementById("inputCep").value,
            district: document.getElementById("inputDistrict").value,
            city: document.getElementById("inputCity").value,
            state: document.getElementById("inputState").value,
        }

        valid = false;
        clients.push(client);
        addNewRow(client);
        disableNumber(true);
        document.getElementById("formClient").reset();
    }
}