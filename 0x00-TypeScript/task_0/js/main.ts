interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const firstStudent: Student = {
    firstName: "Sofien",
    lastName: "Hafdhi",
    age: 26,
    location: "Gabes",
  };
  
  const secondStudent: Student = {
    firstName: "Fofa",
    lastName: "Daddy",
    age: 229,
    location: "My heart",
  };
  
  const studentsList: Array<Student> = [firstStudent, secondStudent];
  
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cellName: HTMLTableCellElement = rowHead.insertCell(0);
  const cellLocation: HTMLTableCellElement = rowHead.insertCell(1);
  
  cellName.innerHTML = "firstName";
  cellLocation.innerHTML = "location";
  
  table.append(thead);
  
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
  
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
  });
  
  table.append(tbody);
  body.append(table);
