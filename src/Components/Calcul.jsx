import React, { useState } from 'react'

export default function Calcul() {
    
    const [capital, setCapital] = useState(0)
    const [taux, setTaux] = useState(0)
    const [duree, setDuree] = useState(0)
    const [mensualite, setMensualite] = useState(0)

    const calculer = () => {
        const mensualite = (capital * taux/1200) / (1-Math.pow(1+taux/1200,-duree))

        setMensualite(mensualite);
    }

  return (
    <div>
        <div>
            <label htmlFor="capital">Capital : </label>
            <input type="number" name="capital" id="capital" value={capital} onChange={(e) => setCapital(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="taux">Taux : </label>
            <input type="number" name="taux" id="taux" value={taux} onChange={(e) => setTaux(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="duree">Duree : </label>
            <input type="number" name="duree" id="duree" value={duree} onChange={(e) => setDuree(e.target.value)}/>
        </div>
        <button type="button" onClick={calculer}>Calculer</button>
        <div>
            <label htmlFor="mens">Mensualité : </label>
            <input type="number" name="mens" id="mens" value={mensualite.toFixed(2)} onChange={(e) => setMensualite(e.target.value)} readOnly/>
        </div>
    </div>
  )
}
