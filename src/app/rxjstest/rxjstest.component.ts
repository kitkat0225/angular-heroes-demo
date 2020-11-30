import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjstest',
  templateUrl: './rxjstest.component.html',
  styleUrls: ['./rxjstest.component.css']
})
export class RxjstestComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {

  }

  testPromise(): void {
    const greetingPoster = new Promise((resolve, reject) => {
      console.log('Inside Promise (proof of being eager)'); // First log
      resolve('Welcome! Nice to meet you.'); 
    });

    console.log('Before calling then on Promise'); // Second log

    greetingPoster.then(res => {console.log(`Greeting from promise: ${res}`);}); // Fourth log

    console.log('After calling then on Promise (proof of being always async)'); // Third log
  }

  testObservable(): void {

    const greetingLady$ = new Observable(observer => {
      console.log('Inside Observable (proof of being lazy)'); // Second
      observer.next('Hello! I am glad to get to know you.');
      observer.complete();
    });

    console.log('Before calling subscribe on Observable'); // First

    greetingLady$.subscribe({
      next: console.log, // Third
      complete: () => console.log('End of conversation with preety lady') // Fourth
    });

    console.log('After calling subscribe on Observable (proof of being able to execute sync)');


    const tiredGreetingLady$ = new Observable(observer => {
      setTimeout(() => {
        observer.next('Hello! I am glad to get to know you.');
        observer.complete();
      }, 2000);
    });

    console.log('Before calling subscribe on Observable');

    tiredGreetingLady$.subscribe({
      next: console.log,
      complete: () => console.log('End of conversation with tired preety lady')
    });

    console.log('After calling subscribe on Observable (proof of being able to execute async)');
  }

  testObservableMultiValues(): void {
    const notifications$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('New notification');
      }, 2000);

      return () => clearInterval(interval);
    });

    const subscription = notifications$.subscribe(console.log);

    setTimeout(() => subscription.unsubscribe(), 8000);
  }

  testObservableOperator(): void {
    const notifications$ = new Observable(observer => {
      const interval = setInterval(() => {
        observer.next('New notification');
      }, 2000);

      return () => clearInterval(interval);
    });

    const enhancedNotifications$ = notifications$.pipe(
      map(message => `${message} ${new Date()}`)
    );

    const subscription = enhancedNotifications$.subscribe(console.log);

    setTimeout(() => subscription.unsubscribe(), 8000);
  }

}
