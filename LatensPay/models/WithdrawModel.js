import t from 'tcomb-form-native';

export default WithDraw = t.struct({
  address: t.String,
  amount: t.String,
  type: t.String
});