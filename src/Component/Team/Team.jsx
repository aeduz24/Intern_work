import React from 'react'
import './Team.css'
import dataTeam from '../../dataTeam'
import ItemTeam from '../ItemTeam/ItemTeam'

function Team() {
    const card = dataTeam.map((item) => {
      return <ItemTeam image={item.img} name={item.name} content={item.content} />
    })
    return (
      <>
      <div className="body">
      <h1 className="heading">Meet Our Team</h1>
      <p className="para">We are to-be graduates from IIT Bombay, aspires to deliver high quality mentorship through our qualified mentors </p>
      <p className="para">and committed to serve every Indian aspirant who dreaming to serve our nation and become an asset in future.</p>
      <div className="wrapper">{card}</div>
      </div>
      </>
    );
  }
  
export default Team
