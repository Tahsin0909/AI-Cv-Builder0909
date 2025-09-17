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
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-7'>
                {
                    stepsData?.map((step) => (
                        <div key={step.step} className='  relative w-full'>

                            {/* line */}
                            <div className={`p-[3px] top-1/4 border ${step.step === 1 ? " w-1/2 right-0" : step.step === 7 ? " w-1/2" : " w-full"} absolute `} >
                                <div className='p-[1px] bg-white'></div>
                            </div>


                            <div className='flex flex-col items-center justify-center relative m-3 max-w-[150px]'>
                                <div
                                    style={{
                                        background: "linear-gradient(46deg, #017AFF 37.44%, #61BDFF 67.11%)"
                                    }}
                                    className='rounded-full text-white w-12 h-12 text-xl font-bold flex items-center justify-center mb-2'>
                                    {step.step}
                                </div>
                                <h3 className='text-center text-lg font-bold'>{step.label}</h3>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div >
    );
};

export default AllSteps;