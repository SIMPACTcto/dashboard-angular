import {padNumber, isNumber} from './util';
import { Component, OnInit } from '@angular/core';
//import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap'

// import { NgbUkDateParserFormatter } from '../../NgbUkDateParserFormatter';
import { MemberService } from '../../core/service/member.service'
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
 
  selector: 'app-dowlinelist',
  templateUrl: './downline-list.component.html',
  styles: [`
  button.calendar, button.calendar:active {
  width: 2.75rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
  background-repeat: no-repeat;
  background-size: 23px;
  background-position: center;
  height: 35px;
}
`]
})
export class DownlineListComponent implements OnInit {
  
  public pinsdata;
  pinsdataprint;
  totalrows:number;
  tpvalue:number;
  fromDate=new Date();
  toDate=new Date();
  page:number=1
  
  planid:number=0;
  pagesize:number=10;
  shortby:string="3"
  sortingtype="desc"
  submitdata=false;
  hideprintdata=true;
  printdataloaded=false;
  rowfrom:number=0;
  rowupto:number=0;
  findparam:number=2;
  isactive:number=2;
  userid:string=""
dp2: any;

 
  onSubmit() {
    this.page=1;
    this.submitdata=true;
    this.ShowPins();
    this.printdataloaded=false;
  }

  
  constructor(private memberService:MemberService, private exportAsService:ExportAsService) {
    this.fromDate.setMonth(new Date().getMonth()-1)   
    this.onSubmit() 
  }

  // exportasconfigpdf:ExportAsConfig={
  //   type:'pdf',
  //   elementId:"tblpins"
  // }

  exportasconfigxlsx:ExportAsConfig={
    type:'xlsx',
    elementIdOrContent:"tblpins"
  }

   exporttopdf() {
  //   this.exportAsService.save(this.exportasconfigpdf,"UsedPins");
    
   }

   exporttoexcel() {
     this.exportAsService.save(this.exportasconfigxlsx,"downlinelist ("+ this.userid +")").subscribe();
    
   }

  loading:boolean=false;

  ngOnInit() {
    
  }

  togglesortingtype()
  {
    if(this.sortingtype=="desc")
      this.sortingtype="asc"
    else
      this.sortingtype="desc"
  }

  ShowPins()
  {
    this.loading=true;
    //userid,fromdate,uptodate,findparam,isactive,pagesize,page
    this.memberService.downlinelist(this.userid,this.format2(this.fromDate),this.format2(this.toDate),this.findparam,this.pagesize,this.page).then (data=>{ 
      var datax:any=data;
      this.pinsdata=datax.result;
      this.totalrows=datax.totals.tcount;
      this.tpvalue=datax.totals.tpvalue;
      
      this.rowfrom=(this.page-1)*this.pagesize+1;
      if(this.rowfrom*1+this.pagesize*1 < this.totalrows)
        this.rowupto=this.rowfrom*1+this.pagesize*1-1;
      else
        this.rowupto=this.totalrows;
      if(this.submitdata)
      {
        //this.totalrows=datax.totals.tcount;
        this.ShowPinsPrint();
       
      }
        
    })
    this.loading=false;
  }

  ShowPinsPrint()
  {
    this.memberService.downlinelist(this.userid,this.format2(this.fromDate),this.format2(this.toDate),this.findparam,this.totalrows,1).then (data=>{ 
     let datax:any=data 
      this.pinsdataprint=datax.result;
      this.submitdata=false;
      this.printdataloaded=true;
    })
  }

  

  format (date: Date): string {
    return date ? `${isNumber(date.getDate()) ? padNumber(date.getDate()) : ''}/${isNumber(date.getMonth()) ? padNumber(date.getMonth()+1) : ''}/${date.getFullYear()}` : ''
  }

  format2(date: Date): string {
    return date ? `${date.getFullYear()}-${isNumber(date.getMonth()) ? padNumber(date.getMonth()+1) : ''}-${isNumber(date.getDate()) ? padNumber(date.getDate()) : ''}` : ''
  }

  pageChanged(event: PageChangedEvent): void {
    this.page=event.page;
    this.ShowPins();
  }

  

}
