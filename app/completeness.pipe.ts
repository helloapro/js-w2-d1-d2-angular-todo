import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: true
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], info) {
    var desiredCompleteness = info;
    var output: Task[] = [];
    console.log("info: " + info);
    if(desiredCompleteness === "notDone") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
