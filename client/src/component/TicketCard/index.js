import React from "react";
import { Link } from 'react-router-dom';


function TicketCard(props){

    return(

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="ml-4 mt-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Ticket Details for {props.title}
            </h3>
                <Link to={"/tickets/"}>
                    <p className="mt-1 font-bold text-indigo-600">Back to Tickets</p>
                </Link>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
            <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Edit Ticket
            </button>
            </div>
        </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
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
                Comment
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                    <div className="mt-1">
                        <input type="text" name="comment" id="comment" className="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"/>
                    </div>           
                </dd>
            </div>
            </dl>
        </div>
        </div>

    )
}

export default TicketCard;