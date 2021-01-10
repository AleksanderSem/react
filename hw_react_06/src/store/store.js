import { combineReducers, createStore } from 'redux';
import step from './step/reducer';
import stepOneReducer from './step1/reducer';
import stepTwoReducer from './step2/reducer';
import stepThreeReducer from './step3/reducer';
import stepFourReducer from './step4/reducer';
import changeThemeReducer from './themes/reducer';

const rootReducer = combineReducers({
  step,
  userInfo: stepOneReducer,
  userAddress: stepTwoReducer,
  userAvatar: stepThreeReducer,
  password: stepFourReducer,
  theme: changeThemeReducer
})

const store = createStore(rootReducer);

store.subscribe(() => store.getState())

export default store;