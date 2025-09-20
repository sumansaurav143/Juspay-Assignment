import '../../App.css'; // Custom CSS file for styling

const locationData = [
  { name: "New York", revenue: 72000 },
  { name: "San Francisco", revenue: 39000 },
  { name: "Sydney", revenue: 25000 },
  { name: "Singapore", revenue: 61000 },
];

export default function RevenueByLocation() {
  const maxRevenue = Math.max(...locationData.map((location) => location.revenue));

  return (
    <div className="location-data">
      <h3>Revenue by Location</h3>
      
      {/* Map placeholder */}
      <div className="map-container">
        {/* This is a placeholder for the map; you can integrate a map library like react-leaflet here */}
        <div className="map-placeholder">[Map with Pins]</div>
      </div>

      {/* Location List with Progress Bars */}
      <ul>
        {locationData.map((location) => (
          <li key={location.name} className="location-item">
            <span className="location-name">{location.name}</span>
            <div className="progress-bar-background">
              <div
                className="progress-bar"
                style={{
                  width: `${(location.revenue / maxRevenue) * 100}%`,
                }}
              ></div>
            </div>
            <span className="location-revenue">{location.revenue}K</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
