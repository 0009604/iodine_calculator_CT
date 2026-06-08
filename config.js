const CONFIG = {
    // Sostituisci se necessario con l'URL della tua web app aggiornata
    googleScriptURL: "https://script.google.com/macros/s/AKfycbyYG9TV_rk-DHbBLI-rbmq4emxyRFobM_AnJFjNScYb2PydPRD78w04LySqYQtiLFrWdA/exec",
    
    // Parametri Total Iodine Load (TIL) in mgI/kg per studi BODY
    tilParametri: {
        "STADIAZIONE": 720, 
        "TORACE": 450, 
        "ADDOME": 670, 
        "CRANIO": 400, 
        "COLLO": 430
    },

    // Sconti moltiplicativi per algoritmi avanzati BODY
    scontiTecnologici: {
        "SECT_Iterative": 1.0, 
        "SECT_DeepLearning": 0.95, 
        "DECT_Iterative": 0.90, 
        "DECT_DeepLearning": 0.85    
    },

    // Correttivi volumetrici (ml) legati alla cinetica cardiaca
    correzioneFrequenza: { sotto60: -7, sopra80: 5 },

    // Parametri CTA conservativi per l'ottimizzazione del volume di mdc
    ctaParametri: {
        "Willis/TSA":         { idrTarget: 1.2, baseVol: 42,  floor: 20 },
        "Polmonare":          { idrTarget: 1.3, baseVol: 45,  floor: 25 },
        "Aorta toracica":     { idrTarget: 1.6, baseVol: 80,  floor: 50 },
        "Aorta toraco-add.":  { idrTarget: 1.6, baseVol: 90,  floor: 55 },
        "Arti inferiori":     { idrTarget: 1.5, baseVol: 100, floor: 60 }
    },

    // Moltiplicatori di riduzione basati sui kV/keV impostati
    scontiCtaSECT: { 120: 0.00, 100: 0.08, 80: 0.20, 70: 0.32 },
    scontiCtaDECT: { 140: 0.00, 130: 0.00, 120: 0.00, 100: 0.00, 70: 0.15, 50: 0.30, 40: 0.38 }
};
