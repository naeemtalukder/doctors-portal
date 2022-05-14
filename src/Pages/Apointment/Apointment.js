import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import ApointmentBanner from './ApointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Apointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Apointment;