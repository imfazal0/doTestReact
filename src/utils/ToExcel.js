import * as XLSX from 'xlsx'
export const getExcelData = (data)=>{
    // data must be array of array 

    const ws = XLSX.utils.aoa_to_sheet(data);

    const wb = XLSX.utils.book_new(ws);

    XLSX.utils.book_append_sheet(wb , ws , "Sheet1");

    XLSX.writeFile(wb , "History.xlsx");
    



}