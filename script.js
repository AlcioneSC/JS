// Conexión con el sitio web. Escuchador.

let formAudit = document.getElementById("inputRUT");

formAudit.addEventListener("submit", (e) => 
    {
        e.preventDefault();
        let origRUT = document.getElementById("textBox").value;
        let arrR = origRUT.split("");
        vrrR = arrR.map(element => {return parseInt(element,10)});
        let sum = 0;
        let mod = 0;
        let dV
        const sevR = ["2","7","6","5","4","3","2"];
        const eigR = ["3","2","7","6","5","4","3","2"];

        // console.log(vrrR.length)
        if(vrrR.length === 7) {
            for(let i=0; i<7; i++) {
                sum += vrrR[i]*sevR[i];
                mod = sum % 11;
                dV = 11-mod;
                if(dV==10) {
                    dV = "K";
                } else if(dV==11) {
                    dV = 0;
                }
            }
            if(!isNaN(dV) || dV === "K") {
                alert(`El dígito verificador es ${dV}`)
            } else {
                alert("RUT no válido")
            }
        } else if(vrrR.length === 8) {
            for(let i=0; i<8; i++) {
                sum += vrrR[i]*eigR[i];
                mod = sum % 11;
                dV = 11-mod;
                if(dV==10) {
                    dV = "K";
                } else if(dV==11) {
                    dV = 0;
                }
            }
            if(!isNaN(dV) || dV === "K") {
                alert(`El dígito verificador es ${dV}`)
            } else {
                alert("RUT no válido")
            }
        } else {
            alert("RUT no válido")
        }
});
