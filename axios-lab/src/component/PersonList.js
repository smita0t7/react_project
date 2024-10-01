import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PersonList.css';

const API_URL = 'https://3001-smita0t7-reactproject-4epurg3xfpn.ws-us116.gitpod.io/persons';

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', age: '' });
  const [editingPerson, setEditingPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPersons();
  }, []);

  // READ operation
  const fetchPersons = async () => {
    try {
      const response = await axios.get(API_URL);
      setPersons(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching persons:', error);
      alert('Failed to fetch persons. Please try again.');
      setLoading(false);
    }
  };

  // CREATE operation
  const addPerson = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newPerson);
      setPersons([...persons, response.data]);
      setNewPerson({ name: '', age: '' });
      alert(`New person added: ${response.data.name}`);
    } catch (error) {
      console.error('Error adding person:', error);
      alert('Failed to add person. Please try again.');
    }
  };

  // UPDATE operation
  const updatePerson = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/${editingPerson.id}`, editingPerson);
      setPersons(persons.map(person => person.id === editingPerson.id ? response.data : person));
      setEditingPerson(null);
      alert(`Person updated: ${response.data.name}`);
    } catch (error) {
      console.error('Error updating person:', error);
      alert('Failed to update person. Please try again.');
    }
  };

  // DELETE operation
  const deletePerson = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPersons(persons.filter(person => person.id !== id));
      alert(`Person with ID ${id} has been removed.`);
    } catch (error) {
      console.error('Error deleting person:', error);
      alert('Failed to delete person. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="person-list">
      <h2>Person List</h2>
      
      {/* Add Person Form */}
      <form onSubmit={addPerson} className="add-person-form">
        <input
          type="text"
          value={newPerson.name}
          onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={newPerson.age}
          onChange={(e) => setNewPerson({...newPerson, age: e.target.value})}
          placeholder="Age"
          required
        />
        <button type="submit" className="btn btn-add">Add Person</button>
      </form>

      {/* Person List */}
      <ul className="person-items">
        {persons.map(person => (
          <li key={person.id} className="person-item">
            {editingPerson && editingPerson.id === person.id ? (
              <form onSubmit={updatePerson} className="edit-person-form">
                <input
                  type="text"
                  value={editingPerson.name}
                  onChange={(e) => setEditingPerson({...editingPerson, name: e.target.value})}
                  required
                />
                <input
                  type="number"
                  value={editingPerson.age}
                  onChange={(e) => setEditingPerson({...editingPerson, age: e.target.value})}
                  required
                />
                <button type="submit" className="btn btn-update">Update</button>
                <button type="button" className="btn btn-cancel" onClick={() => setEditingPerson(null)}>Cancel</button>
              </form>
            ) : (
              <>
                <span className="person-info">{person.name} (Age: {person.age})</span>
                <div className="person-actions">
                  <button className="btn btn-edit" onClick={() => setEditingPerson(person)}>Edit</button>
                  <button className="btn btn-delete" onClick={() => deletePerson(person.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default PersonList;