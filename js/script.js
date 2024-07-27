var clients = [
    {
        id: 1,
        fullName: "Angelo Ferraz",
        adress: "Rua Sorocaba, 33",
        cep: 12232312,
        district: "São José",
        city: "São Paulo",
        state: "SP"
    },
    {
        id: 2,
        fullName: "Carlos Silva",
        adress: "Rua São Paulo, 123",
        cep: 12345678,
        district: "Barra Funda",
        city: "São Paulo",
        state: "SP"
    },
    {
        id: 3,
        fullName: "Pedro Silva",
        adress: "Rua Rio de Janeiro, 456",
        cep: 98765432,
        district: "Barra da Tijuca",
        city: "Rio de Janeiro",
        state: "RJ"
    }
]

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