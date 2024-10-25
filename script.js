
function submitForm()
{
    let goal = {
        'specific': document.getElementById('S').value,
        'measurable': document.getElementById('M').value,
        'attainable': document.getElementById('A').value,
        'relevant': document.getElementById('R').value,
        'time_based': document.getElementById('T').value
    };
    let formattedString = `${goal['time_based'].slice(0, -1)}, I will ${goal['specific'][0].toLowerCase() + goal['specific'].slice(1)} I will ${goal['measurable'][0].toLowerCase() + goal['measurable'].slice(1, -1)}, and I believe ${goal['attainable'][0].toLowerCase() + goal['attainable'].slice(1)} ${goal['relevant']}`;
    document.getElementById('output').innerHTML = formattedString;
}