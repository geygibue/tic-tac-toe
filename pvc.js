"strict"
var aktualisJatekos = "O"; // az "O" mindig a player "X" minidg a computer
var beirt_cellak = 0;
var gameover = false;

// TODO: ha valaki nyer akkor még mindig lehet a mezőkre klikkelni!
function hely(doboz) {
    if (doboz.innerText !== "") return;
    if (gameover) return;
    if (aktualisJatekos == "O") {
        doboz.innerText = aktualisJatekos;
        beirt_cellak++;
        
        if (beirt_cellak < 9) jatekTablaEllenorzes();
        else {
            document.getElementById("eredmeny").innerText = 'Döntetlen!';
            gameover = true;
        }
        aktualisJatekos = "X";
        
        var gondolkodasi_ido = 500 + Math.random() * 1000;
        setTimeout(comupterTurn, gondolkodasi_ido);
    }
}
function comupterTurn() {
    // const cursorStyle = document.createElement('style');
    // cursorStyle.innerHTML = '*{cursor: wait!important;}';
    // cursorStyle.id = 'cursor-style';
    // document.head.appendChild(cursorStyle);
    while (aktualisJatekos === "X" && gameover === false) {

        
        var comp_x = Math.floor(Math.random() * 3);
        var comp_y = Math.floor(Math.random() * 3);

        console.log(comp_x, comp_y);

        var cellaId = "c" + comp_x + "_" + comp_y
        if (cellaErtek(cellaId) === "") {
            cellaErtek(cellaId, aktualisJatekos);
            beirt_cellak++;
            aktualisJatekos = "O";

            if (beirt_cellak < 9) jatekTablaEllenorzes();
            else {
                document.getElementById("eredmeny").innerText = 'Döntetlen!';
                gameover = true;
            }
        }

    }
    // cursorStyle.remove();
}
function ellenorzes(elso, masodik, harmadik) {
    if (elso !== "" && elso === masodik && elso === harmadik) {
        document.getElementById("eredmeny").innerText = 'Játék vége győzött a(z) ' + elso + "!";
        gameover = true;
    }
}
function cellaErtek(id, ertek) {
    var cella = document.getElementById(id);
    if (!ertek) return cella.innerText;
    else cella.innerText = ertek;
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