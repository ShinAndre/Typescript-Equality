# Typescript-Equality


Progetto didattico in **TypeScript** che modella professioniste, programmi di formazione e piattaforme digitali per promuovere pari opportunità e diversità di genere.

 ## Descrizione
📋
Il progetto simula le interazioni tra tre entità principali:

Professionista Media: una persona con nome, cognome, specializzazione, esperienze lavorative e interessi personali, che può iscriversi a programmi di formazione.
Programma di Formazione: un percorso formativo con titolo, descrizione, ambito di specializzazione, durata e un elenco di partecipanti.
Piattaforma: un canale (tradizionale o digitale) che promuove contenuti su temi come l'uguaglianza di genere e la diversità, e permette alle professioniste di pubblicare contenuti.
## Avvio
Per l'avvio,puoi cliccare il seguente link e visualizzarlo tramite Codepen :

https://codepen.io/ShinAndre/pen/jEyeLBE

## Struttura

```
├── script.ts    # Sorgente TypeScript
```

## Classi principali

- **ProfessionistaMedia**: `nome`, `cognome`, `specializzazione`, `esperienza[]`, `interessi[]` → `partecipaProgramma()`
- **ProgrammaFormazione**: `titolo`, `descrizione`, `ambitoSpecializzazione`, `durata`, `elencoPartecipanti[]` → `aggiungiPartecipante()`
- **Piattaforma**: `nome`, `tipo`, `descrizione`, `categoriaContenuto[]` → `pubblicaContenuto()`
