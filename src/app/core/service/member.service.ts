import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/x-www-form-urlencoded',
//       'Access-Control-Allow-Origin':'*'
//     })
//   };
const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin':'*'
  }),
};
@Injectable()
export class MemberService {
  apiUrl = './../api/outer.php';
  ifscurl = 'https://ifsc.razorpay.com/';
  //authurl='./../api/admin.php';
  authurl = 'https://www.dummy.com/api/admin.php';

  //private token :string=""
  constructor(private http: HttpClient, private _authServer: AuthService) {}
  token = this._authServer.getAuthorizationToken();

  async recolist() {
    let cc = [{ token: this.token }, { route: 'recolist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async dashboardsummary() {
    let cc = [{ token: this.token }, { route: 'dashboardsummary' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async userrecolist(userid: any, recid: any, page: any, pagesize: any) {
    let cc = [
      { token: this.token },
      { route: 'userrecolist' },
      [{ userid: userid, recid: recid, page: page, pagesize: pagesize }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updatereco() {
    let cc = [{ token: this.token }, { route: 'updatereco' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async planlist() {
    let cc = [{ token: this.token }, { route: 'planlist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updateplan(
    planid: any,
    enablejoinig: any,
    isactive: any,
    planvalue: any,
    basicplanvalue: any,
    directincome: any,
    pvalue: any,
    pvalue2: any,
    planname: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updateplan' },
      [
        {
          enablejoining: enablejoinig,
          isactive: isactive,
          planvalue: planvalue,
          basicplanvalue: basicplanvalue,
          directincome: directincome,
          pvalue: pvalue,
          pvalue2: pvalue2,
          planname: planname,
          planid: planid,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async allotpins(userid: any, planid: any, qty: any) {
    let cc = [
      { token: this.token },
      { route: 'allotpins' },
      [{ userid: userid, planid: planid, qty: qty }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async allotedpins(
    fromdate: any,
    uptodate: any,
    userid: any,
    planid: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'allotedpins' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          userid: userid,
          planid: planid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async usedpins(
    fromdate: any,
    uptodate: any,
    userid: any,
    planid: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'usedpins' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          userid: userid,
          planid: planid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async availablepins(userid: any, planid: any, pagesize: any, page: any) {
    let cc = [
      { token: this.token },
      { route: 'availablepins' },
      [{ userid: userid, planid: planid, pagesize: pagesize, page: page }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async kyclist(
    fromdate: any,
    uptodate: any,
    userid: any,
    status: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'kyclist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          userid: userid,
          status: status,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updatekyc(rowid: any, status: any) {
    let cc = [
      { token: this.token },
      { route: 'updatekyc' },
      [{ rowid: rowid, status: status }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newplan(
    enablejoinig: any,
    isactive: any,
    planvalue: any,
    basicplanvalue: any,
    directincome: any,
    pvalue: any,
    pvalue2: any,
    planname: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'newplan' },
      [
        {
          enablejoining: enablejoinig,
          isactive: isactive,
          planvalue: planvalue,
          basicplanvalue: basicplanvalue,
          directincome: directincome,
          pvalue: pvalue,
          pvalue2: pvalue2,
          planname: planname,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async reasesallary(rowid: any) {
    let cc = [
      { token: this.token },
      { route: 'releasesllary' },
      [{ rowid: rowid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminstock() {
    let cc = [{ token: this.token }, { route: 'adminstock' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async resellerstock() {
    let cc = [{ token: this.token }, { route: 'resellerstock' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async upgradetofranchise(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'upgradetofranchise' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async upgradeplan(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'upgradeplan' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updateprofile(
    sid: any,
    userid: any,
    name: any,
    aadhar: any,
    mobile: any,
    pan: any,
    ifsc: any,
    acno: any,
    password: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updateprofile' },
      [
        {
          sid: sid,
          userid: userid,
          name: name,
          aadhar: aadhar,
          mobile: mobile,
          pan: pan,
          ifsc: ifsc,
          acno: acno,
          password: password,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updateaccount(userid: any, ifsc: any, acno: any) {
    let cc = [
      { token: this.token },
      { route: 'updateaccount' },
      [{ userid: userid, ifsc: ifsc, acno: acno }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async upgradetobooster(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'upgradetobooster' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminstockdetail(productid: any) {
    let cc = [
      { token: this.token },
      { route: 'adminstockdetail' },
      [{ productid: productid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async activateuser(userid: any, planid: any) {
    let cc = [
      { token: this.token },
      { route: 'activateuser' },
      [{ userid: userid, planid: planid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async changeuserplan(userid: any, planid: any) {
    let cc = [
      { token: this.token },
      { route: 'changeuserplan' },
      [{ userid: userid, planid: planid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async purchaseinvoicelist(
    fromdate: any,
    uptodate: any,
    username: any,
    saletype: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'adminpurchaseinvoicelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          username: username,
          saletype: saletype,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async saleinvoicelist(
    fromdate: any,
    uptodate: any,
    invoiceby: any,
    userid: any,
    saletype: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'adminsaleinvoicelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          invoiceby: invoiceby,
          userid: userid,
          saletype: saletype,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async saleinvoicedetail(invoiceid: any) {
    let cc = [
      { token: this.token },
      { route: 'saleinvoicedetail' },
      [{ invoiceid: invoiceid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  //uploadedevents
  //parameters -
  async uploadedevents(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'uploadedevents' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async getuserdetail(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'getuserdetail' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  //eventphotlist
  // parameters - $eventid
  async eventphotlist(eventid: any) {
    let cc = [
      { token: this.token },
      { route: 'eventphotlist' },
      [{ eventid: eventid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async purchaseinvoicedetail(invoiceid: any, pagesize: any, page: any) {
    let cc = [
      { token: this.token },
      { route: 'adminpurchaseinvoicedetail' },
      [{ invoiceid: invoiceid, pagesize: pagesize, page: page }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminstocklistproductwise(productid: any, pagesize: any, page: any) {
    let cc = [
      { token: this.token },
      { route: 'adminstocklistproductwise' },
      [{ productid: productid, pagesize: pagesize, page: page }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newsale(userid: any, productlist: any, saletype: any) {
    let cc = [
      { token: this.token },
      { route: 'newsale' },
      [{ userid: userid, productlist: productlist, saletype: saletype }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newretailersale(userid: any, productlist: any, saletype: any) {
    let cc = [
      { token: this.token },
      { route: 'newretailersale' },
      [{ userid: userid, productlist: productlist, saletype: saletype }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newpurchase(userid: any, productlist: any, saletype: any) {
    let cc = [
      { token: this.token },
      { route: 'newpurchase' },
      [{ supplierid: userid, productlist: productlist, saletype: saletype }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async banklist(minamt: any) {
    let cc = [
      { token: this.token },
      { route: 'banklist' },
      [{ minamt: minamt }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async tdslist(
    fromdate: any,
    uptodate: any,
    tds: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'tdslist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          tds: tds,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async paidbanklist(paiddate: any) {
    let cc = [
      { token: this.token },
      { route: 'paidbanklist' },
      [{ paiddate: paiddate }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async paiddatebanklist() {
    let cc = [{ token: this.token }, { route: 'paiddatebanklist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async cashbacklist(minamt: any) {
    let cc = [
      { token: this.token },
      { route: 'cashbacklist' },
      [{ minamt: minamt }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async paidcashbacklist(paiddate: any) {
    let cc = [
      { token: this.token },
      { route: 'paidcashbacklist' },
      [{ paiddate: paiddate }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async paiddatecashbacklist() {
    let cc = [{ token: this.token }, { route: 'paiddatecashbacklist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async retataileraccountsummary(minamt: any) {
    let cc = [
      { token: this.token },
      { route: 'retataileraccountsummary' },
      [{ minamt: minamt }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async useraccountdetail(
    userid: any,
    fromdate: any,
    uptodate: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'useraccountdetail' },
      [
        {
          userid: userid,
          fromdate: fromdate,
          uptodate: uptodate,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async retaileraccountdetail(
    userid: any,
    fromdate: any,
    uptodate: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'retaileraccountdetail' },
      [
        {
          userid: userid,
          fromdate: fromdate,
          uptodate: uptodate,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminaccountdetail(
    userid: any,
    fromdate: any,
    uptodate: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'adminaccountdetail' },
      [
        {
          userid: userid,
          fromdate: fromdate,
          uptodate: uptodate,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async addadminaccountentry(amount: any, camount: any, remarks: any) {
    let cc = [
      { token: this.token },
      { route: 'addadminaccountentry' },
      [{ amount: amount, camount: camount, remarks: remarks }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adduseraccountentry(
    userid: any,
    amount: any,
    camount: any,
    remarks: any,
    payment_type: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'adduseraccountentry' },
      [
        {
          userid: userid,
          amount: amount,
          camount: camount,
          remarks: remarks,
          sendsms: '1',
          payment_type: payment_type,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async addcashbackaccountentry(
    userid: any,
    amount: any,
    camount: any,
    remarks: any,
    payment_type: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'addcashbackaccountentry' },
      [
        {
          userid: userid,
          amount: amount,
          camount: camount,
          remarks: remarks,
          sendsms: '1',
          payment_type: payment_type,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async addretaileraccountentry(
    userid: any,
    amount: any,
    camount: any,
    remarks: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'addretaileraccountentry' },
      [{ userid: userid, amount: amount, camount: camount, remarks: remarks }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newbonanza(bonanzaname: any, from: any, upto: any) {
    let cc = [
      { token: this.token },
      { route: 'newbonanza' },
      [{ bonanzaname: bonanzaname, from: from, upto: upto }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updatebonanza(bonanzaid: any, bonanzaname: any, from: any, upto: any) {
    let cc = [
      { token: this.token },
      { route: 'updatebonanza' },
      [
        {
          bonanzaid: bonanzaid,
          bonanzaname: bonanzaname,
          from: from,
          upto: upto,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async deletebonanza(bonanzaid: any) {
    let cc = [
      { token: this.token },
      { route: 'deletebonanza' },
      [{ bonanzaid: bonanzaid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async bonanzaachievers(rewarditemid: any) {
    let cc = [
      { token: this.token },
      { route: 'bonanzaachievers' },
      [{ rowid: rewarditemid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async rewardachievers(
    rewardid: any,
    userid: any,
    paidstatus: any,
    page: any,
    pagesize: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'rewardachievers' },
      [
        {
          rewardid: rewardid,
          auserid: userid,
          paidstatus: paidstatus,
          page: page,
          pagesize: pagesize,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updaterewardstatus(rowid: any) {
    let cc = [
      { token: this.token },
      { route: 'updaterewardstatus' },
      [{ rowid: rowid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newreward(
    bonanzaname: any,
    left: any,
    right: any,
    ctime: any,
    dbonanzaid: any,
    dcount: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'newreward' },
      [
        {
          bonanzaname: bonanzaname,
          left: left,
          right: right,
          ctime: ctime,
          dbonanzaid: dbonanzaid,
          dcount: dcount,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updatereward(
    bonanzaid: any,
    bonanzaname: any,
    left: any,
    right: any,
    ctime: any,
    dbonanzaid: any,
    dcount: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updatereward' },
      [
        {
          bonanzaid: bonanzaid,
          bonanzaname: bonanzaname,
          left: left,
          right: right,
          ctime: ctime,
          dbonanzaid: dbonanzaid,
          dcount: dcount,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async deletereward(bonanzaid: any) {
    let cc = [
      { token: this.token },
      { route: 'deletereward' },
      [{ bonanzaid: bonanzaid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async newbonanzagift(
    bonanzaid: any,
    name: any,
    leftbv: any,
    rightbv: any,
    leftiv: any,
    rightiv: any,
    recoid: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'newbonanzagift' },
      [
        {
          bonanzaid: bonanzaid,
          name: name,
          leftbv: leftbv,
          rightbv: rightbv,
          leftiv: leftiv,
          rightiv: rightiv,
          recoid: recoid,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updatebonanzagift(
    rowid: any,
    bonanzaid: any,
    name: any,
    leftbv: any,
    rightbv: any,
    leftiv: any,
    rightiv: any,
    recoid: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updatebonanzagift' },
      [
        {
          rowid: rowid,
          bonanzaid: bonanzaid,
          name: name,
          leftbv: leftbv,
          rightbv: rightbv,
          leftiv: leftiv,
          rightiv: rightiv,
          recoid: recoid,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async deletebonanzagift(rowid: any) {
    let cc = [
      { token: this.token },
      { route: 'deletebonanzagift' },
      [{ rowid: rowid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async bonanzalist() {
    {
      let cc = [{ token: this.token }, { route: 'bonanzalist' }];
      return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    }
  }

  async rewardlist() {
    {
      let cc = [{ token: this.token }, { route: 'rewardlist' }];
      return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    }
  }

  async bonanzagiftlist(rowid: any) {
    {
      let cc = [
        { token: this.token },
        { route: 'bonanzagiftlist' },
        [{ bonanzaid: rowid }],
      ];
      return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    }
  }

  async memberslist(
    fromdate: any,
    uptodate: any,
    sortby: any,
    search: any,
    isfranchise: any,
    planid: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'memberslist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          sortby: sortby,
          search: search,
          isfranchise: isfranchise,
          planid: planid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async autopoollist(pagesize: any, page: any) {
    let cc = [
      { token: this.token },
      { route: 'autopoollist' },
      [{ pagesize: pagesize, page: page }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async addtoautopool(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'addtoautopool' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async activatedlist(
    fromdate: any,
    uptodate: any,
    search: any,
    planid: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'activatedlist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          search: search,
          planid: planid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async sponsordetail(userid: any) {
    let cc = [
      { token: this.token },
      { route: 'sponsordetail' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async userproducts(userid: string) {
    let cc = [
      { token: this.token },
      { route: 'userproducts' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updateuserproducts(
    userid: string,
    status: any,
    remarks: any,
    productname: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updateuserproducts' },
      [
        {
          userid: userid,
          status: status,
          remarks: remarks,
          productname: productname,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async downlinelist(
    userid: any,
    fromdate: any,
    uptodate: any,
    findparam: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'downlinelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          findparam: findparam,
          userid: userid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async golddownlinelist(
    userid: any,
    fromdate: any,
    uptodate: any,
    findparam: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'golddownlinelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          findparam: findparam,
          userid: userid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async platinumdownlinelist(
    userid: any,
    fromdate: any,
    uptodate: any,
    findparam: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'platinumdownlinelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          findparam: findparam,
          userid: userid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async diamonddownlinelist(
    userid: any,
    fromdate: any,
    uptodate: any,
    findparam: any,
    pagesize: any,
    page: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'diamonddownlinelist' },
      [
        {
          fromdate: fromdate,
          uptodate: uptodate,
          findparam: findparam,
          userid: userid,
          pagesize: pagesize,
          page: page,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async activate(userid: string, planid: number) {
    let cc = [
      { token: this.token },
      { route: 'activateuser' },
      [{ userid: userid, planid: planid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async deactivate(userid: string) {
    let cc = [
      { token: this.token },
      { route: 'deactivateuser' },
      [{ userid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async activateduserlist(fromdate: any, uptodate: any, user: any) {
    let cc = [
      { token: this.token },
      { route: 'activateuser' },
      [{ fromdate: fromdate, uptodate: uptodate, username: user }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async changepassword(oldpwd: string, newpwd: string) {
    var base64string = btoa(oldpwd + ':' + newpwd);
    let cc = [
      { token: this.token },
      { route: 'changepassword' },
      [{ data: base64string }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminrights() {
    let cc = [{ token: this.token }, { route: 'adminrights' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async adminusers() {
    let cc = [{ token: this.token }, { route: 'adminusers' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async updateadminusers(
    username: any,
    password: any,
    islockedout: any,
    isadmin: any
  ) {
    let cc = [
      { token: this.token },
      { route: 'updateadminusers' },
      [
        {
          username: username,
          password: password,
          islockedout: islockedout,
          isadmin: isadmin,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async insertadminusers(username: any, password: any, isadmin: any) {
    let cc = [
      { token: this.token },
      { route: 'newadminuser' },
      [{ username: username, password: password, isadmin: isadmin }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async payoutlist() {
    let cc = [{ token: this.token }, { route: 'payoutlist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async payoutsummary(payoutid: any) {
    let cc = [
      { token: this.token },
      { route: 'payoutsummary' },
      [{ payoutid: payoutid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async binarypayout(payoutid: any, userid: any) {
    let cc = [
      { token: this.token },
      { route: 'binarypayout' },
      [{ payoutid: payoutid, auserid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async goldpayout(payoutid: any, userid: any) {
    let cc = [
      { token: this.token },
      { route: 'goldpayout' },
      [{ payoutid: payoutid, auserid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async platinumpayout(payoutid: any, userid: any) {
    let cc = [
      { token: this.token },
      { route: 'platinumpayout' },
      [{ payoutid: payoutid, auserid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async diamondpayout(payoutid: any, userid: any) {
    let cc = [
      { token: this.token },
      { route: 'diamondpayout' },
      [{ payoutid: payoutid, auserid: userid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
  }

  async addnews(newstitle: string, newsdescription: string) {
    let cc = [
      { token: this.token },
      { route: 'addnews' },
      [{ title: newstitle, newsdescription: newsdescription }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getnews() {
    return await this.http.get(this.apiUrl + '?route=news').toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getproducts() {
    return await this.http.get(this.apiUrl + '?route=products').toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getgallery() {
    return await this.http.get(this.apiUrl + '?route=gallery').toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getbanner() {
    return await this.http.get(this.apiUrl + '?route=banner').toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getgalleryphotos(galleryid: string) {
    return await this.http
      .get(this.apiUrl + '?route=galleryphotos&galleryid=' + galleryid)
      .toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getlegaldocs() {
    return await this.http.get(this.apiUrl + '?route=legaldocs').toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addgallery(newstitle: string) {
    let cc = [
      { token: this.token },
      { route: 'addgallery' },
      [{ title: newstitle }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addbanner() {
    let cc = [{ token: this.token }, { route: 'addbanner' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addgalleryphoto(newstitle: string, galleryid: number) {
    let cc = [
      { token: this.token },
      { route: 'addgalleryphoto' },
      [{ title: newstitle, galleryid: galleryid }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addlegaldoc(newstitle: string) {
    let cc = [
      { token: this.token },
      { route: 'addlegaldoc' },
      [{ title: newstitle }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addproduct(
    productname: string,
    mrp: number,
    discount: number,
    description: string
  ) {
    let cc = [
      { token: this.token },
      { route: 'addproduct' },
      [
        {
          productname: productname,
          mrp: mrp,
          discount: discount,
          description: description,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async editproduct(
    productname: string,
    mrp: number,
    discount: number,
    description: string,
    productid: number
  ) {
    let cc = [
      { token: this.token },
      { route: 'editproduct' },
      [
        {
          productid: productid,
          productname: productname,
          mrp: mrp,
          discount: discount,
          description: description,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deleteproduct(id: string) {
    let cc = [{ token: this.token }, { route: 'deleteproduct' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async supplierlist() {
    let cc = [{ token: this.token }, { route: 'supplierlist' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addsupplier(
    suppliername: string,
    gst: string,
    address: string,
    contact: string
  ) {
    let cc = [
      { token: this.token },
      { route: 'addsupplier' },
      [
        {
          suppliername: suppliername,
          gst: gst,
          address: address,
          contact: contact,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletesupplier(id: string) {
    let cc = [{ token: this.token }, { route: 'deletesupplier' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async addrepurchaseproduct(
    productname: string,
    mrp: number,
    srp: number,
    pp: number,
    bv: number,
    commission: number,
    cashback: number,
    vat: number,
    description: string
  ) {
    let cc = [
      { token: this.token },
      { route: 'addrepurchaseproduct' },
      [
        {
          productname: productname,
          mrp: mrp,
          srp: srp,
          pp: pp,
          bv: bv,
          commission: commission,
          dp: cashback,
          vat: vat,
          description: description,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async editrepurchaseproduct(
    productname: string,
    mrp: number,
    srp: number,
    pp: number,
    bv: number,
    commission: number,
    cashback: number,
    vat: number,
    description: string,
    productid: number
  ) {
    let cc = [
      { token: this.token },
      { route: 'editrepurchaseproduct' },
      [
        {
          productid: productid,
          productname: productname,
          mrp: mrp,
          srp: srp,
          pp: pp,
          bv: bv,
          commission: commission,
          dp: cashback,
          vat: vat,
          description: description,
        },
      ],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deleterepurchaseproduct(id: string) {
    let cc = [
      { token: this.token },
      { route: 'deleterepurchaseproduct' },
      [{ id: id }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async getrepurchaseproduct() {
    let cc = [{ token: this.token }, { route: 'repurchaseproduct' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async availablestock() {
    let cc = [{ token: this.token }, { route: 'availablestock' }];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletenews(id: string) {
    let cc = [{ token: this.token }, { route: 'deletenews' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletelegaldoc(id: string) {
    let cc = [{ token: this.token }, { route: 'deletelegaldoc' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletegallery(id: string) {
    let cc = [{ token: this.token }, { route: 'deletegallery' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletebanner(id: string) {
    let cc = [{ token: this.token }, { route: 'deletebanner' }, [{ id: id }]];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async deletegalleryphoto(id: string) {
    let cc = [
      { token: this.token },
      { route: 'deletegalleryphoto' },
      [{ id: id }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async searchmember(id: string) {
    let cc = [
      { token: this.token },
      { route: 'verifyuserid' },
      [{ userid: id }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  async purchasehistory(id: string) {
    let cc = [
      { token: this.token },
      { route: 'purchasehistory' },
      [{ userid: id }],
    ];
    return await this.http.post(this.authurl, cc, httpOptions).toPromise();
    //let body=`route=&address=${address}&userid=${userid}&email=${email}&password=${password}&username=${username}&token=${this.token}`;
  }

  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }
  setAuthorizationToken(token: string) {
    localStorage.clear();
    localStorage.setItem('authToken', token);
  }
  clearAuthorizationToken() {
    localStorage.clear();
  }
}
