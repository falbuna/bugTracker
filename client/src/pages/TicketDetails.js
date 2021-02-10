import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import moment from 'moment';
import TicketCard from '../component/TicketCard';
import CommentTable from '../component/CommentTable';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function TicketDetails(){

    const { user, isAuthenticated } = useAuth0();

    const [ticket, setTicket] = useState([]);

    const [comments, setComments] = useState([]);

    const {id} = useParams()
    useEffect(() => {
        API.getTicket(id)
            .then(res => setTicket(res.data))
            .catch(err => console.log(err))
    }, [id])
    
    useEffect(() => {
        API.getTicket(id)
            .then(res => {
                setComments(res.data.comments)
            }).catch(err => console.log(err))
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
                    date={moment(ticket.date).local().format("MM/DD/YYYY")}
                    status={ticket.status}
                    priority={ticket.priority}
                    submitter={ticket.submitter}
                    type={ticket.type}
                    id={ticket._id}
                />

            </div>

            {!comments.length ? (
            <div className="App">
                </div>
                ) : ( 
            <div className="py-4">
            <div className="bg-white px-4 py-5 border-2 rounded-l border-gray-100 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Comments for this Ticket
                </h3>
            </div>
            <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Commenter
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Message
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created on
                        </th>
                        </tr>
                    </thead>
                 {
                    comments.map(comment => (
                        <CommentTable
                            key={comment._id}
                            commenter={comment.commenter}
                            message={comment.message}
                            created={comment.created}
                />
                ))}
                    </table>
                </div>
                </div>
            </div>
            </div>
            </div>
            )}
            </div>

            </div>
            </main>
        )
    )
}

export default TicketDetails;