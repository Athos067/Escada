let text = '';
let bloco = prompt('Digite o material.');
let degrau = Number(prompt('Digite o numero de degraus.'));
let i = 0; 
while(bloco.length != 1){
        bloco = prompt('Digite um material de um caracter por favor.');
    }
    
for(i;i <= degrau-1; i++ ){
    
    text += bloco;
    console.log(text);
    

}