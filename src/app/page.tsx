import Image from 'next/image';
import React from 'react';
import img from "@/assets/hero/hero3.png"
import PrimaryButton from '@/components/shared/PrimaryButton';

const Page = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 min-h-screen max-w-7xl mx-auto px-6 py-12">
            {/* Image Section */}
            <div className="flex justify-center">
                <Image
                    alt="AI Resume Builder"
                    src={img}
                    width={800}
                    height={1200}
                    className="rounded-2xl h-[60vh] object-cover shadow-lg"
                />
            </div>

            {/* Text Section */}
            <div className="space-y-8 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Create Your <span className="text-blue-500">AI<br /> Powered Resume</span>
                </h1>
                <h3 className="font-semibold text-xl md:text-2xl">
                    Build a job-winning CV in minutes with AI assistance.
                </h3>
                <p className="text-gray-500 max-w-lg mx-auto md:mx-0">
                    Our smart resume builder helps you highlight your skills and experience,
                    making sure your CV stands out to recruiters and top companies.
                </p>
                <div className='w-fit mx-auto md:mx-0'>
                    <PrimaryButton href='/create' label="Start Building" />
                </div>
            </div>
        </div>
    );
};

export default Page;
