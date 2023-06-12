const results = document.querySelector(".user-list")
const userList = []

// Načtení dat
getPerson()

// Získání dat z API
async function getPerson(){
    const allPerson = await fetch("https://randomuser.me/api?results=99")
    const data = await allPerson.json()


    
    // Projetí pole 
    data.results.map( (onePerson) => {

        // Změna na český název pohlaví
        let sex = "žena"
        if (onePerson.gender == "female"){
            sex = "žena"
        } else{
            sex = "muž"
        }


        // Výpis do stránky
        let card = document.createElement("div")
        card.innerHTML = `
        
        <div class="card">

        <div class="person">
        <img src="${onePerson.picture.large}" alt="${onePerson.name.title}. ${onePerson.name.first} ${onePerson.name.last}">
        

        <div class="container-details">
            <p class="contact">Osobní údaje:</p>
            <p>${onePerson.name.title}. ${onePerson.name.first} ${onePerson.name.last}</p>
            <p>Pohlaví: ${sex}</p>
            <p>Věk: ${onePerson.dob.age} let</p>

        </div>
        </div>

        <div class="container-contact">
            <p class="contact">Kontaktní údaje:</p>
            <p>telefon: ${onePerson.phone} </p>
            <p>email: ${onePerson.email}</p>
            <p>Adresa: ${onePerson.location.street.name} ${onePerson.location.street.number}, ${onePerson.location.city} ${onePerson.location.postcode}, ${onePerson.location.country} </p>

        </div>

    </div>

        `

        // Uložení do výsledku a prázdného pole
        results.appendChild(card)
        userList.push(card)
    })
}
console.log(results.children);



// Získání dat z políčka
let search = document.querySelector(".search-text")


search.addEventListener("input", (e) => {


    dataFilter(e.target.value)

    
})

// Filter 
function dataFilter(inputText){
    userList.forEach(function(oneUser){
        if(oneUser.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide")
        }else{
            oneUser.classList.add("hide")
        }
    })
}







