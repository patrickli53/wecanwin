import React, { Component } from 'react';
import { Calendar, momentLocalizer,} from 'react-big-calendar';
import moment from 'moment';
import Toolbar from 'react-big-calendar/lib/Toolbar';



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

class CustomToolbar extends Toolbar{
 
  componentDidMount() {
		const view = this.props.view;
		console.log(view)
	}
    render() {
      return (
        <div className='rbc-toolbar'>
          <div className="rbc-btn-group">
            <button type="button" onClick={() => this.navigate('PREV')}>back</button>
            <button type="button" onClick={() => this.navigate('NEXT')}>next</button>
				  </div>
				  <div className="rbc-toolbar-label">{this.props.label}</div>
				
          <div className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate('TODAY')}>today</button>
          </div>
        </div>
       
      );
    }
}

export default Eventcalendar;