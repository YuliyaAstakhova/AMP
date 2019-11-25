import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
  }

}
