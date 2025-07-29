import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adoption.css";

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: "any", 
    location: "94110",
    gender: "",
    age: "",
    budget: 0,  
  });

  const [accessToken, setAccessToken] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const CLIENT_ID = "gePcPhVPxBQQhV6wSQLOIyGZfuLmr8XUCKhyKq92g1ETI1IgeZ";
  const CLIENT_SECRET = "kzUwTzULQWS3YiuPEqUfilgsXYPNpJBwogclLXAO";

  const fetchAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          grant_type: "client_credentials",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }
      );
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  const fetchPets = async () => {
    try {
      const response = await axios.get(
        "https://api.petfinder.com/v2/animals",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            type: filters.type !== "any" ? filters.type : undefined,
            location: filters.location,
            gender: filters.gender || undefined,
            age: filters.age || undefined,
          },
        }
      );
      setPets(response.data.animals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    if (!accessToken) {
      fetchAccessToken();
    } else {
      fetchPets();
    }
  }, [accessToken, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPet(null);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setShowSuccess(true);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  const handleResetFilters = () => {
    setFilters({
      type: "any",  
      location: "94110",
      gender: "",
      age: "",
      budget: 0,  
    });
  };

  if (loading) {
    return <div className="loading">Loading pets...</div>;
  }

  return (
    <div className="adoption-container">
      {/* Filter Sidebar */}
      <div className="filters-sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="any">Any</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="hamster">Hamster</option>
            <option value="bird">Bird</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="location">Location (ZIP)</label>
          <input
            type="text"
            name="location"
            id="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Enter ZIP code"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={filters.gender}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="age">Age</label>
          <select
            name="age"
            id="age"
            value={filters.age}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        {/* Budget Filter */}
        <div className="filter-group">
          <label htmlFor="budget">Budget (0 to 50,000)</label>
          <input
            type="range"
            name="budget"
            id="budget"
            min="0"
            max="50000"
            value={filters.budget}
            onChange={handleFilterChange}
          />
          <span>{filters.budget}</span>
        </div>
        {/* Reset Filters Button */}
        <button className="reset-filters-button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="adoption-page">
        <h1 className="page-title">Pets For Adoption</h1>
        <h2 className="page-subtitle">Planning to Adopt a Pet? You have come to the right place! </h2>
        <div className="pet-grid">
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img
                src={
                  pet.photos[0]?.medium ||
                  "https://via.placeholder.com/200x200?text=No+Image"
                }
                alt={pet.name}
                className="pet-image"
              />
              <div className="pet-info">
                <h3 className="pet-name">{pet.name}</h3>
                <p className="pet-details">Breed: {pet.breeds.primary}</p>
                <p className="pet-details">Gender: {pet.gender}</p>
                <p className="pet-details">Age: {pet.age}</p>
                {/* Display Budget if available */}
                {pet.budget &&<p className="pet-details">Budget: ${pet.budget}</p>}
                <button
                  className="contact-button"
                  onClick={() => handleAdoptClick(pet)}
                >
                  Adopt {pet.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-Up for Booking Details */}
      {showPopup && selectedPet && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Adopt {selectedPet.name}</h2>
            <div className="popup-details">
              <img
                src={
                  selectedPet.photos[0]?.medium ||
                  "https://via.placeholder.com/200x200?text=No+Image"
                }
                alt={selectedPet.name}
                className="popup-image"
              />
              <div>
                <p>
                  <strong>Breed:</strong> {selectedPet.breeds.primary}
                </p>
                <p>
                  <strong>Gender:</strong> {selectedPet.gender}
                </p>
                <p>
                  <strong>Age:</strong> {selectedPet.age}
                </p>
                {/* Display Budget if available */}
                {selectedPet.budget && (
                  <p>
                    <strong>Budget:</strong> ${selectedPet.budget}
                  </p>
                )}
              </div>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="address">Your Address</label>
                <input type="text" id="address" name="address" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input type="tel" id="contact" name="contact" required />
              </div>
              <button type="submit" className="book-button">
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          <button className="close-button" onClick={closeSuccessMessage}>
            &times;
          </button>
          <p>Congratulations on your new pet friend! We will connect with you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Adoption;

