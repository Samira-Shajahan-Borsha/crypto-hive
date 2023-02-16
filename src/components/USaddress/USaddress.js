import React from 'react';

const USaddress = () => {
    return (
        <div>
            <div className='border p-8 bg-blue-100 w-full'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <h1>Street: 1203 SN Street</h1>
                        <h1>City: New York</h1>
                        <h1>Phone: +1(607)2333333</h1>
                        <h1>Email: contact.usa@cc.com</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl'>USA OFFICE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default USaddress;