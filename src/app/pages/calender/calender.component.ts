import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

import {
  Calendar,
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventInput
} from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { ModalComponent } from '../../shared/component/ui/modal/modal.component';

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string;
  };
}

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [
    FormsModule,
    KeyValuePipe,
    ModalComponent
  ],
  templateUrl: './calender.component.html'
})
export class CalenderComponent implements AfterViewInit, OnDestroy {

  private calendar!: Calendar;

  events: CalendarEvent[] = [];
  selectedEvent: CalendarEvent | null = null;

  eventTitle = '';
  eventStartDate = '';
  eventEndDate = '';
  eventLevel = '';
  isOpen = false;

  calendarsEvents: Record<string, string> = {
    Danger: 'danger',
    Success: 'success',
    Primary: 'primary',
    Warning: 'warning'
  };

  ngAfterViewInit() {
    this.loadInitialEvents();

    const calendarEl = document.getElementById('calendar')!;
    this.calendar = new Calendar(calendarEl, this.getCalendarOptions());
    this.calendar.render();
  }

  ngOnDestroy() {
    this.calendar?.destroy();
  }

  private loadInitialEvents() {
    const today = new Date().toISOString().split('T')[0];

    this.events = [
      {
        id: '1',
        title: 'Event Conf.',
        start: today,
        extendedProps: { calendar: 'Danger' }
      },
      {
        id: '2',
        title: 'Meeting',
        start: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        extendedProps: { calendar: 'Success' }
      }
    ];
  }

  private getCalendarOptions(): CalendarOptions {
    return {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      selectable: true,
      events: this.events,

      headerToolbar: {
        left: 'prev,next addEventButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },

      select: (info) => this.handleDateSelect(info),
      eventClick: (info) => this.handleEventClick(info),

      customButtons: {
        addEventButton: {
          text: 'Add Event +',
          click: () => this.openModal()
        }
      },

      eventContent: (arg) => this.renderEventContent(arg)
    };
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.resetModalFields();
    this.eventStartDate = selectInfo.startStr;
    this.eventEndDate = selectInfo.endStr || selectInfo.startStr;
    this.openModal();
  }

  handleEventClick(clickInfo: EventClickArg) {
    const event = clickInfo.event;

    this.selectedEvent = {
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      extendedProps: { calendar: event.extendedProps['calendar'] }
    };

    this.eventTitle = event.title;
    this.eventStartDate = event.startStr;
    this.eventEndDate = event.endStr || '';
    this.eventLevel = event.extendedProps['calendar'];
    this.openModal();
  }

  handleAddOrUpdateEvent() {
    if (this.selectedEvent) {
      this.events = this.events.map(ev =>
        ev.id === this.selectedEvent!.id
          ? {
              ...ev,
              title: this.eventTitle,
              start: this.eventStartDate,
              end: this.eventEndDate,
              extendedProps: { calendar: this.eventLevel }
            }
          : ev
      );
    } else {
      this.events.push({
        id: Date.now().toString(),
        title: this.eventTitle,
        start: this.eventStartDate,
        end: this.eventEndDate,
        allDay: true,
        extendedProps: { calendar: this.eventLevel }
      });
    }

    this.calendar.removeAllEvents();
    this.calendar.addEventSource(this.events);

    this.closeModal();
  }

  renderEventContent(eventInfo: any) {
    const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar?.toLowerCase()}`;
    return {
      html: `
        <div class="fc-event-main ${colorClass} p-1 rounded-sm">
          <div class="fc-event-title">${eventInfo.event.title}</div>
        </div>
      `
    };
  }

  openModal() { this.isOpen = true; }

  closeModal() {
    this.isOpen = false;
    this.resetModalFields();
  }

  resetModalFields() {
    this.eventTitle = '';
    this.eventStartDate = '';
    this.eventEndDate = '';
    this.eventLevel = '';
    this.selectedEvent = null;
  }
}
