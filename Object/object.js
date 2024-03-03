var istudent = [
  {
    id: 101,
    tfseel: {
      name: "Sami",
      age: 22,
      class: 5,
      city: "karachi",
      subject: ["html", "css", "javascript", "drse nizami"],
    },
  },
  {
    id: 102,
    tfseel: {
      name: "Sohail",
      age: 27,
      class: 5,
      city: "merporkhas",
      subject: ["html", "css", "javascript", "drse nizami"],
    },
  },
  {
    id: 103,
    tfseel: {
      name: "minhaaj",
      age: 25,
      class: 5,
      city: "islamabad",
      subject: ["html", "css", "javascript", "drse nizami"],
    },
  },
  {
    id: 104,
    tfseel: {
      name: "laraib",
      age: 30,
      class: 5,
      city: "multaan",
      subject: ["html", "css", "javascript", "drse nizami"],
    },
  },
  {
    id: 105,
    tfseel: {
      name: "hmmad",
      age: 20,
      class: 5,
      city: "lahoor",
      subject: ["html", "css", "javascript", "drse nizami"],
    },
  },
];

var dropdown = document.getElementById("dropdown");
var tabel = document.getElementById("tabel");

dropdown.innerHTML += `  <option value="">Slect id name</option>`;

for (var a = 0; a < istudent.length; a++) {
  tabel.innerHTML += `  <tr>
<td><span>${istudent[a].id}</span></td>
<td><span>${istudent[a].tfseel.name}</span></td>
<td><span>${istudent[a].tfseel.age}</span></td>
<td><span>${istudent[a].tfseel.class}</span></td>
<td><span>${istudent[a].tfseel.city}</span></td>
<td><span>${istudent[a].tfseel.subject}</span></td>
</tr> `;
}

for (var b = 0; b < istudent.length; b++) {
  dropdown.innerHTML += `<option value="${istudent[b].id}">${istudent[b].id}</option>`;
}

dropdown.addEventListener("change", function () {
  tabel.innerHTML = " ";
  for (var j = 0; j < istudent.length; j++) {
    if (istudent[j].id == dropdown.value) {
      tabel.innerHTML = `  <tr>
    <td><span>${istudent[j].id}</span></td>
    <td><span>${istudent[j].tfseel.name}</span></td>
    <td><span>${istudent[j].tfseel.age}</span></td>
    <td><span>${istudent[j].tfseel.class}</span></td>
    <td><span>${istudent[j].tfseel.city}</span></td>
    <td><span>${istudent[j].tfseel.subject}</span></td>
    </tr> `;
    }
  }
});
