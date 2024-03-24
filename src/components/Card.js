/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

export const Card = ({ station, position}) => {

    const dir = `https://www.google.co.in/maps/dir/${position.latitude},${position.longitude}/${station.lattitude},${station.longitude}`;
    const pin = `https://www.google.com/maps/place/${station.lattitude},${station.longitude}`;

    return (
        <>
            <div className="max-w-xs  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">

                <img src={station.image} className="size-50 rounded-lg"></img>

                <div className="mt-2">
                    <p className="mb-2 text-2xl text-wrap font-bold tracking-tight text-gray-900 dark:text-white">{station.name}</p>

                    <p className="mb-3 font-normal text-wrap text-gray-700 dark:text-gray-400">{station.address}</p>

                    <div>
                        <a href={position.lodded ? dir : pin} target={'_blank'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                           text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-500
                            dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-800">
                            Direction
                            <IoIosSend className="size-4 ml-1" />
                        </a>

                        <Link to="/Bookingslot">
                            < button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                           text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-500
                            dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-800 ml-14 ">
                                Book now
                                <IoIosSend className="size-4 ml-1" />
                            </button>
                        </Link>

                    </div>

                </div>
            </div >
        </>
    )
}
