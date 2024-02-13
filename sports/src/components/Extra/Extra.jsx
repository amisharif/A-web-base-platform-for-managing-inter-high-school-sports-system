import React, { useState } from 'react';

const Extra = () => {

    const [showSection, setShowSection] = useState('home'); // Manage section visibility
    const [schoolList, setSchoolList] = useState([]); // Maintain school list state

    const handleShowAllSchools = () => {
        // Simulate API call to fetch schools (replace with your actual API logic)
        const sampleSchools = [
            { id: 1, name: 'School 1' },
            { id: 2, name: 'School 2' },
            { id: 3, name: 'School 3' },
        ];
        setSchoolList(sampleSchools);
        setShowSection('schoolList');
    };

    const handleAddNewSchool = () => {
        setShowSection('addNewSchool');
    };

    const handleAddNewSchoolSubmit = (schoolData) => {
        // Add new school to list (replace with your actual logic)
        setSchoolList([...schoolList, schoolData]);
        setShowSection('schoolList'); // Redirect to school list after successful submission
    };

    const renderHomeSection = () => (
        <div className="home-section">
            <h1>School Management System</h1>
            <button onClick={handleShowAllSchools}>Show All Schools</button>
            <button onClick={handleAddNewSchool}>Add New School</button>
        </div>
    );

    const renderSchoolListSection = () => (
        <div className="school-list-section">
            <h2>School List</h2>
            <ul>
                {schoolList.map((school) => (
                    <li key={school.id}>{school.name}</li>
                ))}
            </ul>
        </div>
    );

    const renderAddNewSchoolSection = () => (
        <div className="add-new-school-section">
            <h2>Add New School</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                const schoolData = {
                    // Extract data from form fields
                };
                handleAddNewSchoolSubmit(schoolData);
            }}>
                <label>School Name:</label>
                <input type="text" required />
                {/* Add more form fields as needed */}
                <button type="submit">Add School</button>
            </form>
        </div>
    );

    return (
        <div className="app">
            {showSection === 'home' && renderHomeSection()}
            {showSection === 'schoolList' && renderSchoolListSection()}
            {showSection === 'addNewSchool' && renderAddNewSchoolSection()}
        </div>
    );
};

export default Extra;