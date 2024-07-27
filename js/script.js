function searchCEP() {
    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    $.getJSON(url, (adress) => {
        console.log(adress);
    })
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

    var adressNode = document.createTextNode(cli.adress);
    newRow.insertCell().appendChild(adressNode);

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