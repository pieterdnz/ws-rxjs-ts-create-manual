import "@bospieter/ws-helper/styles.css";
//@ts-ignore
import { add, initBody } from "@bospieter/ws-helper";

import { Observable } from "rxjs";
import { map, take, filter } from "rxjs/operators";

initBody("rx create manual");

const o = new Observable(observable => {
  setTimeout(() => {
    observable.next("Next value");
    observable.complete();
  }, 4000);
});

o.subscribe({
  next: val => add.li(val),
  complete: () => add.li("done")
});
