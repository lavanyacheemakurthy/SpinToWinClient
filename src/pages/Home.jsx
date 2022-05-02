import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Wheel from '../components/Wheel'
import { BASE_URL } from '../constants'
import './Home.css'

export const Home = () => {
    const [isBusy, setIsBusy] = useState(false);
    const [rewards, setRewards] = useState(['100/- Coupon', '500/- Coupon', '1000/- Coupon', '1500/- Coupon', '2000/- Coupon', 'Spin again!', '5000/- Coupon'])
    const [selected, setSelected] = useState(null);
    // Functions
    const fetchData = () => {
        setIsBusy(true)

        fetch(BASE_URL + '/rewards.json').then(r => r.json()).then(res => {
            console.log("Rewards data ", res);
            
            setRewards(JSON.parse(JSON.stringify(res)));
            setIsBusy(false)
        }).catch(error => {
            console.log("Exception fetching rewards ", error);
            setIsBusy(false)
        })
    }
    // Hooks
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='home'>
            <div><Row>
                <div>
                    Please click on wheel and wait to see what you won!
                </div>
            </Row>
                <Wheel items={Object.keys(rewards).filter(x => rewards[x].units !== 0).map(x => rewards[x].name)}
                    onSelectItem={(selected) => {
                        console.log("Selected reward : ", selected);
                        setSelected(selected)
                        // Update inventory by subtracting available units
                    }}
                    selectedItem={selected} />
                {selected && <div className='selected'>
                    <h4>You Won : {selected}</h4></div>}
            </div>
        </div>
    )
}
