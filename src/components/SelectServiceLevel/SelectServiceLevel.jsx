import css from "components/SelectServiceLevel/SelectServiceLevel.module.css";

export const SelectServiceLevel = () => {
    return (
      <div className={css.selectBox}>
        <p>Please leave feedback</p>
        <div>
            <button type="button">Good</button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
        </div>
      </div>
    );
  };