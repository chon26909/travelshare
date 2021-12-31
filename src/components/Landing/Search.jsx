import React from 'react'
import './search.css'
import { Input, Dropdown } from 'semantic-ui-react';

const friendOptions = [
    {
        key: '1',
        text: 'ทั้งหมด',
        value: 'ทั้งหมด',
        // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: '2',
        text: 'น้ำตก',
        value: 'น้ำตก',
        // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: '3',
        text: 'โรงแรม',
        value: 'โรงแรม',
        // image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
]


export const Search = () => {
    return (
        <div className='search-landing-page'>
            <div className='overlay-search'>
                <Dropdown
                    selection
                    options={friendOptions} 
                    defaultValue={friendOptions[0].value}
                    />
                <Input icon='search' placeholder='ค้นหา' size='big' />
            </div>
            <img className='bg-search' src="https://2ppost.com/wp-content/uploads/2021/04/travel-world.jpg" />
        </div>
    )
}
