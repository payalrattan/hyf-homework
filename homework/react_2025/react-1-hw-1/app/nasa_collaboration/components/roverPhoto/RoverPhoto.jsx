export function RoverPhoto({ src, date, roverName, launch_date, landing_date, status }) {
  return (
    <section className="card">
      <img src={src} alt={roverName} />
      <div>
        <p><b>Rover:</b> {roverName}</p>
        <p><b>Date:</b> {date}</p>
        <p><b>Launch:</b> {launch_date}</p>
        <p><b>Landing:</b> {landing_date}</p>
        <p><b>Status:</b> {status}</p>
      </div>
    </section>
  );
}