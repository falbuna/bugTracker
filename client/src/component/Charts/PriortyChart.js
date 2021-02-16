import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import {Bar} from 'react-chartjs-2';

function PriorityChart(){

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

  function filterPriority(){
      
      let none =0;
      let low = 0;
      let medium = 0;;
      let high = 0;

      for(let i=0; i < tickets.length; i++){
          switch(tickets[i].priority){
            case "None":
                none++;
                break;
            case "Low":
                low++;
                break;
            case "Medium":
                medium++;
                break;
            case "High":
                high++;
                break;
            default:
                break;
          }
      }
      return [none, low, medium, high]
  }

    const state = {
        labels: ['None', 'Low', 'Medium',
        'High'],
        datasets: [
            {
                backgroundColor: [
                    '#F387B2',
                    '#49976B',
                    '#E98601',
                    '#A90052'
                ],
                hoverBackgroundColor: [
                    '#965870',
                    '#316246',
                    '#A96100',
                    '#59002B'
                ],
                borderWidth: 2,
                data: filterPriority()
            }
        ]
    };


    return (
        <div className="chart">
            <Bar
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
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default PriorityChart;