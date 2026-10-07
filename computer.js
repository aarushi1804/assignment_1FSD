console.log("Program started");

setTimeout(() => {
    console.log("Timer executed");
}, 1000);

// CPU-intensive loop for about 5 seconds
const start = Date.now();

while (Date.now() - start < 5000) {
    // Busy loop
}

console.log("CPU-intensive loop finished");