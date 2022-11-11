import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public allNotes = [];
  public toDetailView = [];
  constructor() {}
}
