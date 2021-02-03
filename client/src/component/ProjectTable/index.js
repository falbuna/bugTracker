import React from "react";

function ProjectTable(){

    return(

    <tbody className="bg-white divide-y divide-gray-200">
        <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            test
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            test
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            test
        </td>
        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Admin
        </td> */}
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="/edit" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
        </tr>

        {/* <!-- More items... --> */}
    </tbody>
    )
}

export default ProjectTable;