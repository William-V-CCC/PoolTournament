
export class Game {
    gameType: GameType;
    solidPlayerID: string;
    stripesPlayerID: string;
    gameID: string;

    constructor(gameType: GameType, solidPlayerID: string, stripesPlayerID: string, gameID: string) {
        this.gameType = gameType;
        this.solidPlayerID = solidPlayerID;
        this.stripesPlayerID = stripesPlayerID;
        this.gameID = gameID;
    }
}


enum GameType{
    NORMAL,
    EIGHTBALL,
    NINEBALL
}
const games: Game[] = [
    new Game(GameType.NORMAL, "1","2","1"),
    new Game(GameType.NINEBALL, "2","1","2")
]