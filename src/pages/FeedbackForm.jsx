import { useState } from "react";
import "../styles/styles.css";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    experience: "",
    expectations: "",
    diversity: "",
    ratings: {
      tourism: "",
      culture: "",
      development: "",
      people: "",
      tech: ""
    },
    impactful: "",
    improve: "",
    location: ""
  });

  const handleRadio = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (field, value) => {
    setForm({
      ...form,
      ratings: { ...form.ratings, [field]: value }
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const RatingRow = ({ label, field }) => (
    <tr>
      <td>{label}</td>
      {[1, 2, 3, 4, 5].map((num) => (
        <td key={num}>
          <input
            type="radio"
            name={field}
            checked={form.ratings[field] === num}
            onChange={() => handleRating(field, num)}
          />
        </td>
      ))}
    </tr>
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <h4>Yuva Sangam Programme</h4>

        {/* Q1 */}
        <div className="section">
          <p>1. How would you rate your overall experience?</p>
          {["Excellent", "Very Good", "Good", "Fair"].map((opt) => (
            <label key={opt}>
              <input type="radio" name="experience" value={opt} onChange={handleRadio} />
              {opt}
            </label>
          ))}
        </div>

        {/* Q2 */}
        <div className="section">
          <p>2. Did the programme meet your expectations?</p>
          {["Fully", "Partially", "Not at all"].map((opt) => (
            <label key={opt}>
              <input type="radio" name="expectations" value={opt} onChange={handleRadio} />
              {opt}
            </label>
          ))}
        </div>

        {/* Q3 */}
        <div className="section">
          <p>3. To what extent did Yuva Sangam help you understand India’s diversity and unity?</p>
          {["Very High", "High", "Moderate", "Low"].map((opt) => (
            <label key={opt}>
              <input type="radio" name="diversity" value={opt} onChange={handleRadio} />
              {opt}
            </label>
          ))}
        </div>

        {/* Q4 Table */}
        <div className="section">
          <p>4. Please rate the following aspects (1 = Very Poor, 5 = Excellent)</p>

          <table className="rating-table">
            <thead>
              <tr>
                <th>Aspect</th>
                {[1, 2, 3, 4, 5].map((n) => (
                  <th key={n}>{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <RatingRow label="Tourism" field="tourism" />
              <RatingRow label="Culture & Traditions" field="culture" />
              <RatingRow label="Development & Governance" field="development" />
              <RatingRow label="People-to-People Connect" field="people" />
              <RatingRow label="Technology & Innovation" field="tech" />
            </tbody>
          </table>
        </div>

        {/* Q5 */}
        <div className="section">
          <p>5. What was the most impactful part?</p>
          <textarea name="impactful" onChange={handleChange} />
        </div>

        {/* Q6 */}
        <div className="section">
          <p>6. How could the programme be improved?</p>
          <textarea name="improve" onChange={handleChange} />
        </div>

        {/* Q7 */}
        <div className="section">
          <p>7. Allow location access allowance?</p>
          {["Yes", "No"].map((opt) => (
            <label key={opt}>
              <input type="radio" name="location" value={opt} onChange={handleRadio} />
              {opt}
            </label>
          ))}
        </div>

        <button className="submit">Submit</button>
      </form>
    </div>
  );
}