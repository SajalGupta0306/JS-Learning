let sortDirection = false;
let personData = [
  {
    name: "Adam",
    age: 12,
  },
  {
    name: "Adaz",
    age: 15,
  },
  {
    name: "Adav",
    age: 13,
  },
  {
    name: "Adag",
    age: 17,
  },
  {
    name: "Aday",
    age: 18,
  },
];

const createTable = (data) => {
  let ans = "";
  const tableBody = document.getElementById("tbody");
  data.forEach((val) => {
    ans += `<tr><td>${val.name}</td><td>${val.age}</td></tr>`;
  });
  tableBody.innerHTML = ans;
};

const sortData = (columnToSort) => {
  const columnDataType = typeof personData[0][columnToSort];
  sortDirection = !sortDirection;

  switch (columnDataType) {
    case "number":
      sortByNumber(sortDirection, columnToSort);
      break;
  }
  createTable(personData);
};

const sortByNumber = (direction, columnName) => {
  personData = personData.sort((p1, p2) => {
    return direction
      ? p1[columnName] - p2[columnName]
      : p2[columnName] - p1[columnName];
  });
};

createTable(personData);
