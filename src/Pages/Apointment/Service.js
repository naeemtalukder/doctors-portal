import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl my-12">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span> : <span className='text-red-500'>Not slot available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;