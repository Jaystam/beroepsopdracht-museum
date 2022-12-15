class App
{
    runApplication()
    {
        let Button = document.getElementById("info");
        Button.addEventListener('click', ()=>{
            alert("button werkt");
        });
    }
}

let app = new App();
app.runApplication();