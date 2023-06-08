import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, index) => {
        const num = index + 1;
        return (
          <li key={num}>
            <input
              type="radio"
              id={`num${num}`}
              name="rating"
              value={num}
              onChange={handleChange}
              checked={selected === num}
            />
            <label htmlFor={`num${num}`}>{num}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
