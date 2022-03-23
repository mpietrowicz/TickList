export class TickModel {
  constructor(name_tick: string, description_conent: string) {
    this.name = name_tick;
    this.description = description_conent;
  }
  name: string | undefined;
  description : string  | undefined;
}
