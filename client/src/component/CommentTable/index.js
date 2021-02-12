import React from "react";

function CommentTable(props){

    return(

                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {props.commenter}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {props.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {props.created}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                        <p className="text-indigo-600 hover:text-indigo-900">Details</p>
                        
                        </td>
                        </tr>

                    </tbody>
    )

}

export default CommentTable;