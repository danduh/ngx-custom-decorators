#WebWorker

How about to send method function to be executed in WebWorker :)

```JS
class MyClass {
    
    async getAllPrimeNumber(num) {

        (this.primesPromise(num) as unknown as Promise<any>)
            .then(console.log);

        (this.primesObs(num) as unknown as Observable<any>)
            .subscribe(console.log);

    }

    @WwThread.promise()
    primesPromise(num) {
        const sieve = [];
        const primes = [];
        let i;
        let j;

        for (i = 2; i <= num; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }

    @WwThread.observe()
    primesObs(num) {
        const sieve = [];
        const primes = [];
        let i;
        let j;

        for (i = 2; i <= num; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes.length;
    }
}

```
