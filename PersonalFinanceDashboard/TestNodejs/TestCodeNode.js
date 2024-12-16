const fs = require('fs');
const path = require('path');

/**
 * Analyzes basketball team statistics and logs a summary.
 * @param {string} filePath - Path to the JSON file containing player statistics.
 */
 
function summarizeTeamStats(filePath) {
  try {
    // Step 1: Read and parse the JSON file
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const players = JSON.parse(rawData);

    // Step 2: Initialize variables for calculations
    let totalPoints = 0;
    let totalAssists = 0;
    let totalTurnovers = 0;
    let highestRebounds = 0;
    let topRebounder = '';

    // Step 3: Process each player's statistics
    players.forEach(player => {
      const { PlayerName, Points, Assists, Rebounds, Turnovers, MinutesPlayed } = player;

      
      if (Points == null || Assists == null || Rebounds == null || Turnovers == null || MinutesPlayed == null) {
        console.warn(`Incomplete data for player: ${PlayerName}`);
        return;
      }

      totalPoints += Points;
      totalAssists += Assists;
      totalTurnovers += Turnovers;


      if (Rebounds > highestRebounds) {
        highestRebounds = Rebounds;
        topRebounder = PlayerName;
      }
    });

    // Step 4: Calculate averages
    const averageAssists = players.length ? (totalAssists / players.length).toFixed(2) : 0;

    // Step 5: Console Log the summary
    console.log('Team Statistics Summary:');
    console.log(`Total Points: ${totalPoints}`);
    console.log(`Average Assists: ${averageAssists}`);
    console.log(`Total Turnovers: ${totalTurnovers}`);
    console.log(`Top Rebounder: ${topRebounder} (${highestRebounds} rebounds)`);

  } catch (err) {
    console.err('Error processing the file:', err.message);
  }
}


// Run test
summarizeTeamStats('teamData.json');