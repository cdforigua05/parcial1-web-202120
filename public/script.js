import { getRow } from "./template.js";
const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  //alert('Implementar lógica del button submit');
  const heightRef = input.value
  removeAllChildNodes(tbody)
  const pairs = getresults(heightRef).then(function(pairs){
    console.log(pairs)
    if (pairs.length===0){
      alert("No matches found")
    }else{
    pairs.forEach(element=>{
      const row = document.createElement('tr');
      row.innerHTML = renderRow(element)
      tbody.appendChild(row)
    })
    }
  })
  console.log(pairs)
  event.preventDefault();
});

function renderRow(element){
  const template = getRow(element)
  return template
}

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  return data.parejas  
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
