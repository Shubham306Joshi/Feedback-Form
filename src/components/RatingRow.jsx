export default function RatingRow({ label }) {
  return (
    <div>
      <span>{label}</span>
      {[1,2,3,4,5].map(n => <button key={n}>{n}</button>)}
    </div>
  );
}
