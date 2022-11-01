import {CmFiscalyear} from '../common/CmFiscalyear';

export class FSConfiguration {
    id: number;
    code: number;
    name: string;
    startDate: Date;
    endDate: Date;
    currentFiscalyear: CmFiscalyear;
    previousFiscalyear: CmFiscalyear;
   

    constructor(id: number, code: number, name: string, startDate: Date, endDate: Date, currentFiscalyear: CmFiscalyear, previousFiscalyear: CmFiscalyear) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.currentFiscalyear = currentFiscalyear;
        this.previousFiscalyear = previousFiscalyear;
    }
}