const studentForm = document.getElementById('studentForm');
const studentTable = document.querySelector('#studentTable tbody');

let students = [];

studentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const grade = document.getElementById('grade').value;

  const student = {
    name,
    roll,
    grade,
    attendance: 'Absent'
  };

  students.push(student);
  updateTable();
  studentForm.reset();
});

function updateTable() {
  studentTable.innerHTML = '';

  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.grade}</td>
      <td class="${student.attendance === 'Present' ? 'present' : 'absent'}">${student.attendance}</td>
      <td>
        <button onclick="markAttendance(${index}, 'Present')">Present</button>
        <button onclick="markAttendance(${index}, 'Absent')">Absent</button>
      </td>
    `;
    studentTable.appendChild(row);
  });
}

function markAttendance(index, status) {
  students[index].attendance = status;
  updateTable();
}
