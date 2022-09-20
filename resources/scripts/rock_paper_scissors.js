class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
      function getRandomInt(rock, paper, scissors) {
        rock = Math.ceil(0);
        paper = Math.floor(1);
        scissors = Math.floor(2);
      return Math.floor(Math.random() ,acceptedValue); // The maximum is exclusive and the minimum is inclusive
    }
    return ;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (cpuSelection = scissors && (userSelection = rock)) {
      value = "Win!";
    } else if (cpuSelection = rock && (userSelection = paper)){
      value = "Win!";
    } else if (cpuSelection = paper && (userSelection = scissors)){
      value = "Win!";
    } else if (cpuSelection = userSelection){
      value = "Tie!";
    } else if (cpuSelection = rock && (userSelection = scissors)){
      value = "Lose!";
    } else if (cpuSelection = paper && (userSelection = rock)){
      value = "Lose!";
    } else if (cpuSelection = scissors && (userSelection = paper)){
      value = "Lose!";
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
        // if the user won the round
        this.score.user ++;
        // if the user cpu the round
        this.score.cpu ++;
        this.gameHistoryLog.push(username + 'selected' + acceptedValues, 'CPU selected' + acceptedValues + ':' + username + value);
  }

}