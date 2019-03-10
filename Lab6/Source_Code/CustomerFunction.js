
const fs =  require('fs');

var fetchCust = () => {
    try {
        var CustomersString = fs.readFileSync('Customers-data.json')
        return JSON.parse(CustomersString);
    } catch(e){
        return [];
    }
};

var saveCustomers = (CustomerInfo) => {
    fs.writeFileSync('Customers-data.json',JSON.stringify(CustomerInfo));
};


var addCustomer = (customerId,customerName,customerEmail) => {
    var CustomerInfo = fetchCust();
    var Cust = {customerId,customerName,customerEmail}

    var duplicateCust =  CustomerInfo.filter((Cust) => {
        return Cust.customerId === customerId;
    });

    if (duplicateCust.length === 0){
        CustomerInfo.push(Cust);
        saveCustomers(CustomerInfo);
        return Cust
    }

};


var getAllCust = () => {
    return fetchCust();
};


var getCust = (customerId) => {

    var CustomerInfo = fetchCust();

    var getCustomers =  CustomerInfo.filter((Cust) => {
        return Cust.customerId === customerId;
    });

    return getCustomers[0]

};


var removeCust = (customerId) => {

    var CustomerInfo = fetchCust();

    var filteredCust =  CustomerInfo.filter((Cust) => {
        return Cust.customerId !== customerId;
    });

    saveCustomers(filteredCust);

    return CustomerInfo.length !== filteredCust.length

};


var updateCust = (customerId,customerName,customerEmail) => {

    var CustomerInfo = fetchCust();
    var Cust = {customerId,customerName,customerEmail}

    var filteredCust = CustomerInfo.filter((Cust) => {
        return Cust.customerId !== customerId;
    });

    if ( CustomerInfo.length !== filteredCust.length ) {
        filteredCust.push(Cust);
        saveCustomers(filteredCust);
        return Cust;
    }
};



var logCustomer = (Cust) => {
    console.log('--');
    console.log(`Customer_Id: ${Cust.customerId}`);
    console.log(`Customer_Name: ${Cust.customerName}`);
    console.log(`Customer_Email: ${Cust.customerEmail}`);

};


module.exports = {
    addCustomer, getAllCust, removeCust, getCust,logCustomer,updateCust
};
