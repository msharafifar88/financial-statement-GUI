 import {NotebookCell} from "~/entity/fs/NotebookCell";

export class NotebookRow{
    private _ID?: number;
    private _index?: number;
    private _notebookColumns?: NotebookCell[];


    constructor() {
    }


    get ID(): number | undefined {
        return this._ID;
    }

    set ID(value: number | undefined) {
        this._ID = value;
    }

    get index(): number | undefined {
        return this._index;
    }

    set index(value: number | undefined) {
        this._index = value;
    }

    get notebookColumns(): NotebookCell[] | undefined {
        return this._notebookColumns;
    }

    set notebookColumns(value: NotebookCell[] | undefined) {
        this._notebookColumns = value;
    }
}