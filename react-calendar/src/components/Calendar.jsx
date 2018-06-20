import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedMonth: new Date()
    };

    //this function shows the current month, and displays the right and left arrows to change between months
    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">
                        chevron_right
                    </div>
                </div>
            </div>
        )
    };

    //this function shows the current day of the week
    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>

                </div>

            )
        }
    };

    renderCells() {

    };

    onDateClick = day => {

    };

    //right arrow goes to the next month (adds a month)
    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    //left arrow goes to the previous month (subtracts a month)
    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    };
}

export default Calendar;