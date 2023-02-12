import css from "components/Statistics/Stat.module.css";

export const Statistics = () => {
    return (
      <div className={css.statBox}>
        <p>Statistics</p>
        <ul>
            <li>Good: 0</li>
            <li>Neutral: 0</li>
            <li>Bad: 0</li>
        </ul>
      </div>
    );
  };