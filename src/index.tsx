import { NativeModules } from 'react-native';

type CappidType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Cappid } = NativeModules;

export default Cappid as CappidType;
