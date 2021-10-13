import givenOffersTypes from 'redux/constants/givenOffersTypes';

const initialState = {
  givenOffers: null,
  isPending: true,
  error: null,
};

const givenOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case givenOffersTypes.FETCH_GIVEN_OFFERS_PENDING:
      return { ...state, isPending: true, givenOffers: null, error: false };
    case givenOffersTypes.FETCH_GIVEN_OFFERS_SUCCESS:
      return {
        ...state,
        isPending: false,
        givenOffers: action.payload,
        error: false,
      };
    case givenOffersTypes.FETCH_GIVEN_OFFERS_FAILURE:
      return {
        ...state,
        isPending: false,
        givenOffers: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default givenOffersReducer;
