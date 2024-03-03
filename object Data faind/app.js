var databas = [
  {
    id: "karachi",
    tfseel: {
      brachiz: 5,
      tichar: 10,
      istudent: 226,
      classez: 11,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "hadraba",
    tfseel: {
      brachiz: 3,
      tichar: 15,
      istudent: 226,
      classez: 4,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "Lahoor",
    tfseel: {
      brachiz: 10,
      tichar: 40,
      istudent: 426,
      classez: 5,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "islamabad",
    tfseel: {
      brachiz: 7,
      tichar: 26,
      istudent: 252,
      classez: 5,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "sadiqabad",
    tfseel: {
      brachiz: 2,
      tichar: 12,
      istudent: 112,
      classez: 10,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "multan",
    tfseel: {
      brachiz: 5,
      tichar: 15,
      istudent: 212,
      classez: 15,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "nwabshah",
    tfseel: {
      brachiz: 3,
      tichar: 10,
      istudent: 140,
      classez: 10,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "merporkhas",
    tfseel: {
      brachiz: 3,
      tichar: 11,
      istudent: 150,
      classez: 11,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
  {
    id: "bdeen",
    tfseel: {
      brachiz: 1,
      tichar: 5,
      istudent: 100,
      classez: 5,
      subject: ["tfseer", "hadees", "fiqqah", "mantiq", "blaget"],
    },
  },
];

var dropdown1 = document.getElementById("dropdown1");
var tabel = document.getElementById("tabel");

dropdown1.innerHTML += `  <option value="">Slect id name</option>`;

for (var a = 0; a < databas.length; a++) {
  tabel.innerHTML += `  <tr>
<td><span>${databas[a].id}</span></td>
<td><span>branchiz = ${databas[a].tfseel.brachiz}</span></td>
<td><span>Ticher = ${databas[a].tfseel.tichar}</span></td>
<td><span>istudent = ${databas[a].tfseel.istudent}</span></td>
<td><span>Classes = ${databas[a].tfseel.classez}</span></td>
<td><span>Subject = ${databas[a].tfseel.subject}</span></td>
</tr> `;
}

for (var b = 0; b < databas.length; b++) {
  dropdown1.innerHTML += `<option value="${databas[b].id}">${databas[b].id}</option>`;
}

dropdown1.addEventListener("change", function () {
  tabel.innerHTML = " ";
  for (var j = 0; j < databas.length; j++) {
    if (databas[j].id == dropdown1.value) {
      tabel.innerHTML += `  <tr>
      <td><span>${databas[j].id}</span></td>
      <td><span>branchiz = ${databas[j].tfseel.brachiz}</span></td>
      <td><span>Ticher = ${databas[j].tfseel.tichar}</span></td>
      <td><span>istudent = ${databas[j].tfseel.istudent}</span></td>
      <td><span>Classes = ${databas[j].tfseel.classez}</span></td>
      <td><span>Subject = ${databas[j].tfseel.subject}</span></td>
      </tr> `;
    }
  }
});
