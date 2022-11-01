import {CmOrganization} from "~/entity/common/CmOrganization";
import {CmFiscalyear} from "~/entity/common/CmFiscalyear";


export class FSFinancialStatement {
    private _id?: number;
    private _code?: number;
    private _name?: string;
    private _organizationID?: number;
    private _organizationName?: string;
    private _organizationCode?: string;
    private _yearID?: number;
    private _yearName?: string;
    private _yearCode?: string;

    private _organization ?:CmOrganization;
    private _year?:CmFiscalyear;


    constructor() {
    }


    get id(): number | undefined | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get code(): number | undefined {
        return this._code;
    }

    set code(value: number | undefined) {
        this._code = value;
    }

    get name(): string| undefined {
        return this._name;
    }

    set name(value: string| undefined) {
        this._name = value;
    }

    get organizationID(): number | undefined {
        return this._organizationID;
    }

    set organizationID(value: number | undefined) {
        this._organizationID = value;
    }

    get organizationName(): string| undefined {
        return this._organizationName;
    }

    set organizationName(value: string| undefined) {
        this._organizationName = value;
    }

    get organizationCode(): string| undefined {
        return this._organizationCode;
    }

    set organizationCode(value: string| undefined) {
        this._organizationCode = value;
    }

    get yearID(): number | undefined {
        return this._yearID;
    }

    set yearID(value: number | undefined) {
        this._yearID = value;
    }

    get yearName(): string| undefined {
        return this._yearName;
    }

    set yearName(value: string| undefined) {
        this._yearName = value;
    }

    get yearCode(): string| undefined {
        return this._yearCode;
    }

    set yearCode(value: string| undefined) {
        this._yearCode = value;
    }

    get organization(): CmOrganization  | undefined{
        return this._organization;
    }

    set organization(value: CmOrganization | undefined) {
        this._organization = value;
    }

    get year (): CmFiscalyear | undefined {
        return this._year;
    }

    set year(value: CmFiscalyear | undefined) {
        this._year = value;
    }
}