import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-champion-challenger',
  standalone: true,
  templateUrl: './champion-challenger.html',
  imports : [FormsModule]
})
export class ChampionChallenger {

  selectedChallenger = 'Challenger 1';

  challengers = ['Challenger 1', 'Challenger 2', 'Challenger 3'];

  championStats = {
    currentCases: 9760,
    currentPercentage: 60,
    lastRunQuarter: 'Quarter 1',
    totalCasesLastQuarter: 9457,
    lastQuarterRecovery: 69.25,
    lastPercentageCases: 54
  };

  challengerStats = {
    currentCases: 2440,
    currentPercentage: 20,
    lastRunQuarter: 'Quarter 1',
    totalCasesLastQuarter: 4053,
    lastQuarterRecovery: 60.33,
    lastPercentageCases: 23
  };
}
