const initialState = [
  {
    firstName: 'John 1',
    lastName: 'Smith 1',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
  },
  {
    firstName: 'John 2',
    lastName: 'Smith 2',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
  },
  {
    firstName: 'John 3',
    lastName: 'Smith 3',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
    birthday: '7.07.2007'
  }
];

export default function contactListReducer(state = initialState, action) {
  switch (action.type) {
    case 'CONTACT_CREATE':
      return [...state, action.payload];


    case 'CONTACT_UPDATE':
      return [
        ...state.map((item, index) => {
          if (index === parseInt(action.payload.id)) {
            return action.payload.contactData
          }
          return item;
        })];

    case 'CONTACT_CHANGE':
      return [
        ...state.map((item, index) => {
            if (index === parseInt(action.payload.index)) {
                return {
                  ...item,
                  [action.payload.name]: action.payload.value,
                }
            }
            return item;
        }) 
      ];

    case 'CONTACT_DELETE':
      return [
        ...state.filter(item => item !== action.payload)
      ];

    default:
      return state;
  }
}
