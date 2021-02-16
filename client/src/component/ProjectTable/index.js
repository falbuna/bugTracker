import React from "react";
import { Link } from 'react-router-dom';

function ProjectTable(props){

    return(

    <tbody className="bg-white divide-y divide-gray-200" key={props.index}>
        <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {props.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {props.description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {props.creator}
        </td>
        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
        </td> */}
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link to={"/projects/" + props.id}>
            <p className="text-indigo-600 hover:text-indigo-900">Details</p>
            </Link>
        </td>
        </tr>
        {/* <!-- More items... --> */}
    </tbody>
    )
}

export default ProjectTable;