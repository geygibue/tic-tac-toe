var aktualisJatekos = "O";
var beirt_cellak = 0;

// TODO: győzelem esetén végtelen ciklusba kerül!
function hely(doboz) {
    if (doboz.innerText !== "") return;
    
    doboz.innerText = aktualisJatekos;
    beirt_cellak++;
    
    aktualisJatekos = aktualisJatekos == "O" ? "X" : "O";
    if (beirt_cellak < 9) jatekTablaEllenorzes();
    else document.getElementById("eredmeny").innerText = 'Döntetlen!';
}
function ellenorzes(elso, masodik, harmadik) {
    if (elso !== "" && elso === masodik && elso === harmadik) {
        document.getElementById("eredmeny").innerText = 'Játék vége győzött a(z) ' + elso + "!";
    }
}
function cellaErtek(id) {
    return document.getElementById(id).innerText;
}
function jatekTablaEllenorzes() {
    // Sorok és oszlopok ellenőrzése
    for (var i = 0; i <= 2; i++) {
        ellenorzes(cellaErtek("c0_" + i), cellaErtek("c1_" + i), cellaErtek("c2_" + i));
        ellenorzes(cellaErtek("c" + i + "_0"), cellaErtek("c" + i + "_1"), cellaErtek("c" + i + "_2"));
    }
    // 1 átló ellenőrzése
    ellenorzes(cellaErtek("c0_0"), cellaErtek("c1_1"), cellaErtek("c2_2"));
    // 2átló ellenőrzése
    ellenorzes(cellaErtek("c2_0"), cellaErtek("c1_1"), cellaErtek("c0_2"));
}