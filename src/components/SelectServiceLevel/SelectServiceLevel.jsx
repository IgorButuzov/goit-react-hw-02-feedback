import css from "components/SelectServiceLevel/SelectServiceLevel.module.css";
import Statistics from "components/Statistics/Stat";

import React from 'react';

class SelectServiceLevel extends React.Component {
static defaultProps = {
  startValue: 0,
}

static propTypes = {

}

state = {
  good: this.props.startValue,
  neutral: this.props.startValue,
  bad: this.props.startValue,
}

onGoodClick = () => {
  this.setState(prevValue => {
    return {
      good: prevValue.good + 1,
    };
  })
};
onNeutralClick = () => {
  this.setState(prevValue => {
    return {
      neutral: prevValue.neutral + 1,
    };
  })
};
onBadClick = () => {
  this.setState(prevValue => {
    return {
      bad: prevValue.bad + 1,
    };
  })
};
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};
countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state;
  return Math.round((good * 100) / (good + neutral + bad));
};

 render () {
  return (
    <div className={css.selectBox}>
      <p>Please leave feedback</p>
      <div className={css.buttons}>
          <button 
          type="button"
          onClick={this.onGoodClick}
          >Good</button>
          <button 
          type="button"
          onClick={this.onNeutralClick}
          >Neutral</button>
          <button 
          type="button"
          onClick={this.onBadClick}
          >Bad</button>
      </div>
      <Statistics 
      isGood={this.state.good}
      isNeutral={this.state.neutral}
      isBad={this.state.bad}
      isTotal={this.countTotalFeedback()}
      isPositive={this.countPositiveFeedbackPercentage()}
      />
    </div>
    
  ); 
 }
}

export default SelectServiceLevel