import React, { useState, useEffect } from "react";
import axios from "axios";

// Main Endpoint of the backend-api
const API_BASE = "https://jostspot-api-production.up.railway.app";

function App() {
  const [jots, setJots] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newJot, setNewJot] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    GetJots();
  }, []);

  // Get all jots
  const GetJots = () => {
    axios
      .get(`${API_BASE}/jots`)
      .then((response) => {
        setJots(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jots:", error);
      });
  };

  // Update a jot as completed
  const completeJot = async (id) => {
    try {
      const response = await axios.put(`${API_BASE}/jots/complete/${id}`);

      setJots((jots) =>
        jots.map((jot) => {
          if (jot._id === response.data._id) {
            jot.complete = response.data.complete;
          }
          return jot;
        })
      );
    } catch (error) {
      console.error("Error completing jot:", error);
    }
  };

  // Delete a jot using mongoDB id
  const deleteJot = async (id) => {
    try {
      await axios.delete(`${API_BASE}/jots/delete/${id}`);
      setJots(jots.filter((jot) => jot._id !== id));
    } catch (error) {
      console.error("Error deleting jot:", error);
    }
  };

  // Create a new jot
  const addJot = async () => {
    try {
      const response = await axios.post(`${API_BASE}/jots/new`, {
        text: newJot,
      });

      setJots([...jots, response.data]);
      setPopupActive(false);
      setNewJot("");
    } catch (error) {
      console.error("Error adding jot:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddJotClick = () => {
    if (!newJot.trim()) {
      openModal();
      return;
    }
    addJot();
    closeModal();
  };

  return (
    <div className="App">
      <h1>Welcome User!</h1>
      <h3>Your Jots</h3>
      <div className="jots">
        {/* Render the fetched all jots to the UI */}
        {jots.map((jot) => (
          <div
            className={"jot " + (jot.complete ? "is-complete" : "")}
            key={jot._id}
            onClick={() => completeJot(jot._id)}
          >
            <div className="checkbox"></div>
            <div className="text">{jot.text}</div>
            <div className="deleteJot" onClick={() => deleteJot(jot._id)}>
              x
            </div>
          </div>
        ))}
      </div>
      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div
            className="closePopup"
            onClick={() => {
              setPopupActive(false);
              closeModal();
            }}
          >
            x
          </div>
          <div className="content"></div>
          <h3 className="popupTitle">Start Jotting</h3>
          <textarea
            type="text"
            className="addJotInput"
            onChange={(e) => setNewJot(e.target.value)}
            value={newJot}
          />
          <div className="jotCreateButton" onClick={handleAddJotClick}>
            Create Jot
          </div>
          {isModalOpen && (
            <div id="warnModalId" className="warnModal">
              <div className="warnContent">
                <p>You haven't written any Jots.</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
