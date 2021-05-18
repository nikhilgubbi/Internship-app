module.exports = ({ usn,studentname, project, company, evalu, sem, sec, dat, certificateId, opd, ijd, sd, opad, ro, cad, oas, f, gps, rc }) => {
    const today = new Date();
    return `
   <html lang="en">

   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   
   <body>
       <div style="width:700px; height:1050px; padding:20px; text-align:center; border: 10px solid #787878">
           <div style="width:650px; height:1000px; padding:20px; text-align:center; border: 5px solid #787878">
               <span style="font-size:16px;">||JAI SRI GURUDEV||</span><br />
               <span style="font-size:19px; font-weight:bold">S J C Institute of Technology</span><br />
               <span style="font-size:19px;">Chikkballapur-562101</span><br /> 
               <span style="font-size:19px;">Department of  Computer Science and Engineering</span><br />
               <span style="font-size:19px;">2020-2021</span><br />
               <img src="https://www.sjcit.ac.in/wp-content/uploads/2020/08/Artboard-2-2-150x150.png" alt="SJCIT" style="  display: block;margin-left: auto;margin-right: auto;width: 50%;width:100px;height:100px;">
               <span style="font-size:30px; font-weight:bold">Internship Marks sheet</span><br /><br/>
               <span style="font-size:20px; font-weight:bold">${usn}</span><br />
               <span style="font-size:20px;text-align: left;">Student Name: ${studentname}</span><br/>
               <span style="font-size:20px;text-align: justify;">Project Title: ${project}</span><br/>
               <span style="font-size:20px;text-align: justify;">Company Name: ${company}</span><br/>
               <span style="font-size:20px;text-align: justify;">Guide Name: ${evalu}</span><br/>
               <span style="font-size:20px;text-align: justify;">Semester: ${sem}</span><br/>
               <span style="font-size:20px;text-align: justify;">Section: ${sec}</span><br/>
               <span style="font-size:20px;text-align: justify;">Date: ${dat}</span>
   
               <table align="center" border="12">
                   <TR>
                       <TD width="500">Marksheet number:</TD>
                       <TD>
                           <FONT face="arial" id="demoins"></FONT>${certificateId}
                       </TD>
                   </TR>
   
                   </TR>
                   <TR>
                       <TH colspan="7" width="240"> Internship Marks Based on Presentation </TH>
                   </TR>
                   <TR>
                       <TD width="500">Organization Program Description:</TD>
                       <TD>
                           <FONT face="arial" id="opda"></FONT>${opd}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Internship Job Description:</TD>
                       <TD>
                           <FONT face="arial" id="ijda"></FONT>${ijd}
                       </TD>
                   </TR>
                   <TD width="500">Skills Developed:</TD>
                   <TD>
                       <FONT face="arial" id="sda"></FONT>${sd}
                   </TD>
                   </TR>
                   <TR>
                       <TD width="500">Oral Presentation And Defense:</TD>
                       <TD>
                           <FONT face="arial" id="opada"></FONT>${opad}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Reflection Outcomes:</TD>
                       <TD>
                           <FONT face="arial" id="roa"></FONT>${ro}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">TOTAL Marks of Presentation:</TD>
                       <TD>
                           <FONT face="arial" id="demototal">${parseInt(opd) + parseInt(ijd) +
        parseInt(sd) + parseInt(opad) + parseInt(ro)}</FONT></TT>
                       </TD>
                   </TR>                   
                   <TR>
                       <TH colspan="8" width="240"> Internship Marks Based on Presentation </TH>
                   </TR>
                   <TR>
                       <TD width="500">Content and Development:</TD>
                       <TD>
                           <FONT face="arial" id="cada"></FONT>${cad}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Organization and Structure:</TD>
                       <TD>
                           <FONT face="arial" id="oasa"></FONT>${oas}
                       </TD>
                   </TR>
                   <TD width="500">Format:</TD>
                   <TD>
                       <FONT face="arial" id="fa"></FONT>${f}
                   </TD>
                   </TR>
                   <TR>
                       <TD width="500">Grammar, Punctuation and Spelling:</TD>
                       <TD>
                           <FONT face="arial" id="gpsa"></FONT>${gps}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">References:</TD>
                       <TD>
                           <FONT face="arial" id="rca"></FONT>${rc}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">TOTAL Marks of Report:</TD>
                       <TD>
                           <FONT face="arial" id="demototal">${parseInt(cad) + parseInt(oas) +
        parseInt(f) + parseInt(gps) + parseInt(rc)}</FONT></TT>
                       </TD>
                   </TR>
                   <TR>
                       <TH colspan="2" width="240"> Internship Overall Total Marks </TH>
                   </TR>                  
                   <TR>
                       <TD width="500">Overall Total Marks:</TD>
                       <TD>
                           <FONT face="arial" id="demototal">${parseInt(opd) + parseInt(ijd) +
                            parseInt(sd) + parseInt(opad) + parseInt(ro) + parseInt(cad) + parseInt(oas) +
        parseInt(f) + parseInt(gps) + parseInt(rc)}</FONT></TT>
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Overall Total Percentage:</TD>
                       <TD>
                           <FONT face="arial" id="demoper">${((parseInt(opd) + parseInt(ijd) +
                            parseInt(sd) + parseInt(opad) + parseInt(ro) + parseInt(cad) + parseInt(oas) +
            parseInt(f) + parseInt(gps) + parseInt(rc)) / 50) * 100}%</FONT>
                       </TD>
                   </TR>
               </table>
               <span style="font-size:20px;font-weight:bold;text-align:justify;">Signature of Guide: </span><br />
               <span style="font-size:20px;font-weight:bold;text-align:justify;">Signature of Coordinator: </span><br />  
               <text>Note: Total Marks is been calculated for 50, 2-Poor, 3-Fair, 5-Excellent</text>    
           </div>
       </div>
   
   </body>
   
   </html>

    `;
};











