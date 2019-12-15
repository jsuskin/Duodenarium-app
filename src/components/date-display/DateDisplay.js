import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './DateDisplay.css';

class DateDisplay extends Component {

  render() {
    const { weekday, month, day, year } = this.props.selectedDate;

    return (
      <div className="date-display">
        <Icon
          name="chevron left"
          className="change-date prev-date"
          size="big"
          title="previous date"
          onClick={() => this.props.handleChangeDate(1)}
        />
        <span className="displayed-date">
          {weekday}, {month} {day}, {year}
        </span>
        <Icon
          name="chevron right"
          className={
            `next-date${
              this.props.selectedDateFormatted === this.props.today ?
                ' disabled' : ' change-date'
            }`
          }
          size="big"
          title="next date"
          onClick={() => {
            return this.props.selectedDateFormatted === this.props.today ?
              null : this.props.handleChangeDate(-1)
            }
          }
        />
      </div>
    );
  }

}

export default DateDisplay;
