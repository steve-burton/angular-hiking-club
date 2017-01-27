import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'milesHiked',
  pure: false
})
export class MilesHikedPipe implements PipeTransform {

  transform(input: Member[], desiredMiles: number) {
    var output: Member[]=[];
    if(!desiredMiles) {
      return input;
    } else {
      for(var i = 0; i < input.length; i++) {
        if(input[i].miles >= desiredMiles) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
