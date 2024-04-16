import React from "react";

class EmbeddedCalendar extends React.Component {
  render() {
    return (
      <div>
        <iframe
            title="calendar"
          src="https://calendar.google.com/calendar/embed?src=c_4f32520b0f2e5c4d9759b4a4b5cd76bf499b95a56c0f6404ed87d96266bf3574%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          style={{ flex:1 }}
        ></iframe>
      </div>
    );
  }
}

export default EmbeddedCalendar;
