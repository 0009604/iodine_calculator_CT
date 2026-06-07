const CONFIG = {
    // URL definitivo di Google Apps Script fornito dall'utente
    googleScriptURL: "https://script.google.com/macros/s/AKfycbyYG9TV_rk-DHbBLI-rbmq4emxyRFobM_AnJFjNScYb2PydPRD78w04LySqYQtiLFrWdA/exec",
    
    // Total Iodine Load (TIL) in mgI/kg per ciascun distretto Body
    tilParametri: {
        "STADIAZIONE": 720,
        "TORACE": 450,
        "ADDOME": 670,
        "CRANIO": 400,
        "COLLO": 430
    },

    // Sconti moltiplicativi per le tecnologie TC (es. 0.85 = sconto del 15%)
    scontiTecnologici: {
        "SECT_Iterative": 1.0,       
        "SECT_DeepLearning": 0.95,   
        "DECT_Iterative": 0.90,      
        "DECT_DeepLearning": 0.85    
    },

    // Correttivi in millilitri (ml) basati sulla Frequenza Cardiaca (FC)
    correzioneFrequenza: {
        sotto60: -7,   
        sopra80: 5     
    }
};
