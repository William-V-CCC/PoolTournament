export class Player {
    playerName: string;
    win: number;
    avg: number;
    loss: number;
    playerID: string;

    constructor(playerName: string, win: number, avg: number, loss: number, playerID: string) {
        this.playerName = playerName;
        this.win = win;
        this.avg = avg;
        this.loss = loss;
        this.playerID = playerID;
    }
}

// Array of players
let players: Player[] = [
    new Player("Skrtland", 90, 100, 0, "1"),
    new Player("Tasci", 100, 100, 0, "2")
];
