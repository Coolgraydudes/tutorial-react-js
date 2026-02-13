// Ore.jsx

export default function Ore({ ore }) {
  return (
    <div className="ore-card">
      <img 
        className="ore-image" 
        src={ore.image} 
        alt={ore.name} 
      />

      <h3 className="ore-name">{ore.name}</h3>

      <p className="ore-info">
        Height: <strong>{ore.y_level}</strong>
      </p>
    </div>
  );
}