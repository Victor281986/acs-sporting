import React from 'react';
import ReactDOM from 'react-dom'

export default function MainTraining() {
    let chosenHour;

    let tomorrow = new Date(Date.now() + (12096e5 / 14))
    .toISOString()
    .split('T')[0]
    .toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    
    let twoWeeks = new Date(Date.now() + 12096e5)
    .toISOString()
    .split('T')[0]
    .toLocaleString([], {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    let availableHours = [15, 16];
    const getDay = e => {
        const dayInput = e.target;

        dayInput.addEventListener("change", () => {
            const chosenTimeToString = dayInput.valueAsDate.toString();
            const chosenDay = chosenTimeToString.split(" ")[0];

            if (chosenDay === "Fri")
                availableHours = [14];
            
            getFinalHours();
        });

    };

    let counter = 0;
    const style = e => {
        if (counter > 0) {
            let prevSelectedHour = document.querySelector(".selected");
            prevSelectedHour.classList.remove("selected");
        }

        let hour = e.target;
        hour.classList.add("selected");
        chosenHour = hour.querySelector("span").textContent;

        counter++;
    };

    let finalHours;
    const getFinalHours = () => {
        finalHours = availableHours.map(hour => {
            return (
                <section
                    key={hour}
                    className="hour"
                    onClick={style}
                >
                    <span>{`${hour}:00 - ${hour + 1}:00`}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                </section>
            )
        });
    }

    const labelAnimation = (e) => {
        
        if (e.target) {
            const htmlFor = e.target.name;
            document.querySelector(`label[for="${htmlFor}"]`).style.transform = "translateY(-175%)";
            
        } else {
            const forProp = e.name;

            document.querySelector(`label[for="${forProp}"]`).style.transform = "translateY(-175%)";
        }
    };

    const showHours = () => {
        const hours = document.querySelector(".hours");
        document.querySelector(".form h2").style.transform = "scale(1)"
        ReactDOM.render(finalHours, hours)
    }

    return (

        <div className="main-training">
            <h2 key={1}>Programează-ți un antrenament personal</h2>
            <div key={2} className="form">
                <form>
                    <div className="input-container">
                        <label htmlFor="name">
                            <i className="fa fa-user"></i>
                            &nbsp;Nume
                            <span>*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            onClick={labelAnimation}
                            id="name"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">
                            <i className="fa fa-envelope"></i>
                            &nbsp;Email
                            <span>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            onClick={labelAnimation}
                            id="email"
                        />
                    </div>

                    <input
                        type="date"
                        min={tomorrow}
                        max={twoWeeks}
                        onClick={getDay}
                    />
                    
                    <h2>Alege-ti un interval orar</h2>
                    <div
                        className="hours"
                        onClick={getDay}
                    >
                    </div>

                    <button
                        onClick={showHours}
                        type="button"
                    >
                        Confirma
                    </button>

                </form>


            </div>
        </div>
    )
}