class App {
    run = (name = 'Word') => {
        console.log(`Hello ${name}`);
    }
}

const app = new App();
app.run();