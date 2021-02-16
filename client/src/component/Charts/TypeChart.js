import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import {Pie} from 'react-chartjs-2';

function TypeChart(){

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        loadTickets()
    }, []);

    function loadTickets(){
        API.getTickets()
            .then(res => {
                setTickets(res.data)
            })
            .catch(err => console.log(err));
    }

  function filterType(){

      let bugs = 0;
      let comments = 0;
      let feature = 0;
      let other = 0;

      for(let i = 0; i < tickets.length; i++){
          switch(tickets[i].type){
            case "Bug/Error":
                bugs++;
                break;
            case "Comments":
                comments++;
                break;
            case "Feature Requests":
                feature++;
                break;
            case "Other":
                other++;
                break;
            default:
                break;
          }
      }
      return [bugs, comments, feature, other]
  }


    const state = {
        labels: ['Bugs/Error', 'Comments', 'Feature Requests',
        'Other'],
        datasets: [
            {
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    // '#F387B2',
                    // '#49976B',
                    // '#FFFFFF',
                    // '#E98601',
                    // '#A90052'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    // '#965870',
                    // '#316246',
                    // '#ACACAC',
                    // '#A96100',
                    // '#59002B'
                ],
                borderWidth: 2,
                data: filterType()
            }
        ]
    };


    return (
        <div className="chart">
            <Pie
                data={state}
                options={{
                    title: {
                        display: false,
                        text:'Status of Each Ticket',
                        fontSize: 20
                    },
                    legend: {
                        display: false,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    )
}

export default TypeChart;