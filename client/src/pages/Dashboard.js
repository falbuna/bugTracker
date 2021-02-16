import React from 'react';
import StatusChart from '../component/Charts/StatusChart';
import PriorityChart from '../component/Charts/PriortyChart';
import TypeChart from '../component/Charts/TypeChart';
import { useAuth0 } from '@auth0/auth0-react';


function Dashboard(){

    const { user, isAuthenticated } = useAuth0();

    return(

        isAuthenticated && (
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Hello: {user.email}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <div className="border-2 border-gray-100 bg-gray-300 rounded-lg">
                  <div>
                    <dl className="mt-5 mb-5 mx-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">                       
                          <StatusChart />
                            <dt className="text-md font-medium text-gray-800">
                                Status of All Tickets
                            </dt> 
                        </div>
                      </div>

                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">                       
                          <PriorityChart />
                            <dt className="text-md font-medium text-gray-800">
                              Priority for All Tickets
                            </dt> 
                        </div>
                      </div>


                      <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">                       
                          <TypeChart />
                            <dt className="text-md font-medium text-gray-800">
                              Tickets By Type
                            </dt> 
                        </div>
                      </div>

                      {/* <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Avg. Click Rate
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-gray-900">
                            24.57%
                          </dd>
                        </div>
                      </div> */}

                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        )
    )
}

export default Dashboard;