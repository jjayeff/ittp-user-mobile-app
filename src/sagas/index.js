import watchLoanSagas from './loanSagas';
import watchTransactionSagas from './transactionSagas';

export default function* rootSaga() {
  yield [
    watchLoanSagas(),
    watchTransactionSagas(),
  ];
}
