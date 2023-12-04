function getMeetingsInfo(arr) {
  const meetings = {};

  for (const elem of arr) {
    const [day, name] = elem.split(" ");
  }

  if (!meetings.hasOwnProperty(day)) {
    meetings[day] = name;
    console.log(`Scheduled for ${day}`)
  } else {
    console.log(`Conflict on ${day}!`);
  }
  Object.keys(meetings).forEach((day => {
    console.log(`${day} -> ${meetings[day]}`);
  }));
}
