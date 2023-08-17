const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

let transData;

// Make an API request
// fetch('https://script.google.com/macros/s/AKfycbw9DLMlrxtjskXrGtUBr_awlqJF8rCKrLIBdA_7ND8e9dUgrjBx4GAxe-CWE88r5UVLwA/exec')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('total').innerHTML=`₹${data.total}`
//         document.getElementById('trans').innerHTML=data.trans
//         document.getElementById('deposited').innerHTML=`₹${data.deposited}`
//         document.getElementById('balance').innerHTML=`₹${data.balance}`

//     })
//     .catch(error => {
//         console.log('Error:', error);
//     });

// fetch('https://script.google.com/macros/s/AKfycbw9DLMlrxtjskXrGtUBr_awlqJF8rCKrLIBdA_7ND8e9dUgrjBx4GAxe-CWE88r5UVLwA/exec')
//     .then(response => response.json())
//     .then(data => {
//         transData = data.transData;
//         console.log(transData);
//         searchBar.addEventListener("keyup", (e) => {
//           const searchString = e.target.value.toLowerCase();
//           const filteredCharacters = hpCharacters.filter((character) => {
//             return character.name.toLowerCase().includes(searchString);
//           });
//           displayCharacters(filteredCharacters);
//         });
        
//         const loadCharacters = async () => {
//           try {
//             const res = transData;
//             console.log(transData);
//             hpCharacters = res;
//             console.error(hpCharacters);
//             displayCharacters(hpCharacters);
//           } catch (err) {
//             console.error(err);
//           }
//         };
        
//         const displayCharacters = (characters) => {
//           const htmlString = characters.slice().reverse()
//             .map((character) => {
//               return `
//               <a href='./rio_casa.html?name=${character.name}&contact=${character.contact}&amount=${character.advance}&balance=${character.balance}&checkin=${new Date(character.checkin).toLocaleDateString('en-GB')}&checkout=${new Date(character.checkout).toLocaleDateString('en-GB')}'>
//               <li class="character">
//                         <h2>
//                        ${character.name}
//                        <span>RIOCSA${character.contact}
//                             </h2>
//                             <p>${new Date(character.checkin).toLocaleDateString('en-GB')}</p>
//                     </li></a>
//                 `;
//             })
//             .join("");
//           charactersList.innerHTML = htmlString;
//         };
        
//         loadCharacters();

//     })
//     .catch(error => {
//         console.log('Error:', error);
//     });

