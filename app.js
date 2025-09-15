function temu(br) {
    let katta=document.querySelector(".sayt img")
    katta.src=br.src



    let hammasi=document.querySelectorAll(".box img")
    for (let i = 0; i < hammasi.length; i++) {
        
        hammasi[i].style=""

    }

let h1=document.querySelector("h1")
h1.innerHTML=br.alt

br.style.boxShadow="0 0 40px green"
br.style.borderRadius="15px"
}

















