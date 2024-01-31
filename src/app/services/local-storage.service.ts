import { Injectable, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  private localStorageKey = 'player';
  constructor() {
    if (!this.getPlayer()) {
      const defaultPlayer: Player = new Player(1, 'Joueur par défaut', 0);
      this.setPlayer(defaultPlayer);
    }
  }
  clearLocalStorage(): void {
    localStorage.clear();
  }

  setPlayer(player: Player): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(player));
  }

  getPlayer(): Player | null {
    const playerJson = localStorage.getItem(this.localStorageKey);
    return playerJson ? JSON.parse(playerJson) : null;
  }

  getPlayerPoints(): number {
    const player = this.getPlayer();
    return player ? player.point : 0;
  }

  gagnePoints(pointsToAdd: number): void {
    const player = this.getPlayer();
    if (player) {
      player.point += pointsToAdd;
      this.setPlayer(player);
    }
  }

  perdrePoints(pointsToSubtract: number): void {
    const player = this.getPlayer();
    if (player) {
      const newPoints = Math.max(0, player.point - pointsToSubtract);

      player.point = newPoints;
      this.setPlayer(player);
    }
  }

  resetPoints(): void {
    const player = this.getPlayer();
    if (player) {
      player.point = 0;
      this.setPlayer(player);
    }
  }
}