let elsoSzamjegySzovege = "" /* vátozot létrehoztuk, beálltitottuk az értékét 0-ra  */
let masodikSzamjegySzovege = ""
let muvelet = ""

let szamok = document.getElementsByClassName("szam") /* eredmenye lista, indexxel fogjuk meg */
let fosok = document.getElementsByClassName("fos")
let kiiro = document.getElementById("kiirato")
const egyenlo =document.getElementById("egyenlo")
console.log(szamok[0].textContent)

for (let index = 0; index < szamok.length; index++) {
    szamok[index].addEventListener("click",beir)
    
}

function beir(event){
    console.log(event.target)
    console.log(event.target.textContent)
    console.log(kiiro)
    kiiro.value  += event.target.textContent
  
}
for (let index = 0; index < fosok.length; index++) {
    fosok[index].addEventListener("click",muveletVegzese)
    
}
function muveletVegzese(event){
    elsoSzamjegySzovege =kiiro.value
    console.log(elsoSzamjegySzovege)
    console.log(event.target.textContent )
    muvelet=event.target.textContent
    kiiro.value=""
}
egyenlo.addEventListener("click",szamolas)

function szamolas(){
    masodikSzamjegySzovege=kiiro.value
    if(muvelet =="+"){
        eredmeny= Number(elsoSzamjegySzovege) + Number(masodikSzamjegySzovege)
    }
    if(muvelet =="-"){
        eredmeny= Number(elsoSzamjegySzovege) - Number(masodikSzamjegySzovege)
    }
    if(muvelet =="*"){
        eredmeny= Number(elsoSzamjegySzovege) * Number(masodikSzamjegySzovege)
    }
    if(muvelet =="/" && masodikSzamjegySzovege != "0"){
        eredmeny= Number(elsoSzamjegySzovege) / Number(masodikSzamjegySzovege)
    }
    kiiro.value=eredmeny
}
const torles = document.getElementById("torles")
torles.addEventListener("click".torles)

function torles(){
    kiiro.value =""
    elsoSzamjegySzovege =""
}