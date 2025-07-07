// weekData array: one object per day with realistic personal metrics
const weekData = [
{ day: "Monday",    sleepHours: 7.5, screenTime: 6.0, mood: "Energetic", caffeineIntake: 0, focusLevel: 8 },
{ day: "Tuesday",   sleepHours: 7.0, screenTime: 8.5, mood: "Tired",     caffeineIntake: 0, focusLevel: 6 },
{ day: "Wednesday", sleepHours: 8.0, screenTime: 7.0, mood: "Productive", caffeineIntake: 0, focusLevel: 9 },
{ day: "Thursday",  sleepHours: 5.5, screenTime: 9.0, mood: "Stressed",  caffeineIntake: 0, focusLevel: 5 },
{ day: "Friday",    sleepHours: 7.0, screenTime: 5.5, mood: "Happy",     caffeineIntake: 0, focusLevel: 8 },
{ day: "Saturday",  sleepHours: 9.0, screenTime: 4.0, mood: "Relaxed",  caffeineIntake: 0, focusLevel: 7 },
{ day: "Sunday",    sleepHours: 8.5, screenTime: 4.5, mood: "Calm",     caffeineIntake: 0, focusLevel: 8 }
];

// PREDICTIONS:
// 1. I predict Thursday had the most screen time.
// 2. I predict Wednesday had the best focus level.
// 3. I predict caffeine intake will not affect focus when it’s zero every day.

function findHighestScreenTime() {
  return weekData.reduce((max, day) => day.screenTime > max.screenTime ? day : max, weekData[0]);
}

function averageSleep() {
  const total = weekData.reduce((sum, day) => sum + day.sleepHours, 0);
  return total / weekData.length;
}

function mostFrequentMood() {
  const counts = {};
  weekData.forEach(day => counts[day.mood] = (counts[day.mood] || 0) + 1);
  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

function correlateCaffeineToFocus() {
  const map = {};
  weekData.forEach(({ caffeineIntake, focusLevel }) => {
    if (!map[caffeineIntake]) map[caffeineIntake] = { total: 0, count: 0 };
    map[caffeineIntake].total += focusLevel;
    map[caffeineIntake].count += 1;
  });
  const result = {};
  for (let cups in map) {
    result[cups] = map[cups].total / map[cups].count;
  }
  return result;
}

// Example logs
console.log("Highest screen time:", findHighestScreenTime());
console.log("Average sleep:", averageSleep());
console.log("Most frequent mood:", mostFrequentMood());
console.log("Caffeine->Focus correlation:", correlateCaffeineToFocus());

