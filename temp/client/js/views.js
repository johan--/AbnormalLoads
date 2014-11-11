angular.module('abnormalloads').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/authority.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Authority Details</div> <div class="panel-body"> <label class="control-label">Authority Name:</label> <input type="text" class="form-control" ng-model="data.name" ng-required="true"/> <label class="control-label">Address:</label> <input type="text" class="form-control" ng-model="data.address" ng-required="true"/> <label class="control-label">Postcode:</label> <input type="text" class="form-control" ng-model="data.postcode" ng-required="true"/> <label class="control-label">Phone (Office):</label> <input type="text" class="form-control" ng-model="data.phoneOffice" ng-required="true"/> <label class="control-label">Phone (Mobile):</label> <input type="text" class="form-control" ng-model="data.phoneMobile" ng-required="true"/> <label class="control-label">Phone (Other):</label> <input type="text" class="form-control" ng-model="data.phoneOther" ng-required="true"/> <label class="control-label">Email Address:</label> <input type="email" class="form-control" ng-model="data.emailAddress" ng-required="true"/> <label class="control-label">Authority Type:</label><br> <label class="control-label">Council</label><input type="radio" name="authorityType" value="Council" ng-model="data.authorityType"><br> <label class="control-label">Police</label><input type="radio" name="authorityType" value="Police" ng-model="data.authorityType"><br> <label class="control-label">Other</label><input type="radio" name="authorityType" value="Other" ng-model="data.authorityType"><br> </br> <button class="btn btn-primary" ng-click="saveAuthority()">Save</button> <button class="btn btn-primary" ng-click="deleteAuthority()">Delete</button> </div> </div> </p> <a href="/list/authorities">Back To List Of Customers</a> ');
	$templateCache.put('/views/customer.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Customer Details</div> <div class="panel-body"> <label class="control-label">Customer Code:</label> <input type="text" class="form-control" ng-model="data.customerCode" ng-pattern="/^[a-zA-Z0-9]*$/" ng-required="true"/> <label class="control-label">Haulier Name:</label> <input type="text" class="form-control" ng-model="data.haulierName" ng-required="true"/> <label class="control-label">Haulier Contact Name:</label> <input type="text" class="form-control" ng-model="data.haulierFAOContactName" ng-required="true"/> <label class="control-label">Address:</label> <input type="text" class="form-control" ng-model="data.address" ng-required="true"/> <label class="control-label">Postcode:</label> <input type="text" class="form-control" ng-model="data.postcode" ng-required="true"/> <label class="control-label">Email Address:</label> <input type="email" class="form-control" ng-model="data.emailAddress" ng-required="true"/> <label class="control-label">Tel:</label> <input type="text" class="form-control" ng-model="data.tel" ng-required="true"/> <label class="control-label">Fax:</label> <input type="text" class="form-control" ng-model="data.fax" ng-required="true"/> <label class="control-label">License:</label> <input type="text" class="form-control" ng-model="data.license" ng-required="true"/> <label class="control-label">RegNo:</label> <input type="text" class="form-control" ng-model="data.regNo" ng-required="true"/> <label class="control-label">Balance:</label> <p class="form-control-static">{{ data.balance }}</p> </div> </div> <div class="panel panel-default"> <div class="panel-heading">Pricing Levels</div> <div class="panel-body"> <table class="col-xs-12"> <thead> <tr> <th>Min</th> <th>Max</th> <th>Value</th> <th>Fixed Price</th> <th></th> </tr> </thead> <tbody id="pricinglevels"> <tr ng-repeat="a in data.pricingLevel"> <td> {{ a.min }} </td> <td> {{ a.max }} </td> <td> {{ a.value }} </td> <td> {{ a.fixedPrice }} </td> <td> <a ng-click="removePricingLevel($index)">Delete</a> </td> </tr> <tr> <td> <input id="pricinglevel_min" type="text" class="form-control" ng-model="newPricingLevel.min"> </td> <td> <input id="pricinglevel_max" type="text" class="form-control" ng-model="newPricingLevel.max"> </td> <td> <input id="pricinglevel_value" type="text" class="form-control" ng-model="newPricingLevel.value"> </td> <td> <input id="pricinglevel_fixedprice" type="text" class="form-control" ng-model="newPricingLevel.fixedPrice"> </td> <td> <button class="btn btn-primary" ng-click="addPricingLevel(newPricingLevel)">Add Pricing Level</button> </td> </tr> </tbody> </table> </div> </div> <button class="btn btn-primary" ng-click="saveCustomer()">Save</button> <button class="btn btn-primary" ng-click="deleteCustomer()">Delete</button> </div> </p> <a href="/list/customers">Back To List Of Customers</a> ');
	$templateCache.put('/views/customerlist.html', '<div class="list"> <gi-datatable items="data" options="gridOptions"></gi-datatable> <hr/> </div> <a href="/home.html">Go Back</a> ');
	$templateCache.put('/views/customerold.html', '<div class="form-horizontal"> <div class="form-group"> <label class="control-label">First name:</label> <input type="text" class="form-control" ng-model="data.firstName" ng-required="true"/> </div> <div class="form-group"> <label class="control-label">Middle name:</label> <input type="text" class="form-control" ng-model="data.middleName" ng-required="true"/> </div> <div class="form-group"> <label class="control-label">Surname:</label> <input type="text" class="form-control" ng-model="data.surname" ng-required="true"/> </div> <button class="btn btn-primary" ng-click="ok()">Save</button> </div> ');
	$templateCache.put('/views/home.html', '<div class="panel panel-default"> <div class="panel-heading">Welcome to the Abnormal Loads App</div> <div class="panel-body"> Please log in to continue... </div> </div> ');
	$templateCache.put('/views/invoice.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Invoice Details</div> <div class="panel-body"> <div class="panel panel-default"> <div class="panel-heading">Jobs</div> <div class="panel-body"> <table class="col-xs-12"> <th> Job Id </th> <th> Ref </th> <th> Price </th> <th> </th> <tr ng-repeat="a in data.jobs"> <td> {{ a.jobId }} </td> <td> {{ a.ref }} </td> <td> {{ a.price }} </td> <td> <a ng-click="removeJob($index)">Remove</a> </td> </tr> <tr> <td> <gi-select2 options="availableJobs" selection="selectedJob" field="jobId" style="width: 100%"></gi-select2> </td> <td> <button class="btn btn-primary" ng-click="addJob(selectedJob)">Add Job</button> </td> </tr> </table> </div> </div> <label class="control-label">Invoice Date:</label> <input type="text" class="form-control" is-open="false" datepicker-popup="dd/MM/yyyy" ng-model="data.date" ng-required="true" close-text="Close"/> <label class="control-label">Paid?:</label> <input type="checkbox" class="form-control" ng-model="data.paid"/> <label class="control-label">Invoice Amount:</label> <p class="form-control-static">{{ data.amount }}</p> </br> <button class="btn btn-primary" ng-click="saveInvoice()">Save</button> <button class="btn btn-primary" ng-click="deleteInvoice()">Delete</button> </div> </div> </p> <a href="/list/jobs">Back To List Of Invoices</a> ');
	$templateCache.put('/views/job.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Job Details</div> <div class="panel-body"> <div class="panel panel-default"> <div class="panel-heading">Authorities</div> <div class="panel-body"> <table class="col-xs-12"> <tr> <td> <label class="control-label">Councils:</label> </td> </tr> <tr ng-repeat="a in data.councilAuthorities"> <td> {{ a.name }} </td> <td> <a ng-click="removeAuthority($index, \'Council\')">Remove</a> </td> </tr> <tr> <td> <gi-select2 options="councilAuthorities" selection="selectedCouncilAuthority" field="name" style="width: 100%"></gi-select2> </td> <td> <button class="btn btn-primary" ng-click="addAuthority(selectedCouncilAuthority)">Add Authority</button> </td> </tr> </table> <table class="col-xs-12"> <tr> <td> <label class="control-label">Police:</label> </td> </tr> <tr ng-repeat="a in data.policeAuthorities"> <td> {{ a.name }} </td> <td> <a ng-click="removeAuthority($index, \'Police\')">Remove</a> </td> </tr> <tr> <td> <gi-select2 options="policeAuthorities" selection="selectedPoliceAuthority" field="name" style="width: 100%"></gi-select2> </td> <td> <button class="btn btn-primary" ng-click="addAuthority(selectedPoliceAuthority)">Add Authority</button> </td> </tr> </table> <table class="col-xs-12"> <tr> <td> <label class="control-label">Other:</label> </td> </tr> <tr ng-repeat="a in data.otherAuthorities"> <td> {{ a.name }} </td> <td> <a ng-click="removeAuthority($index, \'Other\')">Remove</a> </td> </tr> <tr> <td> <gi-select2 options="otherAuthorities" selection="selectedOtherAuthority" field="name" style="width: 100%"></gi-select2> </td> <td> <button class="btn btn-primary" ng-click="addAuthority(selectedOtherAuthority)">Add Authority</button> </td> </tr> </table> </div> </div> <label class="control-label">Haulier:</label> <gi-select2 options="hauliers" selection="lookups.haulier" field="haulierName" style="width: 100%"></gi-select2> <label class="control-label">Ref:</label> <input type="text" class="form-control" ng-model="data.ref" ng-required="true"/> <label class="control-label">Date From:</label> <input type="text" class="form-control" is-open="false" datepicker-popup="dd/MM/yyyy" ng-model="data.dateFrom" ng-required="true" close-text="Close"/> <label class="control-label">Date To:</label> <input type="text" class="form-control" is-open="false" datepicker-popup="dd/MM/yyyy" ng-model="data.dateTo" ng-required="true" close-text="Close"/> <label class="control-label">Address From:</label> <input type="text" class="form-control" ng-model="data.addressFrom" ng-required="true"/> <label class="control-label">Address To:</label> <input type="text" class="form-control" ng-model="data.addressTo" ng-required="true"/> <label class="control-label">Route:</label> <input type="text" class="form-control" ng-model="data.route" ng-required="true"/> <label class="control-label">Vehicle:</label> <input type="text" class="form-control" ng-model="data.vehicle" ng-required="true"/> <label class="control-label">Load:</label> <gi-select2 options="loads" selection="lookups.load" field="name" style="width: 100%"></gi-select2> <label class="control-label">Number Of Loads:</label> <input type="number" class="form-control" ng-model="data.numberOfLoads" ng-required="true"/> <label class="control-label">Return:</label> <input type="checkbox" class="form-control" ng-model="data.return"/> <label class="control-label">Reg:</label> <input type="text" class="form-control" ng-model="data.reg" ng-required="true"/> <label class="control-label">Number Of Comms:</label> <input type="number" class="form-control" ng-model="data.numberOfComms" ng-change="priceJob()" ng-required="true"/> <label class="control-label">Price: &pound;{{ data.price | number:2 }}</label> <label class="control-label" ng-show="data.vatRate> 0">VAT: &pound;{{ data.vat | number:2 }}</label> <label class="control-label">Total: &pound;{{ (data.price + data.vat) | number:2 }}</label> </br> <button class="btn btn-primary" ng-click="saveJob()">Save</button> <button class="btn btn-primary" ng-click="deleteJob()">Delete</button> </div> </div> </p> <a href="/list/jobs">Back To List Of Jobs</a> ');
	$templateCache.put('/views/list.html', '<div class="list"> <gi-datatable items="data" options="gridOptions"></gi-datatable> <button class="btn btn-primary" ng-click="add()">Add</button> <hr/> </div> </p> <a href="/home">Back To Home Page</a> ');
	$templateCache.put('/views/load.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Load Details</div> <div class="panel-body"> <label class="control-label">Load Name:</label> <input type="text" class="form-control" ng-model="data.name" ng-required="true"/> <label class="control-label">Vehicle Length:</label> <input type="text" class="form-control" ng-model="data.vehicleLength" ng-required="true"/> <label class="control-label">Front:</label> <input type="text" class="form-control" ng-model="data.front" ng-required="true"/> <label class="control-label">Rear:</label> <input type="text" class="form-control" ng-model="data.rear" ng-required="true"/> <label class="control-label">Length:</label> <input type="text" class="form-control" ng-model="data.length" ng-required="true"/> <label class="control-label">Width:</label> <input type="text" class="form-control" ng-model="data.width" ng-required="true"/> <label class="control-label">Height:</label> <input type="text" class="form-control" ng-model="data.height" ng-required="true"/> <label class="control-label">Gross Weight:</label> <input type="text" class="form-control" ng-model="data.grossWeight" ng-required="true"/> <label class="control-label">Weight 1:</label> <input type="text" class="form-control" ng-model="data.weight1" ng-required="true"/> <label class="control-label">Weight 2:</label> <input type="text" class="form-control" ng-model="data.weight2" ng-required="true"/> <label class="control-label">Weight 3:</label> <input type="text" class="form-control" ng-model="data.weight3" ng-required="true"/> <label class="control-label">Weight 4:</label> <input type="text" class="form-control" ng-model="data.weight4" ng-required="true"/> <label class="control-label">Weight 5:</label> <input type="text" class="form-control" ng-model="data.weight5" ng-required="true"/> <label class="control-label">Weight 6:</label> <input type="text" class="form-control" ng-model="data.weight6" ng-required="true"/> <label class="control-label">Weight 7:</label> <input type="text" class="form-control" ng-model="data.weight7" ng-required="true"/> <label class="control-label">Weight 8:</label> <input type="text" class="form-control" ng-model="data.weight8" ng-required="true"/> <label class="control-label">Weight 9:</label> <input type="text" class="form-control" ng-model="data.weight9" ng-required="true"/> <label class="control-label">Weight 10:</label> <input type="text" class="form-control" ng-model="data.weight10" ng-required="true"/> <label class="control-label">Space 1 to 2:</label> <input type="text" class="form-control" ng-model="data.space1to2" ng-required="true"/> <label class="control-label">Space 2 to 3:</label> <input type="text" class="form-control" ng-model="data.space2to3" ng-required="true"/> <label class="control-label">Space 3 to 4:</label> <input type="text" class="form-control" ng-model="data.space3to4" ng-required="true"/> <label class="control-label">Space 4 to 5:</label> <input type="text" class="form-control" ng-model="data.space4to5" ng-required="true"/> <label class="control-label">Space 5 to 6:</label> <input type="text" class="form-control" ng-model="data.space5to6" ng-required="true"/> <label class="control-label">Space 6 to 7:</label> <input type="text" class="form-control" ng-model="data.space6to7" ng-required="true"/> <label class="control-label">Space 7 to 8:</label> <input type="text" class="form-control" ng-model="data.space7to8" ng-required="true"/> <label class="control-label">Space 8 to 9:</label> <input type="text" class="form-control" ng-model="data.space8to9" ng-required="true"/> <label class="control-label">Space 9 to 10:</label> <input type="text" class="form-control" ng-model="data.space9to10" ng-required="true"/> <label class="control-label">Wheels 1:</label> <input type="text" class="form-control" ng-model="data.wheels1" ng-required="true"/> <label class="control-label">Wheels 2:</label> <input type="text" class="form-control" ng-model="data.wheels2" ng-required="true"/> <label class="control-label">Wheels 3:</label> <input type="text" class="form-control" ng-model="data.wheels3" ng-required="true"/> <label class="control-label">Wheels 4:</label> <input type="text" class="form-control" ng-model="data.wheels4" ng-required="true"/> <label class="control-label">Wheels 5:</label> <input type="text" class="form-control" ng-model="data.wheels5" ng-required="true"/> <label class="control-label">Wheels 6:</label> <input type="text" class="form-control" ng-model="data.wheels6" ng-required="true"/> <label class="control-label">Wheels 7:</label> <input type="text" class="form-control" ng-model="data.wheels7" ng-required="true"/> <label class="control-label">Wheels 8:</label> <input type="text" class="form-control" ng-model="data.wheels8" ng-required="true"/> <label class="control-label">Wheels 9:</label> <input type="text" class="form-control" ng-model="data.wheels9" ng-required="true"/> <label class="control-label">Wheels 10:</label> <input type="text" class="form-control" ng-model="data.wheels10" ng-required="true"/> <label class="control-label">AKA:</label> <input type="text" class="form-control" ng-model="data.aka" ng-required="true"/> </div> </div> <button class="btn btn-primary" ng-click="saveLoad()">Save</button> <button class="btn btn-primary" ng-click="deleteLoad()">Delete</button> </div> </p> <a href="/list/loads">Back To List Of Loads</a> ');
	$templateCache.put('/views/payment.html', '<div class="form-horizontal"> <div class="panel panel-default"> <div class="panel-heading">Payments Details</div> <div class="panel-body"> <div class="panel panel-default"> <div class="panel-heading">Invoices</div> <div class="panel-body"> <table class="col-xs-12"> <th>Invoice Id</th> <tr ng-repeat="a in data.invoices"> <td> {{ a.invoiceId }} </td> <td> <a ng-click="removeInvoice($index)">Remove</a> </td> </tr> <tr> <td> <gi-select2 options="availableInvoices" selection="selectedInvoice" field="invoiceId" style="width: 100%"></gi-select2> </td> <td> <button class="btn btn-primary" ng-click="addInvoice(selectedInvoice)">Add Invoice</button> </td> </tr> </table> </div> </div> <label class="control-label">Invoice Amount:</label> <input type="number" class="form-control" ng-model="data.value" ng-required="true"/> <label class="control-label">Date Payment Received:</label> <input class="form-control" is-open="false" datepicker-popup="dd/MM/yyyy" ng-model="data.date" ng-required="true" close-text="Close"/> <label class="control-label hide">VAT:</label> <input type="number" class="form-control hide" ng-model="data.vat" ng-required="true"/> <label class="control-label hide">VAT Rate:</label> <input type="number" class="form-control hide" ng-model="data.vatRate" ng-required="true"/> </br> <button class="btn btn-primary" ng-click="savePayment()">Save</button> <button class="btn btn-primary" ng-click="deletePayment()">Delete</button> </div> </div> </p> <a href="/list/payments">Back To List Of Payments</a> ');
	$templateCache.put('/views/paymentsummary.html', '<div class="invoiceheader">Abnormal Load Logistics Ltd</div> <div class="invoiceheaderaddress">36 Monks Drive, Withnell, Chorley, Lancs PR6 8SG</div> <p class="invoiceaddress">J C Gillespie Ltd</p> <p>invoicedate</p> <p>Northbank Ind Park</p> <p>Irlam</p> <p>Manchester</p> <p>M44 5BR</p> <table class="invoicetable"> <tr> <th>DATE</th> <th>REF</th> <th>ITEM</th> <th>AMOUNT</th> </tr> <tr ng-repeat="i in data.invoices"> <td>{{ i.date }}</td> <td>{{ i.ref }}</td> <td>{{ i._id }}</td> <td>{{ i.amount }}</td> </tr> <tr> <td></td> <td></td> <td>Balance Owning</td> <td></td> </table> <div> Make all cheques payable to Abnormal Load Logistics Ltd If you have any questions concerning this invoice, contact Lynn Kenmare Tel:01254 830767, Fax:01254 220494, Email Lynn@abloads.co.uk Company No: 8415197 </div> <b>THANK YOU FOR YOUR BUSINESS</b> ');
	$templateCache.put('/views/test.html', '<div class="form-horizontal"> <div class="form-group"> <label class="control-label">First name:</label> <input type="text" class="form-control" ng-model="data.firstName" ng-required="true"/> </div> <div class="form-group"> <label class="control-label">Middle name:</label> <input type="text" class="form-control" ng-model="data.middleName" ng-required="true"/> </div> <div class="form-group"> <label class="control-label">Surname:</label> <input type="text" class="form-control" ng-model="data.surname" ng-required="true"/> </div> <button class="btn btn-primary" ng-click="ok()">Save</button> </div> ');
}]);