fetch('menu.json')
.then(response => response.json())
.then( data =>{
    const menuContainer = document.getElementById ('menu-container');
    let total = 0;
    data.items.forEach( category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        const tableHead = `<tr><th>Foto</th><th>Description</th><th>Precio</th><th>Seleccionar</th></tr>`;
        

        category.items.forEach(item => { 
            tableContent +=
            `<tr>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name} - ${item.description}</td>
            <td>${item.price}</td>
            <td><input type="checkbox" data-price="${item.price.repleace}"('$', '')}" onchange="updateTotal"></td>
            </tr>`; 
        });
        table.innerHTML=tableContent;
        menuContainer.appendChild(table);
    });
});
function updateTotal(){
const checkboxes=document.querySelectorAll('imput [type="checkbox"] [data-price]');
let currentTotal = 0;
checkboxes.forEach(checkbox=>{
    if(checkbox.checked){
    curentTotal += parseFloat(checkbox.getAttribute ('data-price'));
    
}
});
document.getElementById('total').textContent=currenTtotal.toFixed(2);
}