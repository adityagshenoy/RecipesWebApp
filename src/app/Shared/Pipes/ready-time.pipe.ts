import { Pipe, PipeTransform } from '@angular/core';
import { strict } from 'assert';
import { stringify } from 'querystring';
import { read } from 'fs';

@Pipe({
  name: 'readyTime'
})
export class ReadyTimePipe implements PipeTransform {

  transform(readyinmnutes: number, ...args: unknown[]): string {

    var retstring:string;
    let hours:number;
    hours = Math.floor(readyinmnutes / 60);
    
let minutes = readyinmnutes %60;
if(readyinmnutes==0)
{retstring="Not Available"}
else if(hours ==0)
{
  retstring = String(minutes);
}
else{
  retstring = String(hours) + "hours " + minutes + "minutes";
}
    return retstring;
  }

}
