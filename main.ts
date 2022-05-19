function bytes(s: string) {
    return new TextEncoder().encode(s);
}

setTimeout(() => {
    Deno.stdout.writeSync(bytes(`One`));
}, 1000 * 1);

setTimeout(() => {
    Deno.stdout.writeSync(bytes(`\r\x1b[K`));
    Deno.stdout.writeSync(bytes(`Two`));
}, 1000 * 2);

setTimeout(() => {
    Deno.stdout.writeSync(bytes(`\r\x1b[K`));
    Deno.stdout.writeSync(bytes(`Three`));
}, 1000 * 3);

setTimeout(() => {
    Deno.stdout.writeSync(bytes(`\r\x1b[K`));
    Deno.stdout.writeSync(bytes(`Four`));
}, 1000 * 4);
