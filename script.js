// Sample data for initial rendering (you can replace this with your backend data)
let students = [];

// Function to render the student list
function renderStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.fullName}</td>
            <td>${student.studentId}</td>
            <td>${student.course}</td>
            <td>${student.yearLevel}</td>
            <td>
                <button class="btn" onclick="editStudent(${student.id})">Edit</button>
                <button class="btn btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

// Function to save or update a student
function saveStudent() {
    const studentId = document.getElementById('studentId').value;
    const fullName = document.getElementById('fullName').value;
    const studentIdInput = document.getElementById('studentIdInput').value;
    const course = document.getElementById('course').value;
    const yearLevel = document.getElementById('yearLevel').value;

    if (studentId) {
        // Update existing student
        const existingStudent = students.find(student => student.id === parseInt(studentId));
        if (existingStudent) {
            existingStudent.fullName = fullName;
            existingStudent.studentId = studentIdInput;
            existingStudent.course = course;
            existingStudent.yearLevel = parseInt(yearLevel);
        }
    } else {
        // Create a new student
        const id = students.length + 1;
        const newStudent = {
            id,
            fullName,
            studentId: studentIdInput,
            course,
            yearLevel: parseInt(yearLevel)
        };
        students.push(newStudent);
    }

    // Clear the form fields
    document.getElementById('studentId').value = '';
    document.getElementById('fullName').value = '';
    document.getElementById('studentIdInput').value = '';
    document.getElementById('course').value = '';
    document.getElementById('yearLevel').value = '';

    // Render the updated list
    renderStudentList();
}

// Function to edit a student
function editStudent(id) {
    const student = students.find(student => student.id === id);
    if (student) {
        document.getElementById('studentId').value = student.id;
        document.getElementById('fullName').value = student.fullName;
        document.getElementById('studentIdInput').value = student.studentId;
        document.getElementById('course').value = student.course;
        document.getElementById('yearLevel').value = student.yearLevel;
    }
}

// Function to delete a student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    renderStudentList();
}

// Initial rendering
renderStudentList();
