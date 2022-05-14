import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span> : <span className='text-red-500'>Not slot available</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} AVAILABLE</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary text-white uppercase">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;