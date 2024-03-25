import { useState } from 'react';
import './App.css';
import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from './work.svg';
import SchoolIcon from './school.svg';

function App() {
  const [count, setCount] = useState(0);
  let workIconStyles = { background: 'rgb(33, 150, 243)', color: '#fff' };
  let schoolIconStyles = { background: 'rgb(233, 30, 99)', color: '#fff' };

  return (
    <>
      <div>
        <h1>TIMELINE</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === 'work';
            let showbtn = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== '';

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName='date'
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                {/* Other content of VerticalTimelineElement */}
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                <p id='description'>{element.description}</p>
                {showbtn && (
                        <a 
                            href='/' className={`button ${isWorkIcon ? "Workbtn":"Schoolbutton"}`}>{element.buttonText}</a>)}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default App;
