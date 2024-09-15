"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeA = void 0;
const PracticeA = () => {
    const calcFunc = (num) => {
        const total = num * 1.1;
        console.log(total);
    };
    const onClickPracticeA = () => calcFunc(1000);
    return (<div>
      <p>test</p>
      <button onClick={onClickPracticeA}>関数実行</button>
    </div>);
};
exports.PracticeA = PracticeA;
