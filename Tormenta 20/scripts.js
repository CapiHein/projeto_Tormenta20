const racas = [
    "Humano", "Anão", "Dahllan", "Elfo", "Goblin", "Lefou", "Minotauro", "Qareen", "Hynne", "Golem", "Kliren", "Medusa", "Osteon", "Serei/Tritão", "Sílfide", "Suraggel", "Trog"
];

const datalist = document.getElementById("racas-list");

racas.forEach (racas => {
    const option = document.createElement("option");
    option.value = racas;
    datalist.appendChild(option);
});