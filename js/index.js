var i = 0;
var entrada = [];
var saida = [];
entrada['barril'] = [0, 0, 0, 0, 0]; entrada['cilindro'] = [0, 0, 0, 0, 0]; entrada['chopeira'] = [0, 0, 0, 0, 0];
saida['barril'] = [0, 0, 0, 0, 0]; saida['cilindro'] = [0, 0, 0, 0, 0]; saida['chopeira'] = [0, 0, 0, 0, 0];

function nextPage() {
    var errorCount = 0;

    // Check empty fields
    $('input').each(function() {
        if (this.value == "") {
            errorCount++;
        }
    });

    if (errorCount > 0) {
        alert("Preencha todos os campos!");
        return;
    }

    // Entrada
    $('.e-barril').each(function(index) {
        entrada['barril'][index] += parseInt(this.value);
    });

    $('.e-cilindro').each(function(index) {
        entrada['cilindro'][index] += parseInt(this.value);
    });

    $('.e-chopeira').each(function(index) {
        entrada['chopeira'][index] += parseInt(this.value);
    });

    // Saida
    $('.s-barril').each(function(index) {
        saida['barril'][index] += parseInt(this.value);
    });

    $('.s-cilindro').each(function(index) {
        saida['cilindro'][index] += parseInt(this.value);
    });

    $('.s-chopeira').each(function(index) {
        saida['chopeira'][index] += parseInt(this.value);
    });

    $('input').each(function() {
        this.value = "";
    });
    
    i++;
    $('#contador').html("Contador: " + i);

    console.log(entrada);
    console.log(saida);
}

function stop() {
    var j = 1;

    for(const [key, value] of Object.entries(entrada)) {
        j = 1;
        for(const [key2, value2] of Object.entries(entrada[key])) {
            console.log(value2);
            $('#e-' + key + '-' + j).val(value2);
            j++;
        }
    }

    for(const [key, value] of Object.entries(saida)) {
        j = 1;
        for(const [key2, value2] of Object.entries(saida[key])) {
            console.log(value2);
            $('#s-' + key + '-' + j).val(value2);
            j++;
        }
    }

    $('#btn-somar').prop('disabled', true);
}

// function voltar() {
//     $('input').each(function() {
//         this.value = "";
//     });
//     i--;
//     $('#contador').html("Contador: " + i);
// }