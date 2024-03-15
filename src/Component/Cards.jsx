import React from 'react';

const Cards = () => {
    return (
        <div>


            <div className='flex justify-between gap-4'>
                <div className="card bg-base-100 border ">
                    <figure className="p-4">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" p-4 ">
                        <h2 className="card-title">Chicken Caesar Salad</h2>
                        <p>Classic Italian pasta dish with savory meat sauce.</p>
                        <div className="divider"></div>
                        <h2>Ingredients: 6</h2>
                        <ul>
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                        <div className="divider"></div>
                        <div className='flex justify-between'>
                            <p>30 minutes</p>
                            <p>600 calories</p>
                        </div>
                        <div className="card-actions">
                        <button className="btn btn-sm rounded-full bg-[#0BE58A]">Want to cook</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 border ">
                    <figure className="p-4">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" p-4 ">
                        <h2 className="card-title">Chicken Caesar Salad</h2>
                        <p>Classic Italian pasta dish with savory meat sauce.</p>
                        <div className="divider"></div>
                        <h2>Ingredients: 6</h2>
                        <ul>
                            <li>500g ground beef</li>
                            <li>1 onion, chopped</li>
                            <li>2 cloves garlic, minced</li>
                        </ul>
                        <div className="divider"></div>
                        <div className='flex justify-between'>
                            <p>30 minutes</p>
                            <p>600 calories</p>
                        </div>
                        <div className="card-actions">
                        <button className="btn btn-sm rounded-full bg-[#0BE58A]">Want to cook</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cards;