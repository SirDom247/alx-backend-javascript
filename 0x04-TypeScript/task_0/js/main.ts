// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Ima-obong",
  lastName: "Akpan",
  age: 19,
  location: "Uyo"
};

const student2: Student = {
  firstName: "Inemesit",
  lastName: "Okon",
  age: 18,
  location: "Ikot Ekpene",
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement("table");

  // Create table header
  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell();
  headerCell1.textContent = "First Name";
  const headerCell2 = headerRow.insertCell();
  headerCell2.textContent = "Location";

  // Create table rows for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  // Append the table to the document
  document.body.appendChild(table);
}

// Call the renderTable function
renderTable();

