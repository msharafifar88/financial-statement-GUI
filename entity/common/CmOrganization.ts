export class CmOrganization {
    private _id: number;
    private _code: string;
    private _name: string;
    private _parentID: number;
    private _leaf: boolean;
    private _children: CmOrganization[] = [];

    constructor() {
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get parentID(): number {
        return this._parentID;
    }

    set parentID(value: number) {
        this._parentID = value;
    }

    get leaf(): boolean {
        return this._leaf;
    }

    set leaf(value: boolean) {
        this._leaf = value;
    }

    get fullName(): string {
        return this._name+ this._code;
    }


    get children(): CmOrganization[] {
        return this._children;
    }

    set children(value: CmOrganization[]) {
        this._children = value;
    }
}