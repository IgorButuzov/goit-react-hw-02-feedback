import css from "components/Statistics/Stat.module.css";

const Statistics = ({isGood, isNeutral, isBad, isTotal,isPositive}) => {
    return (
      isTotal === 0 ? 
      <p>No feedback given</p> :
      <div className={css.statBox}>
        <p>Statistics</p>
        <ul>
            <li>Good: {isGood}</li>
            <li>Neutral: {isNeutral}</li>
            <li>Bad: {isBad}</li>
            <li>Total: {isTotal}</li>
        </ul>
        <p>Positive feedback: {isPositive}%</p>
      </div>
    );
  };

export default Statistics