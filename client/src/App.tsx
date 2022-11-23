import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CalendarComponent from './CalendarComponent';

const localizer = momentLocalizer(moment);

export default function App() {
  return (
    <div className="App">
      <CalendarComponent localizer={localizer}
      />
    </div>
  );
}