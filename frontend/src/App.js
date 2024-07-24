import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const getStudents = async () => {
    const res = await axios.get('http://localhost:5001/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Student Management</h1>
      <StudentForm getStudents={getStudents} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} />
      <StudentList students={students} getStudents={getStudents} setSelectedStudent={setSelectedStudent} />
    </div>
  );
};

export default App;
