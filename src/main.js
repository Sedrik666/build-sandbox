class App {
    run = async (name = 'Word') => {
        console.log(`Hello ${name}`);
    }
}

const app = new App();
app.run()
    .then(() => console.log('done'))
    .catch(() => console.log('Error'))