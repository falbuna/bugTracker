import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import {Bar} from 'react-chartjs-2';

function StatusChart(){

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

  function filterStatus(){
      
      let closed = 0;
      let open = 0;
      let inprogress = 0;
      let resolved = 0;

      for(let i=0; i < tickets.length; i++){
          switch(tickets[i].status){
            case "Closed":
                closed++;
                break;
            case "Open":
                open++;
                break;
            case "In Progress":
                inprogress++;
                break;
            case "Resolved":
                resolved++;
                break;
            default:
                break;
          }
      }
      return [open, inprogress, closed, resolved]
  }

    const state = {
        labels: ['Open', 'In Progress', 'Closed',
        'Resolved'],
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
                data: filterStatus()
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

export default StatusChart;