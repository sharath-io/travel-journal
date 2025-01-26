export default function Entry(props) {
  return (
    <article className="entry">
      <div className="main-image-container">
       <img src={props.entry.img.src} alt={props.entry.img.alt} className="main-image" />
      </div>

      <div className="entry-details">
        <div className="entry-header">
          <img src="src/images/marker.png" alt="location" className="marker" />
          <h1 className="country-name">{props.entry.country}</h1>
          <a
            className="google-maps-link"
            href={props.entry.googleMapsLink}
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="location-name">{props.entry.title}</h1>

        <p className="date">{props.entry.dates}</p>
        <p className="location-details">{props.entry.text}</p>
      </div>
    </article>
  );
}
