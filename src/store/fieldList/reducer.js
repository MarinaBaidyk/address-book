import * as actionTypes from "../fieldList/actionTypes"

const initialState = [
  {
    name: 'firstName',
    displayName: 'Имя',
    display: true,
  },
  {
    name: 'lastName',
    displayName: 'Фамилия',
    display: true,
  },
  {
    name: 'phone',
    displayName: 'Телефон',
    display: false,
  },
  {
    name: 'email',
    displayName: 'Электронная почта',
    display: false,
  },
  {
    name: 'birthday',
    displayName: 'День рождение',
    display: true,
  },
];

export default function fieldListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FIELD_CREATE:
      return [
        ...state,
        {...action.payload},
      ];

    case actionTypes.FIELD_UPDATE:
      return [
        ...state.map((item, index) => {
          if(index === parseInt(action.payload.id)){
            return action.payload.value
          }
          return item;
        })    
      ];

    case actionTypes.FIELD_DELETE:
      return [
        ...state.filter(item => item !== action.payload)
    ];

    default:
      return state;
  }
}
