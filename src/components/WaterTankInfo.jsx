import React, { useEffect, useState } from 'react'
import style from '../assets/css/WaterTankInfo.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/TankDataslice';
import { onValue } from 'firebase/database';
import { db, refe } from '../Database/firebaseDB';

function WaterTankInfo() {

    const tankState = useSelector((state) => state.tankReducer.Tank);
    const dispatch = useDispatch();

    
    onValue(refe(db,'/Tank'), (snapshot) => {
        dispatch(fetchData());
        updateWaterLevel();
    })

    useEffect(()=>{
        dispatch(fetchData());
        console.log("tankState:" , tankState)
    },[])
    
    function updateWaterLevel() {
        for (let i = 1; i <= 3; i++) {
            var tankHeight = document.querySelector(`#waterTank${i}`).clientHeight;
            console.log(tankHeight)
            // console.log("inside function updateWaterLevel: ",tankState)
            var waterLevel = (tankHeight * tankState[`tank${i}`]) / 100;
            // console.log(typeof tankState);
            document.getElementById(`waterLevel${i}`).style.height = waterLevel + 'px';
        }
    }

    return (
        <>
            <div className={style.waterTanksContainer}>
                <div className={style.waterTank} id='waterTank1'>
                    <div className={style.waterLevel} id="waterLevel1">Tank1</div>
                </div>
                <div className={style.waterTank} id='waterTank2'>
                    <div className={style.waterLevel} id="waterLevel2">Tank2</div>
                </div>
                <div className={style.waterTank} id='waterTank3'>
                    <div className={style.waterLevel} id="waterLevel3">Tank3</div>
                </div>
            </div>
        </>
    )
}

export default WaterTankInfo
