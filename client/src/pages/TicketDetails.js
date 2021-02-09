import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import TicketCard from '../component/TicketCard';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function TicketDetails(){

    const { user, isAuthenticated } = useAuth0();

    const [ticket, setTicket] = useState([]);

    const {id} = useParams()
    useEffect(() => {
        API.getTicket(id)
            .then(res => setTicket(res.data))
            .catch(err => console.log(err))
    }, [id])
    

    return(
        isAuthenticated && (
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
            <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Logged in as: {user.email}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            
            <div className="py-4"> 

                <TicketCard
                    title={ticket.title} 
                    project={ticket.project}
                    date={ticket.date}
                    status={ticket.status}
                    priority={ticket.priority}
                    submitter={ticket.submitter}
                    type={ticket.type}
                />

            </div>
            </div>
            </div>
            </main>
        )
    )
}

export default TicketDetails;