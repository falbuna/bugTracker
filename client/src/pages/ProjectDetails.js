import React, { useState, useEffect, useRef } from 'react';
import API from '../utils/API';
import moment from 'moment';
import TicketTable from '../component/TicketTable';
import { Link, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function ProjectDetails(){

    const { user, isAuthenticated } = useAuth0();

    const [project, setProject] = useState([]);

    const [tickets, setTickets] = useState([]);

    const [ticketInput, setTicketInput] = useState(false);

    const titleRef = useRef();
    const statusRef = useRef();
    const priorityRef = useRef();
    const typeRef = useRef();

    function handleSaveTicket(id){
        API.createTicket(id, {
            submitter: user.email,
            project: project.title,
            title: titleRef.current.value,
            status: statusRef.current.value,
            priority: priorityRef.current.value,
            type: typeRef.current.value
        })
        .then(function(){
            window.location.reload()
      })}

    const {id} = useParams()
    useEffect(() => {
        API.getProject(id)
            .then(res => setProject(res.data))
            .catch(err => console.log(err))
    }, [id])

    useEffect(() => {
        API.getProject(id)
            .then(res => {
                setTickets(res.data.tickets)
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
                <div className="bg-blue-50 px-4 py-5 border-b border-gray-200 sm:px-6">
                        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                            <div className="ml-4 mt-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Details for {project.title}
                                </h3>
                                <p className="text-indigo-600 font-bold hover:text-indigo-900">
                                <Link to={"/Projects"}>
                                    Back to List
                                </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-gray-200 px-4 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Project Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {project.title}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Project Creator
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {project.creator}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Project Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {project.description}
                  </dd>
                </div>
              </dl>
            </div>
            
            {
                ticketInput
                    ?
                    <div className="py-6">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 rounded-t-lg sm:px-6">
                        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                            <div className="ml-4 mt-4">
                            <h3 className="text-md leading-6 font-medium text-gray-900">
                                Create a New Ticket for the Project
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Complete the fields to create a new ticket.
                            </p>
                            </div>
                            <div className="ml-4 mt-4 flex-shrink-0">
                            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setTicketInput(!ticketInput)}>
                                Cancel
                            </button>
                            </div>
                        </div>
                    </div>

                    <form className="border-solid border-2 rounded-b-lg border-gray-100">
                            <div className="mx-10 flex flex-col">
                            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
                                Ticket Name
                                </label>
                                <div className="mt-1">
                                <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" ref={titleRef}/>
                                </div>
                                </div>
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                    <select id="status" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={statusRef}>
                                        <option>Open</option>
                                        <option>Closed</option>
                                        <option>Resolved</option>
                                        <option>In Progress</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                                    <select id="priority" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={priorityRef}>
                                        <option>None</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                    <select id="type" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" ref={typeRef}>
                                        <option>Bug/Error</option>
                                        <option>Feature Requests</option>
                                        <option>Comments</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="mx-2 my-2">
                                    <button onClick={() => handleSaveTicket(project._id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </form>
                    </div>
                :
            <div className="py-6">
            <div className="bg-gray-50 px-4 py-2 border-b rounded-t-lg border-gray-200 sm:px-6">
                <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                    <h3 className="text-md leading-6 font-medium text-gray-900">
                        Tickets for this Project
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Summary of each ticket. Click on more details to view more information regarding the ticket.
                    </p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setTicketInput(!ticketInput)}>
                        Create new ticket
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {!tickets.length ? (
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    {/* <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"> */}
                        {/* <h1 className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">No tickets to Display</h1> */}
                        <div className="App">
                        </div>
                        {/* </div> */}
                        </div>
                        </div>
                        ) : (
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Submitter
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                            {
                                tickets.map((ticket, index) => (
                                    <TicketTable
                                        key={index}
                                        title={ticket.title}
                                        submitter={ticket.submitter}
                                        status={ticket.status}
                                        date={moment(ticket.date).local().format("MM/DD/YYYY")}
                                        id={ticket._id}
                                    />
                                ))}
                        </table>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
            }
            </div>
            </div>
            </main>
    ))
}

export default ProjectDetails;