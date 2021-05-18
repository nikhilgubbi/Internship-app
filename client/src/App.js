import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


import './App.css';

class App extends Component {
  state = { usn: '', studentname:'', project: '', company: '', evalu:'', sem:'', sec:'', dat:'', certificateId: 0, opd: 0, ijd: 0, sd: 0, opad: 0, ro: 0, cad: 0, oas: 0, f: 0, gps: 0, rc: 0 }

  inputEditConvert = ({ target: { value, name } }) => this.setState({ [name]: value });

  markSheetgenerator = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'internship-marks');
      })
  }

  render() {
    return (
      <div className="container">
        
        <h2><b>Student Details</b></h2>

        <label for="usn"><b>USN:</b></label>
        <input type="text" placeholder="USN" name="usn" onChange={this.inputEditConvert} />

        <label for="studentname"><b>Student Name</b></label>
        <input type="text" placeholder="Student Name" name="studentname" onChange={this.inputEditConvert} />

        <label for="project"><b>Project Title</b></label>
        <input type="text" placeholder="Project Title" name="project" onChange={this.inputEditConvert} />

        <label for="company"><b>Company Name</b></label>
        <input type="text" placeholder="Company Name" name="company" onChange={this.inputEditConvert} />

        <label for="evalu"><b>Guide Name</b></label>
        <input type="text" placeholder="Guide Name" name="evalu" onChange={this.inputEditConvert} />

        <label for="sem"><b>Semester</b></label>
        <input type="number" placeholder="Semester" name="sem" onChange={this.inputEditConvert} />

        <label for="sec"><b>Section</b></label>
        <input type="text" placeholder="Semester" name="sec" onChange={this.inputEditConvert} />

        <label for="dat"><b>Date</b></label>
        <input type="text" placeholder="Date" name="dat" onChange={this.inputEditConvert} />

        <label for="certificateId"><b>Certificate Number:</b></label>
        <input type="number" placeholder="Certificate Number" name="certificateId" onChange={this.inputEditConvert} />

        <h2><b>Internship Marks Result Based On Internship Presentation</b></h2>

        <label for="opd"><b>Organization Program Description : </b></label>
        <input type="number" placeholder="Organization Program Description" name="opd" onChange={this.inputEditConvert} />

        <label for="ijd"><b>Internship Job Description : </b></label>
        <input type="number" placeholder="Internship Job Description" name="ijd" onChange={this.inputEditConvert} />

        <label for="sd"><b>Skills Developed: </b></label>
        <input type="number" placeholder="Skills Developed" name="sd" onChange={this.inputEditConvert} />

        <label for="opad"><b>Oral Presentation And Defense : </b></label>
        <input type="number" placeholder="Oral Presentation And Defense" name="opad" onChange={this.inputEditConvert} />

        <label for="ro"><b>Reflection Outcomes : </b></label>
        <input type="number" placeholder="Reflection Outcomes" name="ro" onChange={this.inputEditConvert} />

        <h2><b>Internship Marks Result Based On Internship Report</b></h2>

        <label for="cad"><b>Content and Development : </b></label>
        <input type="number" placeholder="Content and Development" name="cad" onChange={this.inputEditConvert} />
        
        <label for="oas"><b>Organization and Structure : </b></label>
        <input type="number" placeholder="Organization and Structure" name="oas" onChange={this.inputEditConvert} />
      
        <label for="f"><b>Format : </b></label>
        <input type="number" placeholder="Format" name="f" onChange={this.inputEditConvert} />

        <label for="gps"><b>Grammar, Puntuation and Spelling : </b></label>
        <input type="number" placeholder="Reflection Outcomes" name="gps" onChange={this.inputEditConvert} />

        <label for="rc"><b>References and Citations : </b></label>
        <input type="number" placeholder="References and Citations" name="rc" onChange={this.inputEditConvert} />

        <button className="convertbtn" onClick={this.markSheetgenerator}>Click Here To Generate</button>
      </div>


    );
  }
}

export default App;
