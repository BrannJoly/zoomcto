import { Fragment, useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

interface ZoomCallCreationComponentProps {
    onEventCreated: (start: Date, end: Date, topic: string) => void
    initialStart: Date,
    initialEnd: Date,
    closeFunction: () => void;
}

var getDate = (date: Date, time: string) => {
    var d = new Date(date);
    var [h, m] = time.split(':')
    d.setHours(parseInt(h));
    d.setMinutes(parseInt(m));
    return d;
}

export default function ZoomCallCreationComponent({ onEventCreated, initialStart, initialEnd, closeFunction }: ZoomCallCreationComponentProps) {

    const [eventDate, seteventDate] = useState(initialStart);

    const [startTime, setstartTime] = useState(`${initialStart.getHours()}:${initialStart.getMinutes()}`);
    const [endTime, setendTime] = useState(`${initialEnd.getHours()}:${initialEnd.getMinutes()}`);
    const [topic, setTopic] = useState("Objet");

    return (<Fragment>
        <div className="content" >
            <DatePicker onChange={seteventDate} value={eventDate} />
        </div>
        <div className="content" >
            <TimePicker disableClock={true} onChange={(e: any) => setstartTime(e)} value={startTime} />
        </div>
        <div className="content" >
            <TimePicker disableClock={true} onChange={(e: any) => setendTime(e)} value={endTime} />
        </div>
        <div className="content" >
            <textarea value={topic} onChange={e => setTopic(e.target.value)} />
        </div>

        <button className="button" onClick={() => { console.log('modal closed '); closeFunction(); }}>
            Annuler
        </button>

        <button className="button"
            onClick={() => {
                onEventCreated(getDate(eventDate, startTime), getDate(eventDate, endTime), topic);
            }}
        >
            Valider
        </button>


    </Fragment>);
}