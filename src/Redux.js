
const {createStore, combineReducers} = Redux;

//creating a new claim
const createClaim = (name, amount) =>{
  return{
    type: "Create_claim",
    payload: {
      name: name,
      amount: amount
    }
  }; 
};

//for creating a new policy
const createPolicy =(name) =>{
  return{
    type: "Create_new_policy",
    payload: {
      name: name,
      amount: 50
    }
  };
};
 // for deleting a policy 
const deletePolicy =(name) =>{
  return{
    type: "Delete_Policy",
    payload: {
      name:name
    }
  };
};

//reducers in this case it all about the departments which to perform the action in action object we can check the type of the claim according to this we make decision
const claimHistory =(oldListingContent=[], action) =>{
  console.log("The value in the claim history",action,oldListingContent);
  if(action.type === "Create_claim"){
      return [...oldListingContent, action.payload];
    }
  return oldListingContent;
};
const accounting = (outofmoney = 100,action) =>{
  console.log("The values are as ",outofmoney,action);
  if(action.type ==='Create_claim'){
    return outofmoney - action.payload.amount;
  }
  else if(action.type ==='Create_new_policy'){
   return outofmoney + action.payload.amount;  
  }
 return outofmoney;
};

const Polices = (listOfPolices = [], action) =>{
  console.log("The polices are as below",listofPolices, action);
  if(action.type === 'Create_new_policy')
    {
      return [...listOfPolices, action.payload.name];
    }
  else if(action.type ==='Delete_Policy'){
    return listOfPolices.filter(policy => policy!= action.payload.name);
  }
  return listOfPolices;
}

//company Setup
const ourDepartments = combineReducers({
  accounting:accounting,
  claimHistorys: claimHistory,
  Polices: Polices
});

const store = createStore(ourDepartments);
store.dispatch(createPolicy('pakistan'));
//store.dispatch(deletePolicy('Umair'));
//store.dispatch(createPolicy("pakistan"));
store.dispatch(createClaim('pakistan',20));

console.log(store.getState());