import { Injectable } from '@angular/core';
import { Games } from '../model/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

    private games = [];
    private game: Games;
  constructor() { }


    getgame() {
        return this.game;
    }

    setgame(data) {
        this.game = data;
    }

    getgames() {
        return this.games;
    }

    setgames(data) {
        this.games = data;
    }
}
