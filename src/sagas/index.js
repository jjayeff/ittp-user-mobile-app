import watchLoanSagas from './loanSagas';

export default function* rootSaga() {
    yield [
      watchLoanSagas(),
    ];
}
