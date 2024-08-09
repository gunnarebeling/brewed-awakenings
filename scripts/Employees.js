import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const orders = getOrders();

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
document.addEventListener("click", (clickEvent)=>{
    const itemClicked = clickEvent.target;
    const name = itemClicked.dataset.name
    const employeeClickedId = parseInt(itemClicked.dataset.id)
    if (itemClicked.dataset.type === "employee") {
        let counter = 0;
        orders.forEach(order => {
            if (order.employeeId === employeeClickedId) {
                counter++
                
            }

            
        });
        window.alert(`${name} sold ${counter} products`)
        
    }
})

