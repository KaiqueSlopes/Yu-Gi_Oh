import { useState } from "react";
import "./Filters.css";

export function Filters({ onFilterChange }) {
  const [localFilters, setLocalFilters] = useState({
    attributes: [],
    types: [],
    races: [],
  });

  const attributes = [
    "Dark",
    "Divine",
    "Earth",
    "Fire",
    "Light",
    "Water",
    "Wind",
  ];

  const cardTypes = [
    "Normal Monster",
    "Effect Monster",
    "Ritual Monster",
    "Fusion Monster",
    "Synchro Monster",
    "Xyz Monster",
    "Pendulum Monster",
    "Link Monster",
    "Spell Card",
    "Trap Card",
    "Skill Card",
    "Token",
  ];

  const monsterTypes = [
    "Aqua",
    "Beast",
    "Beast-Warrior",
    "Creator-God",
    "Cyberse",
    "Dinosaur",
    "Divine-Beast",
    "Dragon",
    "Fairy",
    "Fiend",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Psychic",
    "Pyro",
    "Reptile",
    "Rock",
    "Sea Serpent",
    "Spellcaster",
    "Thunder",
    "Warrior",
    "Winged Beast",
    "Wyrm",
    "Zombie",
  ];

  const handleCheckboxChange = (filterType, value) => {
    setLocalFilters((prev) => {
      const currentFilters = prev[filterType];

      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [filterType]: currentFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentFilters, value],
        };
      }
    });
  };

  const handleSearch = () => {
    onFilterChange(localFilters);
  };

  const handleClear = () => {
    const clearedFilters = {
      attributes: [],
      types: [],
      races: [],
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="filters">
      <h2 className="filters-title">FILTROS</h2>

      <div className="filter-section">
        <h3>ATRIBUTO</h3>
        <div className="checkbox-scroll-group">
          {attributes.map((attr) => (
            <label key={attr} className="checkbox-label">
              <input
                type="checkbox"
                checked={localFilters.attributes.includes(attr)}
                onChange={() => handleCheckboxChange("attributes", attr)}
                className="checkbox-input"
              />
              <span className="checkbox-text">{attr}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>TIPO DE CARTA</h3>
        <div className="checkbox-scroll-group">
          {cardTypes.map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={localFilters.types.includes(type)}
                onChange={() => handleCheckboxChange("types", type)}
                className="checkbox-input"
              />
              <span className="checkbox-text">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>TIPO DE MONSTRO</h3>
        <div className="checkbox-scroll-group">
          {monsterTypes.map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={localFilters.races.includes(type)}
                onChange={() => handleCheckboxChange("races", type)}
                className="checkbox-input"
              />
              <span className="checkbox-text">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-buttons">
        <button className="filter-btn search-btn" onClick={handleSearch}>
          PESQUISAR
        </button>
        <button className="filter-btn clear-btn" onClick={handleClear}>
          LIMPAR FILTROS
        </button>
      </div>
    </div>
  );
}
