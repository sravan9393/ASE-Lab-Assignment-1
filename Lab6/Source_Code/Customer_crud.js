const fs = require('fs');
const _ = require('lodash');
const  yargs = require('yargs');

const CustomerInfo = require('./CustomerFunction');

const customer_Id = {
    describe : 'customerId',
    demand : true,
    alias : 'Id'
}

const customer_Name = {
    describe : 'customerName',
    demand : true,
    alias : 'Name'
}

const customer_Email = {
    describe : 'customerEmail',
    demand : true,
    alias : 'Email'
}

const argv = yargs

 .command('Add','Add Customer Info',{
     customerId : customer_Id,
     customerName : customer_Name,
     customerEmail : customer_Email
 })

 .command('View','View Customer Details')

 .command(  'Read','Read a CustomerInfo', {
     customerId: customer_Id
 })

.command('Remove','Remove a CustomerInfo',{
    customerId: customer_Id
})
    .command('Update','Update a Customer',{
        customerId: customer_Id,
        customerName : customer_Name,
        customerEmail : customer_Email
    })
.help()
.argv;


var command = argv._[0];

if (command ==='Add'){
var Cust = CustomerInfo.addCustomer(argv.customerId,argv.customerName,argv.customerEmail);
if (Cust) {
    CustomerInfo.logCustomer(Cust);
}else {
    console.log("Customer already Exists");
}
}

else if (command ==='View') {
    var AllCust = CustomerInfo.getAllCust();
    console.log(`Printing ${AllCust.length} Customer(s).`);
    AllCust.forEach((Cust)=>{
        CustomerInfo.logCustomer(Cust);
    });
}

else if (command === 'Read') {
    var Cust = CustomerInfo.getCust(argv.customerId);
    if (Cust) {
        CustomerInfo.logCustomer(Cust);
    } else {
        console.log("Customer not Found");
    }
}

else if (command === 'Remove') {
    var Cust = CustomerInfo.removeCust(argv.customerId);
    if (Cust) {
        CustomerInfo.removeCust(Cust);
        console.log("Customer is deleted");
    } else {
        console.log("Customer not Found");
    }
}

else if (command === 'Update') {
    var Cust = CustomerInfo.updateCust(argv.customerId,argv.customerName,argv.customerEmail);
    if (Cust) {
        CustomerInfo.logCustomer(Cust);
    } else {
       console.log("Customer not Found");
    }
}
else {
    console.log('Lab6 assignment is working');
}
