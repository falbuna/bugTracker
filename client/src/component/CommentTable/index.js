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
                        </tr>

                    </tbody>
    )

}

export default CommentTable;