import React from 'react'
import { Link } from 'react-router-dom'

function ReciepieList({ recipies }) {

    return (
        <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {recipies.map((recipe) => {
                const { id, title, method, cookingTime, img, ingredients } = recipe
                return <li key={id} className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img src={img} alt={title} className='h-[270px] object-cover w-full' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">
                            {title}
                        </h2>
                        <p>{method.substring(0, 100)}...</p>
                        <Link to={`/recipie/${id}`} className="btn btn-outline btn-secondary">Read More</Link>
                    </div>
                </li>
            })}
        </ul>
    )
}

export default ReciepieList