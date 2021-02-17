import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


function TicketCard(props){

    const { user } = useAuth0();

    const [editTicket, setEditTicket] = useState(false);

    const messageRef = useRef();

    function handleSaveComment(id){
        API.createComment(id, {
            commenter: user.email,
            message: messageRef.current.value
        })
        .then(function(){
            window.location.reload()
        })}
    
    const titleRef = useRef();
    const statusRef = useRef();
    const priorityRef = useRef();
    const typeRef = useRef();

    function handleUpdateTicket(id){
        API.updateTicket(id, {
            submitter: user.email,
            title: titleRef.current.value,
            status: statusRef.current.value,
            priority: priorityRef.current.value,
            type: typeRef.current.value
        })
        .then(function(){
            window.location.reload()
    })}

    return(
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">

        {
            editTicket
            ?
            <div>
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Ticket Details for {props.id}
                </h3>
                    <Link to={"/tickets/"}>
                        <p className="mt-1 text-indigo-600">Back to Tickets</p>
                    </Link>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0">
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setEditTicket(!editTicket)}>
                    Cancel
                </button>
                </div>
            </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-3 sm:px-6">
            <form>
                            <div className="mx-10 flex flex-col">
                            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
                                Ticket Name
                                </label>
                                <div className="mt-1">
                                <input type="text" name="project_name" id="project_name" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" defaultValue={props.title} ref={titleRef} />
                                </div>
                                </div>
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                    <select id="status" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue={props.status} ref={statusRef}>
                                        <option>Open</option>
                                        <option>Closed</option>
                                        <option>Resolved</option>
                                        <option>In Progress</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                                    <select id="priority" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue={props.priority} ref={priorityRef}>
                                        <option>None</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                    <select id="type" name="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue={props.type} ref={typeRef}>
                                        <option>Bug/Error</option>
                                        <option>Feature Requests</option>
                                        <option>Comments</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="mx-1 my-1">
                                    <button onClick={() => handleUpdateTicket(props.id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Update
                                    </button>
                                </div>
                                </div>
                            </div>
                            </div>
                    </form>
            </div>
            </div>
            :
            <div>
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Ticket Details for {props.id}
                </h3>
                    <Link to={"/tickets/"}>
                        <p className="mt-1 text-indigo-600">Back to Tickets</p>
                    </Link>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0">
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setEditTicket(!editTicket)}>
                    Edit Ticket
                </button>
                </div>
            </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-3 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Project
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.project}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Ticket Title
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.title}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.date}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.status}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Priority
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.priority}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Submitter
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.submitter}
                    </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                    Type of Ticket
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                    {props.type}
                    </dd>
                </div>
                <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">
                    Add a Comment
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        <div className="mt-1">
                        <textarea id="description" name="description" rows="3" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md" ref={messageRef}></textarea>
                        </div>
                        <div className="my-2">
                            <button onClick={() => handleSaveComment(props.id)} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>           
                    </dd>
                </div>
                </dl>
            </div>
        </div>
        }
    </div>
    )
}

export default TicketCard;