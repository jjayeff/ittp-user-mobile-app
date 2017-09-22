export const SELECT_QUESTION = 'ittp/SELECT_QUESTION';

export const selectQuestion = (questionId) => ({
  type: SELECT_QUESTION,
  payload: questionId
});

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_QUESTION:
      return action.payload;
    default:
      return state;
  }
};
