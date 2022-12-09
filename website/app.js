class App
{
    runApplication()
    {
        let Button = document.getElementById("info & contact");
        Button.addEventListener('click', ()=>{
            alert("button werkt");
        });
    }
}

let app = new App();
app.runApplication();