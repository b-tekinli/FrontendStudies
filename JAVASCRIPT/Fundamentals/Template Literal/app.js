const name = "mustafa Murat Coşkun";
const department = "Bilişim";
const salary = 4000;


// const a = "İsim" + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary;

// const a = `İsim: ${name}\nDeparman:${department}\nMaaş:${salary}`;

// const hmtl = "<ul> " +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "<ul>";

function a() {
    return "Merhaba";
}

const html = <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${10/4}</li>
    <li>${a()}</li>
</ul>

document.body.innerHTML = html;