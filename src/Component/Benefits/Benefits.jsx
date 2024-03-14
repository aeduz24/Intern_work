import React from 'react'
import './Benefits.css'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
const Benefits = () => {
  return (
    <div>
      <section className="bene-container">
        <div className="sec-left">
        <h1>BENEFITS</h1>
        <h3>for IITians after becoming </h3>
        <h1>AeduZ MENTORS</h1>
        </div>
        <div className="sec-right">
            <h3 className="content"><i className="icon"><LibraryAddCheckIcon  fontSize='medium'/></i>Get lucrative pay for merely a 30-minute guidance session</h3>
            <h3 className="content"><i className="icon"><LibraryAddCheckIcon  fontSize='medium'/></i>Start earning right from your first year</h3>
            <h3 className="content"><i className="icon"><LibraryAddCheckIcon  fontSize='medium'/></i>Get fulfillment from making a meaningful impact</h3>
            <h3 className="content"><i className="icon"><LibraryAddCheckIcon  fontSize='medium'/></i>Draw insights into student challenges and needs</h3>
        </div>
      </section>
    </div>
  )
}

export default Benefits
