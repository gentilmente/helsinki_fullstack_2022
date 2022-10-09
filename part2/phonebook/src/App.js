import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personServices.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((p) => p.name === newName && p.number === newNumber)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    let editingPers = persons.find(
      (p) => p.name === newName && p.number !== newNumber
    );
    if (
      editingPers &&
      window.confirm(`${editingPers.name} Exists, edit number?`)
    ) {
      const updatedPerson = { ...editingPers, number: newNumber };
      personServices
        .update(updatedPerson)
        .then(() =>
          setPersons(
            persons.map((p) => (p.id === editingPers.id ? updatedPerson : p))
          )
        );
    } else {
      editingPers = { name: newName, number: newNumber };
      personServices.create(editingPers).then((created) => {
        setPersons(persons.concat(created));
      });
    }
    setNewName("");
    setNewNumber("");
  };

  const handlerDeleteBtn = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personServices.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
  };

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    //console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={persons} filter={filter} remove={handlerDeleteBtn} />
    </div>
  );
};

export default App;
