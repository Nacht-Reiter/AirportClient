export class FlightModel {
    id : number;
    entryPoint : string;
    departureTime : Date;
    destination : string;
    arrivalTime : Date;
    ticketsId : number[] = [];
}
