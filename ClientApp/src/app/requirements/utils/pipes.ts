import { Observable, timer } from "rxjs";
import { debounce, distinctUntilChanged, take } from "rxjs/operators";

export const debouncedAndDistinct = (observable: Observable<any>) => observable.pipe(
  debounce(() => timer(1000)),
  distinctUntilChanged()
)

export const takeOne = (observable: Observable<any>) => observable.pipe(
  take(1)
)
