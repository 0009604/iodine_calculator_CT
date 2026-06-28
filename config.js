const CONFIG = {
    // URL Google Apps Script
    googleScriptURL: "https://script.google.com/macros/s/AKfycbyYG9TV_rk-DHbBLI-rbmq4emxyRFobM_AnJFjNScYb2PydPRD78w04LySqYQtiLFrWdA/exec",
    
    // Parametri Total Iodine Load (TIL) in mgI/kg per studi BODY
    tilParametri: {
        "STADIAZIONE": 720, "TORACE": 450, "ADDOME": 670, "CRANIO": 400, "COLLO": 430
    },

    // Sconti moltiplicativi algoritmi BODY
    scontiTecnologici: {
        "SECT_Iterative": 1.0, "SECT_DeepLearning": 0.95, "DECT_Iterative": 0.90, "DECT_DeepLearning": 0.85    
    },

    // Correttivi in ml legati alla FC per BODY
    correzioneFrequenza: { sotto60: -7, sopra80: 5 },

    // Parametri CTA conservativi (Volumi ribassati)
    ctaParametri: {
        "Willis/TSA":         { idrTarget: 1.2, rangeOk: [1.0, 1.5], baseVol: 42,  floor: 20 },
        "Polmonare":          { idrTarget: 1.3, rangeOk: [1.1, 1.6], baseVol: 45,  floor: 25 },
        "Cuore":              { idrTarget: 1.4, rangeOk: [1.2, 1.7], baseVol: 55,  floor: 30 },
        "Aorta toracica":     { idrTarget: 1.6, rangeOk: [1.4, 2.0], baseVol: 80,  floor: 50 },
        "Aorta toraco-add.":  { idrTarget: 1.6, rangeOk: [1.4, 2.0], baseVol: 90,  floor: 55 },
        "Arti inferiori":     { idrTarget: 1.5, rangeOk: [1.2, 1.8], baseVol: 100, floor: 60 }
    },

    // Riduzione mdc basata sui kVp/keV per CTA
    scontiCtaSECT: { 120: 0.00, 100: 0.08, 80: 0.20, 70: 0.32 },
    scontiCtaDECT: { 140: 0.00, 130: 0.00, 120: 0.00, 100: 0.00, 70: 0.15, 50: 0.30, 40: 0.38 },
    
    // Limiti di classificazione BMI
    limitiBMI: {
        sottopeso: 18.5,
        normopeso: 25.0,
        sovrappeso: 30.0
    }
};
