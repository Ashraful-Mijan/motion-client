import React from 'react';
import Pack from '../Pack/Pack';

export const pack = [
    {
        packName: 'Premium',
        price: 200,
        condition: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque repellat eius tempore repudiandae dolor! Impedit magni accusamus voluptates praesentium sit cupiditate at perspiciatis voluptatibus cum, harum atque deserunt odio?',
        id: '1'
    },
    {
        packName: 'Standard',
        price: 150,
        condition: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque repellat eius tempore repudiandae dolor! Impedit magni accusamus voluptates praesentium sit cupiditate at perspiciatis voluptatibus cum, harum atque deserunt odio?',
        id: '2'
    },
    {
        packName: 'Basic',
        price: 100,
        condition: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis itaque repellat eius tempore repudiandae dolor! Impedit magni accusamus voluptates praesentium sit cupiditate at perspiciatis voluptatibus cum, harum atque deserunt odio?',
        id: '3'
    },
]

const Packages = () => {
    return (
        <section className='pack py-5' id="pack">
            <div className="container mx-auto ">
                <div className="row">
                    {
                        pack.map(pack=> <Pack key={pack.packName} pack={pack} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Packages;