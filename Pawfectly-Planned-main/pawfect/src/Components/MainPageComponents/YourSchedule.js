import React, {useState, useEffect} from 'react'

//import Calendar from 'react-calendar'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useCalendarContext } from '../Context/CalendarEvents';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import DateTimePicker from 'react-datetime-picker'
import { useCookies } from 'react-cookie';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
function YourSchedule({View}) {
  const [cookies] = useCookies(['AuthTokem']);

  // Now 'cookies' contains your UserData cookie
  const userData = cookies['AuthTokem'];

  const {Events, UpdateEvents}  = useCalendarContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setisEvent] = useState(false);
  const [EventTitle, setEventTitle] = useState("");
  const [EventDesc, setEventDesc] = useState("");
  const handleDateClick = (arg) => {
    console.log('Clicked on: ' + arg.dateStr);
    setStart(arg.dateStr)
    setEnd(arg.dateStr)
    setIsOpen(true)
  }
  const closePopUp = () =>{
    setIsOpen(false)
    setisEvent(false)
  }
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const handleEventClick = (info) => {
   // alert('Event clicked:',info.event._def.title);
   setEventTitle(info.event._def.title)
  // setEventDesc()
   setisEvent(true)
  
  };
  useEffect(() => {
    console.log("Events updated:", Events);
  }, [Events]);
  console.log(userData)
  const [EventName, setEventName] = useState("")
  const [EventDescription, setEventDescription] = useState("")
  async function createCalendarEvent() {
    const event = {
        'summary': EventName,
        'description': EventDescription,
        'start': {
            'dateTime': start.toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        },
        'end': {
            'dateTime': end.toISOString(),
            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        },
    }
    try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + userData, // Ensure correct token access
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });

        if (!response.ok) {
            throw new Error('Failed to create calendar event');
           
        }

        const data = await response.json();
        console.log(data);
        UpdateEvents(prevEvents => [...prevEvents, data]); // Add the new event to the events array
        closePopUp();
    } catch (error) {
        console.error('Error creating calendar event:', error);
    }
}


  return (
    <div style={{flex:1}}>
   
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView={`${View}`}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={Events.length > 0 ? Events.map(event => ({
          
          title: event.summary,
          
          start: event.start.dateTime || event.start.date // Adjust based on event structure
        })) : []}
      />
    
       {isOpen && (
                <div className="popup">
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', width:'35%', height:'40%', boxShadow:' 0px 0px 10px 0px rgba(0,0,0,0.5)'}} >
                    <button style={{position:'absolute', top:'30%', right:'33%'}} onClick={() => closePopUp()}>X</button>
                    <p>Start of new event</p>
                    <DateTimePicker onChange={(date) => setStart(date)} value={start}/>
                    <br></br>
                    <p>End event</p>
                    <DateTimePicker onChange={(date) => setEnd(date)} value={end}/>
                      <br></br>
                        <input onChange={(e) => setEventName(e.target.value)} />
                        <p>Event description</p>
                        <input onChange={(e) => setEventDescription(e.target.value)} />
                        <br>
                        </br>
                        <button onClick={() => createCalendarEvent()}>Create Calendar Event</button>
                    </div>
                </div>
            )}
                {isEvent && (
                <div className="popup">
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', width:'35%', height:'40%', boxShadow:' 0px 0px 10px 0px rgba(0,0,0,0.5)'}} >
                    <button style={{position:'absolute', top:'30%', right:'33%'}} onClick={() => closePopUp()}>X</button>
                    <p>Event Title</p>
                      {EventTitle}
                    <br></br>
                    <p>Google isnt sending event description for some reason </p>

                    </div>
                </div>
            )}
    </div>
  );
};


export default YourSchedule