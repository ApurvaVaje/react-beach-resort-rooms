import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const { handleChange, 
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets} = context
    
    // get Unique values
    let types = getUnique(rooms,'type')
    //add them
    types = ['all',...types]
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    // get Unique guest
    let people = getUnique(rooms,'capacity')
    //add them
    // people = ['1',...capacity]
    //map to jsx
    people = people.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title = "search rooms"/>
            <form className="filter-form">
            
                <div className="form-group">
                    <label for="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control"
                        onChange = {handleChange}
                    >
                    {types}
                    </select>
                    
                </div>
                
                <div className="form-group">
                    <label for="capacity">guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control"
                        onChange = {handleChange}
                    >
                    {people}
                    </select>
                    
                </div>

                <div className="form-group">
                    <label for="price">room price ${price}</label>
                    <input type="range" name="price" value={price} min={minPrice} max={maxPrice} 
                    className="form-control" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label for="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" value={minSize} min={minSize} id="size"
                        className="size-input" onChange={handleChange}/>
                        <input type="number" name="maxSize" value={maxSize} max={maxSize} id="size"
                        className="size-input" onChange={handleChange}/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" checked={breakfast}
                            onChange={handleChange} />
                        <label for="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" checked={pets}
                                onChange={handleChange} />
                        <label for="pets">pets</label>
                    </div>
                </div>
            
            </form>
        </section>
    )
}
