import React from "react";
import { Link } from 'react-router-dom';

function TicketTable(props){

    return(

    <tbody>
        <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {props.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {props.submitter}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {props.status}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {props.date}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to={"/tickets/" + props.id}>
            <p className="text-indigo-600 hover:text-indigo-900">Ticket Details</p>
            </Link>
        </td>
        </tr>
    </tbody>

    )
}

export default TicketTable;