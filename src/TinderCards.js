/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react'
import database from './firebase'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [devs, setDevs] = useState([])

    useEffect(()=>{
        const unsubscribe =  database.collection('devs').onSnapshot(snapshot =>{
            setDevs(snapshot.docs.map((doc) => doc.data()))
        })

        return ()=>{
            unsubscribe();
        }
    }, [])
    
    return (
        <div>
           <div className="tindercard_container">
         
         {devs.map((dev, index) =>(
             <TinderCard key={index} className="swipe" preventSwipe = {["up", "down"]}>
                 <div className="card" style={{backgroundImage: `url(${dev.pic})`}}>
                    <h3>{dev.name}</h3>
                 </div>
             </TinderCard>
         ))}
            </div>
        </div>
    )
}

export default TinderCards
