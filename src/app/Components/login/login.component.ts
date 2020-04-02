import { Component, OnInit } from "@angular/core";
import * as XLSX from 'xlsx';
declare var $: any;
var frutas = [];

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public file="Sube tu archivo";
  data: any;
  constructor() {}

  ngOnInit() {
     
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      
      wb.SheetNames.forEach((element,index) => {
        var wsname: string = wb.SheetNames[index];
        var ws: XLSX.WorkSheet = wb.Sheets[wsname];
        frutas.push(XLSX.utils.sheet_to_json(ws, {header: 1}));  
        
      });
      console.log(frutas);
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.file=wsname;
      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}));

      //Data es la variable que almacena los datos 
      console.log(this.data);

    };
    reader.readAsBinaryString(target.files[0]);
  }
}
