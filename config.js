const CONFIG = {
    // Incolla qui il link della Web App fornito da Google Apps Script dopo il deployment
    googleScriptURL: "INSERISCI_QUI_IL_TUO_URL_DI_GOOGLE_SCRIPT",
    
    // Total Iodine Load (TIL) in mgI/kg per ciascun distretto Body
    tilParametri: {
        "STADIAZIONE": 720,
        "TORACE": 450,
        "ADDOME": 670,
        "CRANIO": 400,
        "COLLO": 430
    },

    // Sconti moltiplicativi per le tecnologie TC (es. 0.95 = sconto del 5%)
    scontiTecnologici: {
        "SECT_Iterative": 1.0,       // Baseline standard (nessuno sconto)
        "SECT_DeepLearning": 0.95,   // Sconto 5%
        "DECT_Iterative": 0.90,      // Sconto 10%
        "DECT_DeepLearning": 0.85    // Sconto 15% (Massima efficienza combi)
    },

    // Correttivi in millilitri (ml) basati sulla Frequenza Cardiaca (FC)
    correzioneFrequenza: {
        sotto60: -7,   // ml da sottrarre se FC <= 60 BPM
        sopra80: 5     // ml da aggiungere se FC >= 80 BPM
    }
};