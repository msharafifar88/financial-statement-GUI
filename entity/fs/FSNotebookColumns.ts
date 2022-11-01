
export class FSNotebookColumns{
    private _columnName?: string;
    private _columnTitle?: string;
    private _columnType?: ColumnType;
    private _visible ?: boolean;
    private _priority ?: number;


    constructor() {
    }

    get columnName(): string | undefined {
        return this._columnName;
    }

    set columnName(value: string | undefined) {
        this._columnName = value;
    }

    get columnTitle(): string | undefined {
        return this._columnTitle;
    }

    set columnTitle(value: string | undefined) {
        this._columnTitle = value;
    }

    get columnType(): ColumnType | undefined {
        return this._columnType;
    }

    set columnType(value: ColumnType | undefined) {
        this._columnType = value;
    }
}