import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import {steps as newSteps} from './steps.js'
import './App.css';
import 'shepherd.js/dist/css/shepherd.css';
import { Grid } from './Grid.jsx';

const Button = () => {
    const tour = useContext(ShepherdTourContext);

    return (
        <button className="start-onboarding" onClick={tour.start}>
            Start OnBoarding
        </button>
    );
}

function App() {
    const tourOptions = {
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark',
            cancelIcon: {
                enabled: true
            }
        },
        useModalOverlay: true
    };
    return (
        <>
            <h1 className='first-step'>Hello from shephard</h1>
            <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
                <Button />
            </ShepherdTour>
            <Grid />
        </>
    )
}

export default App
