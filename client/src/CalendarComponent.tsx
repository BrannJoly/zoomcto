import { useCallback } from "react";
import PropTypes from "prop-types";
import { Calendar, Views, DateLocalizer, SlotInfo } from "react-big-calendar";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DragAndDropCalendar = withDragAndDrop(Calendar);

export default function DnDOutsideResource({ localizer }: { localizer: any }) {
    const newEvent = useCallback((event: SlotInfo) => {

        console.log(event.start);
        console.log(event.end);

    }, []);

    return (

        <div className="height600">
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