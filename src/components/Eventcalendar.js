import React, { Component } from 'react';
import { Calendar, momentLocalizer,} from 'react-big-calendar';
import moment from 'moment';



const localizer = momentLocalizer(moment)

class Eventcalendar extends Component {
   
    render(){
        return(
            <div className='eventCalendar'>
                <Calendar
                    localizer={localizer}
                    events={this.props.eventsList}
                    startAccessor="start"
                    endAccessor="end"
                    components = {{toolbar: CustomToolbar}}
                />
            </div>
        )
    }
}

class CustomToolbar extends Component{
    render() {
      return (
        <div className='rbc-toolbar'>
          <span className="rbc-btn-group">
            <button type="button" onClick={() => this.navigate('PREV')}>back</button>
            <button type="button" onClick={() => this.navigate('NEXT')}>next</button>
          </span>
          <span className="rbc-toolbar-label">{this.props.label}</span>
          <span className="rbc-btn-group">
            <button type="button" onClick={() => this.navigate('TODAY')} >today</button>
          </span>
            
        </div>
      );
    }
}

export default Eventcalendar;