import React from 'react'

export default function Temp() {

    const classrooms = [
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM ", "jan 31,2025, 5:00 PM ", "jan 31,2025, 5:00 PM "
            ]
        },
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM "
            ]
        },
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM "
            ]
        },
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM "
            ]
        },
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM "
            ]
        },
        {
            course: "FOUNDATION COURSE 2026",
            subtitile: "General Studies Prelims & Mains",
            Language: "English",
            onlineFees: "2, 10, 000",
            offlineFees: " 1, 40, 000",
            batchDates: [
                "jan 31,2025, 5:00 PM "
            ]
        },


    ]

    return (
        <div>
            <h1 className='flex justify-center font-semibold text-4xl text-black-100 my-14'>ClassRoom</h1>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 gap-x-9 gap-y-11 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-[70%]'>

                    {
                        classrooms.map((rooms) => {
                            return <div className="flex justify-center flex-col gap-2 max-w-3xl p-6  bg-slate-50  shadow  dark:border-gray-300 min-h-full">

                                <div className=' flex justify-center'>
                                    <h5 className=" flex items-center justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                    {rooms.course}</h5>
                                </div>

                                <p className="my-3 font-normal text-gray-700 text-sm flex justify-center">{rooms.subtitile}</p>

                                <div className='flex justify-center gap-1'>
                                    <svg width="17px" height="15px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="var(--ci-primary-color, #000000)" d="M320,24H16V328H192V496H496V192H320ZM148.305,96,98.093,239.3H132l8.166-23.3H192v80H48V56H288V192H221.332L187.7,96Zm36.317,88H151.378L168,136.562ZM464,224V464H224V224Z" className="ci-primary" />
                                        <path fill="var(--ci-primary-color, #000000)" d="M317.432,368.48A136.761,136.761,0,0,0,327.521,382.6q-17.4,9.384-39.521,9.4v32c24.141,0,45.71-6.408,64-18.824C370.29,417.592,391.859,424,416,424V392q-22.075,0-39.52-9.407a136.574,136.574,0,0,0,10.088-14.113A166.212,166.212,0,0,0,406.662,320H424V288H368V264H336v24H280v32h17.338A166.212,166.212,0,0,0,317.432,368.48ZM373.53,320a133.013,133.013,0,0,1-14.1,31.52A104.39,104.39,0,0,1,352,361.968a103.546,103.546,0,0,1-6.93-9.651A132.384,132.384,0,0,1,330.466,320Z" className="ci-primary" />
                                    </svg>
                                    <p className="mb-3 font-normal text-gray-700 text-sm flex justify-center">Englilsh</p>

                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <div>
                                        <span className='flex text-blue-500 text-base font-semibold gap-1'>
                                            <p>Offline Fees :</p>
                                            <p>{rooms.offlineFees}</p>
                                        </span>

                                        <span className='flex text-blue-500 text-base font-semibold gap-1'>
                                            <p>Online Fees:</p>
                                            <p>{rooms.onlineFees}</p>
                                        </span>
                                    </div>
                                </div>

                                <hr className="h-px mx-1 my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                                <div>
                                    <p className='flex items-center justify-center text-lg  text-blue-500 font-semibold'>Batch Dates</p>
                                    <div className='grid grid-cols-2 grid-flow-row mt-1'>
                                       
                                        {
                                            rooms.batchDates.map((date)=>{
                                                return <p className='text-sm'>{date}</p>
                                            })
                                        }
                                        
                                    </div>
                                </div>

                                <div className='mt-4'>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2438f0] rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none  focus:ring-blue-800">
                                        Click To Register

                                    </a>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>
        </div>
    )
}
