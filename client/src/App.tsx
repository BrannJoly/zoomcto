import { useState } from 'react'

import './App.css';
import './modal.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

import CalendarComponent from './CalendarComponent';
import Popup from 'reactjs-popup';
import ZoomCallCreationComponent from './ZoomCallCreationComponent';




function App() {
  const [open, setOpen] = useState(false);
  const [startDate, setstartDate] = useState<Date>(new Date());
  const [endDate, setendDate] = useState<Date>(new Date());
  const closeModal = () => setOpen(false);
  return (
    <div className="App">
      <CalendarComponent onEventCreated={(start: Date, end: Date) => {

        setstartDate(start);
        setendDate(end);
        setOpen(true);
      }}
      />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <ZoomCallCreationComponent initialStart={startDate} initialEnd={endDate} closeFunction={closeModal}
            onEventCreated={(start: Date, end: Date, topic: string) => {
              console.log(start);
              console.log(end);
              console.log(topic);
              setOpen(false);
            }} />
        </div>
      </Popup>
    </div>
  );
}

export default App;