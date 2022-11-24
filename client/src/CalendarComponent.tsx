import { useCallback } from "react";
import PropTypes from "prop-types";
import { Calendar, Views, DateLocalizer, SlotInfo } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

interface CalendarProps {
    onEventCreated: (start: Date, end: Date) => void
}

export default function DnDOutsideResource({ onEventCreated }: CalendarProps) {
    const newEvent = useCallback((event: SlotInfo) => {
        onEventCreated(event.start, event.end);

    }, [onEventCreated]);

    return (
        <div className="height600" data-testid="calendar" >
            <DragAndDropCalendar
                defaultView={Views.WEEK}
                localizer={localizer}
                onSelectSlot={newEvent}
                resizable
                selectable
            />
        </div>
    );
}
DnDOutsideResource.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
};