import { useState, useEffect } from "react";
import { FaSave, FaTrash } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"; // Success and error icons
import "./Form.css";

export const Form=()=> {
  const [rows, setRows] = useState([
    { id: Date.now(), item: "", description: "", isSaved: false },
  ]);
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dynamicFields"));
    if (storedData) {
      setRows(storedData);
    }
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), item: "", description: "", isSaved: false }]);
  };

  const handleInputChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleSave = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          if (row.item && row.description) {
            const updatedRow = { ...row, isSaved: true };
            const updatedRows = prevRows.map((r) =>
              r.id === id ? updatedRow : r
            );
            localStorage.setItem("dynamicFields", JSON.stringify(updatedRows));
            showNotification("Field saved successfully", "success");
            return updatedRow;
          } else {
            showNotification("Please fill in all fields before saving", "error");
          }
        }
        return row;
      })
    );
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    localStorage.setItem("dynamicFields", JSON.stringify(updatedRows));
    showNotification("Field deleted successfully", "success");
  };

  const handleSubmit = () => {
    if (rows.every((row) => row.isSaved)) {
      showNotification("Fields submitted successfully", "success");
    } else {
      showNotification("Please save all rows before submitting", "error");
    }
  };

  return (
    <div className="container">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.type === "success" ? (
            <AiOutlineCheckCircle />
          ) : (
            <AiOutlineCloseCircle />
          )}
          <span>{notification.message}</span>
        </div>
      )}
      <div className="header">
        <h1>Add Dynamic Input Field</h1>
        <div className="add-row-btn" onClick={handleAddRow}>+</div>
      </div>
      <div className="rows-container">
        {rows.map((row) => (
          <div className="row" key={row.id}>
            <input
              type="text"
              placeholder="Item"
              value={row.item}
              onChange={(e) => handleInputChange(row.id, "item", e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={row.description}
              onChange={(e) =>
                handleInputChange(row.id, "description", e.target.value)
              }
            />
            <button
              className="save-btn"
              onClick={() => handleSave(row.id)}
              disabled={row.isSaved}
            >
              <FaSave />
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(row.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}


