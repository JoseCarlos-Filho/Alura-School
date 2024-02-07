const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;
let totalMedia = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

if(totalMedia >= 7) {
    totalMedia += totalMedia * 0.1;
}

const {log} = console;
log("Média do ano: " + totalMedia.toFixed(2));