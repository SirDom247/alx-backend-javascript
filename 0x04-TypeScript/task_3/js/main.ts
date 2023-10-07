
import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
  firstName: 'Samuel',
  lastName: 'Udousoro',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 28;
const updatedRow: RowElement = row;

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
