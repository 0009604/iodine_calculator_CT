const CONFIG = {
    // URL definitivo di Google Apps Script per la sincronizzazione cloud
    googleScriptURL: "https://script.google.com/macros/s/AKfycbyYG9TV_rk-DHbBLI-rbmq4emxyRFobM_AnJFjNScYb2PydPRD78w04LySqYQtiLFrWdA/exec",
    
    // Configurazione studi BODY: Total Iodine Load (TIL) in mgI/kg
    tilParametri: {
        "STADIAZIONE": 720,
        "TORACE": 450,
        "ADDOME": 670,
        "CRANIO": 400,
        "COLLO": 430
    },

    // Sconti moltiplicativi per le tecnologie TC studi BODY
    scontiTecnologici: {
        "SECT_Iterative": 1.0,       
        "SECT_DeepLearning": 0.95,   
        "DECT_Iterative": 0.90,      
        "DECT_DeepLearning": 0.85    
    },

    // Correttivi volumetrici fissi in ml basati sulla Frequenza Cardiaca (BODY)
    correzioneFrequenza: {
        sotto60: -7,   
        sopra80: 5     
    },

    // Configurazione studi vascolari CTA: Target IDR, Range di tolleranza, Volumi base (a 370 mgI/ml) e Floor di sicurezza
    ctaParametri: {
        "Willis/TSA":         { idrTarget: 1.3, rangeOk: [1.1, 1.6], baseVol: 45,  floor: 25 },
        "Polmonare":          { idrTarget: 1.4, rangeOk: [1.2, 1.7], baseVol: 50,  floor: 30 },
        "Aorta toracica":     { idrTarget: 1.8, rangeOk: [1.5, 2.2], baseVol: 90,  floor: 60 },
        "Aorta toraco-add.":  { idrTarget: 1.8, rangeOk: [1.5, 2.2], baseVol: 100, floor: 65 },
        "Arti inferiori":     { idrTarget: 1.6, rangeOk: [1.3, 2.0], baseVol: 110, floor: 70 }
    },

    // Sconti progressivi e conservativi per Angio-TC (CTA) basati sull'ottimizzazione del voltaggio
    scontiCtaSECT: {
        120: 0.00,
        100: 0.08,
        80:  0.20,
        70:  0.32
    },

    scontiCtaDECT: {
        120: 0.00, 115: 0.00, 110: 0.00, 105: 0.00, 100: 0.00,
        95:  0.025, 90: 0.05, 85: 0.075, 80: 0.10, 75: 0.125,
        70:  0.15, 65: 0.185, 60: 0.22, 55: 0.26, 50: 0.30,
        45:  0.34, 40: 0.38
    }
};
