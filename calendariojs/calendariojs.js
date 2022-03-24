

//calendario ou index - TESTE

// cria o table geral do calendario
var table = document.createElement(`table`);
table.setAttribute(`cellpadding`,`0`);
table.setAttribute(`callspacing`,`0`);
// cria o thead que vai receber o nome mes 
var thead = document.createElement(`thead`);
// cria a linha  
var tr = document.createElement(`tr`);
//cria a coluna 
var td = document.createElement(`td`); 
td.setAttribute(`colspan`,`7`);
td.innerText = `Janeiro 2022 - teste`;
 
//crio o tbody
var tbody = document.createElement(`tbody`);

table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);
tr.appendChild(td);


function imprimeDiasDaSemana() {
    var dias = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    var tr = document.createElement(`tr`);

    for(var dia of dias){
        console.log(`0 dia é: ` + dia);
        var td = document.createElement(`td`);
        td.innerText = dia;
        tr.appendChild(td);

    }

    tbody.appendChild(tr);

}

function  imprimeDiasNumericos() {
    var tr = document.createElement(`tr`);
    for (var dia = 1; dia <=31; dia++) {
        var td = document.createElement(`td`);
        td.innerText = dia;
        tr.appendChild(td);
//janeiro de 2022
//if (dia === 1 || dia === 8 || dia === 15 || dia === 22 || dia === 29) {
        if (dia % 7 === 0) {
    tbody.appendChild(tr);
           var tr = document.createElement(`tr`);       
        }
    }
    
    tbody.appendChild(tr);
}

imprimeDiasDaSemana();
imprimeDiasNumericos();
body.appendChild(table);
