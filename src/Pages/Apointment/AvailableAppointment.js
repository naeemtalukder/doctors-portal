import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../Apointment/Service';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])
    return (
        <div>
            <h2 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;