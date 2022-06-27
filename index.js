let DATA = [
      {
        "company": 'Amazon', 
        "position": 'Senior Frontend Developer', 
        "posted": 1599715730, 
        "employment": 'Fulltime', 
        "location": 'USA', 
        "stack": ['frontend', 'HTML', 'CSS', 'JS', 'ReactJS']
    },
    {
        "company": 'Paypal', 
        "position": 'Junior FullStack Developer', 
        "posted": 1602318890, 
        "employment": 'Fulltime', 
        "location": 'Remote', 
        "stack": ['NodeJS', 'HTML', 'CSS', 'JS', 'ReactJS','Firebase']
    },
    {
        "company": 'Disney', 
        "position": 'Software Developer', 
        "posted": 1596875690, 
        "employment": 'Fulltime', 
        "location": 'USA', 
        "stack": ['HTML', 'CSS', 'JS', 'ReactJS',]
    },
];

// Goal: Add Company to an array of objects
let newCompany = {
        "company": 'Hulu', 
        "position": 'Sr. Developer', 
        "posted": 1596879988, 
        "employment": 'Parttime', 
        "location": 'USA', 
        "stack": ['HTML', 'CSS', 'JS']
    },

function create(newCompany) {
  DATA.push(newCompany);
}
console.log(newCompany);

// Goal: Get company based on company name
function read(companyName){
  // loop through the companies
  // check if that company matches the company I'm looking for
  // if it does, then we return it
  // if it does not, then move on to the next one
  for(let i = 0; i < DATA.length; i++){
    if(DATA[i].company == companyName) {
      return DATA[i];
    }
  }
}
const result = read('Disney');
console.log(result);
console.log(DATA);

function read(companyName) {
  for (let company of DATA) {
    if (company.company == companyName) {
      return company;
    }
  }
}

// Goal: Update the company
function update(companyName, key, value) {
  for (let company of DATA) {
    if (company.company == companyName) {
      company[key] = value;
      return company;
    }
  }
}

update("Paypal", "employment", "Parttime");
console.log(DATA);

// Goal: Delete the company
function deleteData(companyName) {
  for (let i = 0; i < DATA.length; i++) {
    let company = DATA[i];
    if (company.company == companyName) {
      DATA.splice(i, 1);
    }
  }
}
