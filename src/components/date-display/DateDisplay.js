import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './DateDisplay.css';

class DateDisplay extends Component {

  render() {
    return (
      <div className="date-display">
        <Icon name="chevron left" className="change-date prev-date" size="big" title="previous date" />
        <span className="displayed-date">Wednesday, December 11, 2019</span>
        <Icon name="chevron right" className="change-date next-date" size="big" title="next date" />
      </div>
    );
  }

}

export default DateDisplay;
