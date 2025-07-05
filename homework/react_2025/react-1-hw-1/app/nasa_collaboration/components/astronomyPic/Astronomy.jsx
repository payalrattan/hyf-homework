export function Astronomy({ dailyImg }) {
  return (
    <section className="card">
      <h2>Astronomy Picture of the day</h2>
      {dailyImg.url ? (
        <div>
          <h3>{dailyImg.title}</h3>
          <img src={dailyImg.url} alt={dailyImg.title} />
          <p>{dailyImg.explanation}</p>
        </div>
      ) : (
        <p>Loading Astronomy Picture of the Day...</p>
      )}
    </section>
  );
}
