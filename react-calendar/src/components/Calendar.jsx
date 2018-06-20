import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedMonth: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
            </div>
        )
    }

    renderDays() { }

    renderCells() { }

    onDateClick = day => { };

    nextMonth = () => { };

    prevMonth = () => { };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;