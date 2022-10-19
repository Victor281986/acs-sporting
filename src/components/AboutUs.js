import React from 'react';

import illustration from '../images/soccer-player.png';

export default function AboutUs() {
    return (
        <div className="about-us" id="about">
            <div className="text">
	            <h1>Cine suntem?</h1>
	            <hr />
	            <p>
								<br />
	                Asociația Club Sportiv "Sporting Lupeni” s-a înființat în anul 2019, având ca scop desfășurarea de activități sportive, respectiv selecționarea, inițierea și pregătirea sportivilor, precum și participarea la competiții sportive interne și internaționale ori alte activități conexe. Un alt scop la fel de important, este obținerea unei educații corespunzătoare copiiilor, permițându-le astfel să urmeze o carieră alternativă spre educație sau muncă, în cazul în care nu fac față unui nivel de elită în fotbal.
	                Obiectivul nostru general este acela de a contribui la dezvoltarea comunității noastre, activitățile sportive având un rol deosebit pentru sănătate, socializare și coeziune socială, totodată având și rolul de mediator al interacțiunii sociale.
	                <br /><br />
	                Sportul înseamnă sănătate, echilibru și performanță, responsabilitate și dăruire. Atât un mod plăcut de a face ceva util, cât și o rampă de lansare înspre un viitor încununat de succes!
	                Cu noi, copilul tău își poate începe propria legendă!
	                <br /><br />
	                Încurajează-l să devină un <strong>CAMPION</strong>!
	
	            </p>
            </div>
            <img src={illustration} id="illustration" alt="Ilustratie Fotbal" />
        </div>
    )
}
