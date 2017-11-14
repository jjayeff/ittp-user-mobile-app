import watchLoanSagas from './loanSagas';
import watchTransactionSagas from './transactionSagas';
import watchAuthSagas from './auth';

export default function* rootSaga() {
  yield [
    watchLoanSagas(),
    watchTransactionSagas(),
    watchAuthSagas(),
  ];
}
