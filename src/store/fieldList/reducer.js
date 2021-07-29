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
    case 'FIELD_CREATE':
      return [
        ...state,
        {},
      ];

    case 'FIELD_UPDATE':
      return state;

    case 'FIELD_DELETE':
      return state;

    default:
      return state;
  }
}
