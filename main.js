/*
let brojac = 1600000330
class Klijent {                                                         // Ovde definisemo klasu.  Tj kako ce izgledati unos dole u const
    constructor(ime,stanje) {
        this.ime = ime
        this.brojRacuna = ++brojac
        this.stanje = stanje
    }

    setIme(ime) {
        if (ime.length < 5) {
            console.log("Nema dovoljno slova");
            
        }
        else {
            this.ime = ime
        }
       
    }


    prenetiSredstva(primalac, iznos) {
        if (this.stanje - iznos >= 0) {                                  // Ukoliko je stanje vece od 0                  
            primalac.stanje += iznos;                               // tom klijentu povecati
            this.stanje -= iznos;                                // sebi da smanji sredstva
            console.log("Trenutno stanje je", this.stanje);
        }                                                     // Napisi ovo 
        else console.log("Nemate dovoljno sredstava");       // U suprotnom napisi ovo
    }
}
const petar = new Klijent("Petar Petrovic",2000)                   // Unosimo atrubute kao sto je zadato u klasi na pocetku
const ana = new Klijent("Ana Pavlovic",15000)                      // Unosimo atrubute kao sto je zadato u klasi na pocetku
const ljubica = new Klijent("Ljubica Dikic",4000)                  // Unosimo atrubute kao sto je zadato u klasi na pocetku

*/




