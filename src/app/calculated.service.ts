import { Injectable, Component } from '@angular/core';
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

  storedTheme: string = localStorage.getItem('theme-color');
  setTheme(theme: string) {
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }

  private readonly initialState: State = {
    numbers: ['', ''],
    operation: "",
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
            return { ...state, numbers: newNumbers };
          }
          case 'sub': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: '-',
            };
          }
          case 'add': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: '+',
            };
          }
          case 'mol': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: '*',
            };
          }
          case 'div': {
            return {
              ...state,
              numberIndex: state.numberIndex === 0 ? 1 : 0,
              operation: '/',
            };
          }
          case 'reset': {
            return {
              numbers: ['', ''],
              operation: "",
              numberIndex: 0,
              result: null
            };
          }
          case 'del': {
            if(state.result) {
              let result = state.result?.toString();
              let leng= result.length;
              let risultato = result.substr(0, leng -1);
              return {
                ...state,
                result: risultato
              }
            } else {
              let number0 = state.numbers[0].length;
              let number1 = state.numbers[1].length;
              let ris1 = state.numbers[0].substr(0, number0 - 1);
              let ris2 = state.numbers[1].substr(0, number1 - 1);
              let risultato = ris1;
              let risultato2 = ris2
              return {
                ...state,
                numbers: [risultato, risultato2]
              }
            }
          }
          case 'do': {
            let result = null;

            if (state.operation === '+') {
              result = add(+state.numbers[0], +state.numbers[1]);
            }
            if (state.operation === '-') {
              result = sub(+state.numbers[0], +state.numbers[1]);
            }
            if (state.operation === '*') {
              result = mol(+state.numbers[0], +state.numbers[1]);
            }
            if (state.operation === '/') {
              result = div(+state.numbers[0], +state.numbers[1]);
            }

            return {
              ...state,
              numberIndex: 0,
              result,
              numbers: ['', ''],
              operation: "",
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
      pluck('result')
    )
  }
}
