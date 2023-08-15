// Table();

// function Table() {
//     document.getElementById('myTable').innerHTML += /*HTML*/`
//      <tr>
//      <${tag}>Dag</${tag}>
//      <${tag}>Time</${tag}>
//      <${tag}>Minutt</${tag}>
//      <${tag}>Temperatur</${tag}>
//  </tr>
//  <tr>
//      <td>1</td>
//      <td>10</td>
//      <td>0</td>
//      <td>5</td>
//  </tr>
//  <tr>
//      <td>1</td>
//      <td>10</td>
//      <td>15</td>
//      <td>6</td>
//  </tr>
//  <tr>
//      <td>1</td>
//      <td>10</td>
//      <td>30</td>
//      <td>7</td>
//  </tr>
//  `;
// }

drawTitle('Day', 'Time', 'Minutt', 'Temperatur', 'th', 'tr');

function drawTitle(day, time, min, temp, tag, tag1) {
    document.getElementById('myTable').innerHTML += /*HTML*/`
<${tag1}>
    <${tag}>${day}</${tag}>
    <${tag}>${time}</${tag}>
    <${tag}>${min}</${tag}>
    <${tag}>${temp}</${tag}>
</${tag1}>


`;
}

drawRow1('1', '10', '0', '6', 'td', 'tr');
drawRow1('1', '10', '15', '7', 'td', 'tr');
drawRow1('1', '10', '30', '8', 'td', 'tr');
drawRow1('2', '11', '31', '8', 'td', 'tr');



function drawRow1(day, time, min, temp, tag, tag1) {
    document.getElementById('myTable').innerHTML += /*HTML*/`
    <${tag1}>
        <${tag}>${day}</${tag}>
        <${tag}>${time}</${tag}>
        <${tag}>${min}</${tag}>
        <${tag}>${temp}</${tag}>
    </${tag1}>
    `;
}

