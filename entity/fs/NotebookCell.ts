export class NotebookCell {
    private _value?: string;
    private _columnName ?: string;
    private _columnType ?: ColumnType;


    constructor() {
    }

    get value(): string | undefined {
        return this._value;
    }

    set value(value: string | undefined) {
        this._value = value;
    }

    get columnName(): string | undefined {
        return this._columnName;
    }

    set columnName(value: string | undefined) {
        this._columnName = value;
    }

    get columnType(): ColumnType | undefined {
        return this._columnType;
    }

    set columnType(value: ColumnType | undefined) {
        this._columnType = value;
    }
}