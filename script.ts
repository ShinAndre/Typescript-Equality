interface IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: string;
  esperienza: string[];
  interessi: string[];
  partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  ambitoSpecializzazione: string;
  durata: string;
  elencoPartecipanti: IProfessionistaMedia[];
  aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
  nome: string;
  tipo: string;
  descrizione: string;
  categoriaContenuto: string[];
  pubblicaContenuto(professionista: IProfessionistaMedia,contenuto: string,): void ;
}

class ProfessionistaMedia implements IProfessionistaMedia {
  constructor(
    public nome: string,
    public cognome: string,
    public specializzazione: string,
    public esperienza: string[],
    public interessi: string[],
  ) {}
  partecipaProgramma(programma: IProgrammaFormazione): void {
    programma.aggiungiPartecipante(this);
  }
}

class ProgrammaFormazione implements IProgrammaFormazione {
  constructor(
    public titolo: string,
    public descrizione: string,
    public ambitoSpecializzazione: string,
    public durata: string,
    public elencoPartecipanti: IProfessionistaMedia[],
  ) {}
  aggiungiPartecipante(professionista: IProfessionistaMedia): void {
    this.elencoPartecipanti.push(professionista)
    console.log("partecipante aggiunto",this);
    
  }
}
class Piattaforma implements IPiattaforma {
  constructor(
    public nome: string,
    public tipo: string,
    public descrizione: string,
    public categoriaContenuto: string[],
  ) {}
  pubblicaContenuto(professionista: IProfessionistaMedia,contenuto: string,): void {
    console.log(`${professionista.nome} ${professionista.cognome},ha pubblicato : ${contenuto}`);
  }
}

//Professioniste
const persona1 = new ProfessionistaMedia(
  "Francesca",
  "Gialli",
  "Relazioni interpersonali",
  ["Call Center", "Estetista"],
  ["Giochi", "Libri"],
);
const persona2 = new ProfessionistaMedia(
  "Laura",
  "Rossi",
  "Creare contenuti per social network",
  ["Parrucchiera", "Social Media Manager"],
  ["Musica", "Libri", "Cucina"],
);

const persona3 = new ProfessionistaMedia(
  "Roberta",
  "De Luca",
  "Profis - Gestionale per commercialisti",
  ["Commercialista"],
  ["Palestra", "Libri"],
);

//Programmi
const programma1 = new ProgrammaFormazione(
  "Pari Opportunitá",
  "Rendere qualsiasi occasione/opportunitá uguale per tutti,senza disparitá",
  "Uguaglianza",
  "3 mesi",
  [],
);

const programma2 = new ProgrammaFormazione(
  "Social Media",
  "Utilizzo e controllo dei social network di Voci",
  "Social Media Manager",
  "6 mesi",
  [],
);

//Piattaforme
const piattaforma1 = new Piattaforma(
  "E-quality",
  "tradizionale",
  "Piattaforma che promuove contenuti sull'uguaglianza tra i generi",
  [],
);

const piattaforma2 = new Piattaforma(
  "Not the same",
  "digitale",
  "Piattaforma che promuove contenuti sulla diversitá tra i generi",
  [],
);

programma1.aggiungiPartecipante(persona1)
persona2.partecipaProgramma(programma2)
piattaforma1.pubblicaContenuto(
  persona3,
  "La parità di genere non è solo una meta, ma la base su cui costruire una professione solida e innovativa. " +
  "Come commercialista, vedo ogni giorno quanto il valore delle competenze non abbia genere: " +
  "l'equità nelle opportunità è il vero motore della crescita economica e del benessere aziendale. " +
  "Insieme possiamo superare gli stereotipi e creare ambienti di lavoro dove il merito è l'unico standard. #ParitàDiGenere #Inclusione #EQuality"
);

piattaforma2.pubblicaContenuto(
  persona2,
  "La diversità è il nostro più grande vantaggio competitivo. " +
  "Sui social network, come nella vita, raccontare prospettive differenti non serve solo a rompere gli schemi, " +
  "ma a costruire comunità più ricche e consapevoli. Non parliamo solo di parità numerica, " +
  "ma di valorizzare l'unicità di ogni voce. La differenza è un valore aggiunto che dobbiamo imparare a celebrare ogni giorno. #DiversityMatters #NotTheSame #SocialImpact"
);