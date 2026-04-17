export default function RadioGroup({ name, options, onChange }) {
  return (
    <div>
      {options.map(opt => (
        <label key={opt}>
          <input type="radio" name={name} value={opt} onChange={onChange}/>
          {opt}
        </label>
      ))}
    </div>
  );
}
