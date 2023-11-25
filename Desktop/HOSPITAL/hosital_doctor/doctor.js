document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const table = document.querySelector('table tbody');
    const row = table.insertRow();
    const name = document.querySelector('#name').value;
    const doctor_id = document.querySelector('#doctor_id').value;
    const specialization = document.querySelector('#specialization').value;
    const experience = document.querySelector('#experience').value;
    const email = document.querySelector('#email').value;
    const mobile = document.querySelector('#mobile').value;
    const role = 'Doctor';
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });
    row.insertCell().textContent = name;
    row.insertCell().textContent = doctor_id;
    row.insertCell().textContent = specialization;
    row.insertCell().textContent = experience;
    row.insertCell().textContent = email;
    row.insertCell().textContent = mobile;
    row.insertCell().textContent = role;
    row.appendChild(deleteBtn);
  });
  