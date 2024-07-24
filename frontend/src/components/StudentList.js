import React from 'react';
import axios from 'axios';

const StudentList = ({ students, getStudents, setSelectedStudent }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/api/students/${id}`);
    getStudents();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>
              {student.image && (
                <img
                  src={`http://localhost:5001/uploads/${student.image}`}
                  alt="Student"
                  style={{ width: '50px', height: '50px' }}
                />
              )}
            </td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => setSelectedStudent(student)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
