import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, pluck, scan, shareReplay, startWith } from 'rxjs/operators';

export interface State {
  numbers: [string, string];
  operation: string | null;
  numberIndex: number;
  result: number | null;
}

export interface Action {
  type: string;
  value?: any;
}

const add = (a: number, b: number) => a + b;
const sub = (a: number, b: number) => a - b;
const mol = (a: number, b: number) => a * b;
const div = (a: number, b: number) => a / b;

@Injectable({
  providedIn: 'root'
})
export class CalculatedService {
  results: any;

  storedTheme: string = localStorage.getItem('theme-color');
  setTheme(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }

  private readonly initialState: State = {
    numbers: ['', ''],
    operation: null,
    numberIndex: 0,
    result: null,
  };

  private readonly actionsBS: Subject<Action> = new Subject();
  public readonly state$: Observable<State>;

  constructor() {
    this.state$ = this.actionsBS.pipe(
      scan<Action, State>((state, action) => {
        switch (action.type) {
          case 'addNumber': {
            const newNumbers = state.numbers;
            newNumbers[state.numberIndex] = newNumbers[state.numberIndex] + action.value;
            this.results = newNumbers[state.numberIndex];
            return { ...state, numbers: newNumbers };
          }
          case 'sub': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: 'sub',
            };
          }
          case 'add': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: 'add',
            };
          }
          case 'mol': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: 'mol',
            };
          }
          case 'div': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: 'div',
            };
          }
          case 'reset': {
            return this.initialState;
          }
          case 'do': {
            let result = null;

            if (state.operation === 'add') {
              result = add(+state.numbers[0], +state.numbers[1]);
              this.results = result;
            }
            if (state.operation === 'sub') {
              result = sub(+state.numbers[0], +state.numbers[1]);
              this.results = result;
            }
            if (state.operation === 'mol') {
              result = mol(+state.numbers[0], +state.numbers[1]);
              this.results = result;
            }
            if (state.operation === 'div') {
              result = div(+state.numbers[0], +state.numbers[1]);
              this.results = result;
            }

            return {
              ...state,
              numberIndex: 0,
              result,
              numbers: ['', ''],
              operation: null,
            };
          }
          default: {
            return state;
          }
        }
      }, this.initialState),
      startWith(this.initialState),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  addNumber(action: Action) {
    this.actionsBS.next(action);
  }
  doOperation(action: Action) {
    this.actionsBS.next(action);
  }
  getResult() {
    return this.state$.pipe(
      pluck('result'),
      distinctUntilChanged()
    )
  }
  reset() {

  }

}
