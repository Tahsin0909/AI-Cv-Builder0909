import React from 'react';
type step = {
    step: number;
    label: string;
}

const stepsData: step[] = [
    {
        step: 1,
        label: "Personal Information"
    },
    {
        step: 2,
        label: "Career Summary"
    },
    {
        step: 3,
        label: "Skills & Experience"
    },
    {
        step: 4,
        label: "Education & Certifications"
    },
    {
        step: 5,
        label: "Contact Information"
    },
    {
        step: 6,
        label: "AI Resume Generation"
    },
    {
        step: 7,
        label: "Review & Download"
    }
]


const AllSteps = () => {
    return (
        <div >
            <div className='flex gap-2 items-center justify-center'>
                {
                    stepsData?.map((step) => (
                        <div key={step.step} className='flex flex-col items-center border '>
                            <div className='rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center mb-2'>
                                {step.step}
                            </div>
                            <h3>{step.label}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllSteps;