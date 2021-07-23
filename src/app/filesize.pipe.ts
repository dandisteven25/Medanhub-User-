import { Pipe, PipeTransform } from '@angular/core';

let SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
let SIZE_UNITS_LARGE = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(sizeBytes: number, sizeForm: boolean): string {

    let sizeUnits = sizeForm ? SIZE_UNITS_LARGE : SIZE_UNITS;

    let sizeRoundVal = Math.round(Math.log(sizeBytes)/Math.log(1024));
  	sizeRoundVal = Math.min(sizeRoundVal, sizeUnits.length - 1);
  	let size = sizeBytes / Math.pow(1024, sizeRoundVal);
  	let sizeFormat = Math.round(size * 100) / 100;
  	let sizeUnit = sizeUnits[sizeRoundVal];

  	return `${sizeFormat} ${sizeUnit}`;
  }

}
