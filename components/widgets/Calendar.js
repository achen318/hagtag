import React from 'react';

import Widget from './widget';

import styles from './calendar.module.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calendarArray: this.getCalendarArray() };
  }

  getCalendarArray() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();

    // Get day of the week of the first day of the month (0-6)
    const firstDay = new Date(year, month, 1).getDay();

    // Get number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get number of rows in the calendar table
    const dayCellsUsed = firstDay + daysInMonth;
    const weeksInMonth = Math.ceil(dayCellsUsed / 7);

    const calendarArray = Array(weeksInMonth).fill();

    // Fill calendarArray with days of the month
    for (let i = 0; i < weeksInMonth; i++) {
      calendarArray[i] = Array(7).fill();
      for (let j = 0; j < 7; j++) {
        const day = i * 7 + j - firstDay + 1;
        if (day > 0 && day <= daysInMonth) {
          calendarArray[i][j] = day;
        }
      }
    }

    return calendarArray;
  }

  render() {
    return (
      <Widget>
        <h1>Calendar</h1>
        <table className={`table ${styles.calendar}`}>
          <thead>
            <tr className={styles.calendar}>
              <th scope="cotable $l">Sun</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
              <th scope="col">Wed</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
              <th scope="col">Sat</th>
            </tr>
          </thead>
          <tbody>
            {this.state.calendarArray.map((week, i) => {
              return (
                <tr className={styles.calendar} key={i}>
                  {week.map((day, j) => {
                    return <td key={j}>{day}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Widget>
    );
  }
}

export default Calendar;
