import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './DateDisplay.css';

class DateDisplay extends Component {

  render() {
    const { weekday, month, day, year } = this.props.selectedDate;
    return (
      <div className="date-display">
        <Icon name="chevron left" className="change-date prev-date" size="big" title="previous date" />
        <span className="displayed-date">{weekday}, {month} {day}, {year}</span>
        <Icon name="chevron right" className={`next-date${`${weekday}, ${month} ${day}, ${year}` === this.props.today ? ' disabled' : ' change-date'}`} size="big" title="next date" />
      </div>
    );
  }

}

export default DateDisplay;
