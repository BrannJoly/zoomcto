import { Fragment, useState } from "react";


interface ZoomCallCreationComponentProps {
    onEventCreated: (start: Date, end: Date, topic: string) => void
    initialStart: Date,
    initialEnd: Date,
    closeFunction: () => void;
}


export default function ZoomCallCreationComponent({ onEventCreated, initialStart, initialEnd, closeFunction }: ZoomCallCreationComponentProps) {

    const [startDate, setstartDate] = useState(initialStart);
    const [endDate, setendDate] = useState(initialEnd);
    const [topic, setTopic] = useState("Objet");

    return (<Fragment>

        <form >
            <label>
                Objet:
                <textarea value={topic} onChange={e => setTopic(e.target.value)} />
            </label>

        </form>


        <button className="button" onClick={() => { console.log('modal closed '); closeFunction(); }}>
            Annuler
        </button>

        <button className="button"
            onClick={() => {
                onEventCreated(startDate, endDate, topic);
            }}
        >
            Valider
        </button>


    </Fragment>);
}