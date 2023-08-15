 drawForm();

 function drawForm() {
 document.body.innerHTML += /*HTML*/`
 <label for="fname">First name:</label><br/>
 <input type="text" id="fname"><br/>
 <label for="lname">Last name:</label><br/>
 <input type="text" id="lname"><br/>
 <label for="zero2hundred">En til hundre:</label><br/>
 <input type="range" min="1" max="100" step="1" id="zero2hundred"><br/>
 <label for="number">Skriv inn et tall:</label><br/>
 <input type="number" id="number"><br/>
 <input type="radio" id="html" name="fav_language" value="HTML">
 <label for="html">HTML</label><br/>
 <input type="radio" id="css" name="fav_language" value="CSS">
 <label for="css">CSS</label><br>
 <input type="radio" id="javascript" name="fav_language" value="JavaScript">
 <label for="javascript">JavaScript</label><br/>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
 <label for="vehicle1"> I have a bike</label><br/>
 <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
 <label for="vehicle2"> I have a car</label><br/>
 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
 <label for="vehicle3"> I have a boat</label><br/>
 `; 
 }