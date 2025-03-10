//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.



const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// arrElement = arr[i]
const container = document.getElementById ("container")
for (let i= 0; i< teamMembers.length; i++) {
  const thisTeamMembers = teamMembers[i]
  console.log(thisTeamMembers)
  const {name, role, email, img} = thisTeamMembers
  console.log(name, role, email, img)
  const col = ` <div class="col-6">
        <div class="p-3 d-flex">
          <img src="${img}" alt="">
          <div>
         
            <p>
              ${name}
            </p>
            <p>${role}</p>
            <p>${email}</p>
          </div>
        </div>
      </div>`
      container.innerHTML += col
}


  