const managerCard = (manager) => {
    return `
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-secondary mt-2 mb-3">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
        </div>
    </div>
    `;
    }
    
    const engineerCard = (engineer) => {
    return `
    <div class="card m-3" style="width: 18rem;">
    <div class="card-header text-white bg-secondary mt-2 mb-3">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href = "https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
        </ul>
    </div>
    </div>
    `;
    }
    
    const internCard = (intern) => {
    return `
    <div class="card m-3" style="width: 18rem;">
        <div class="card-header text-white bg-secondary mt-2 mb-3">
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href = "mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
    </div>
    `;
    }
    
    const outlineHTML = (allCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <nav>
                <div class="jumbotron jumbotron-fluid" id="jumboTron">
                    <div class="container">
                        <h1 class="display-2">My Team</h1>
                        <p class="lead">This is the team that makes the dream work.
                        </p>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container">
            <div class="row justify-content-center" id="cards">
            ${allCards}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"></script>
    </body>
    </html>`
    };
    
    const generateHTML = () => {
        if (teamMember.choices === "manager") {
            allCards.append(managerCard)
        } if (teamMember.choices === "intern") {
            allCards.append(internCard)
        } if (teamMember.choices === "engineer") {
            allCards.append(engineerCard)
        }
        return outlineHTML().toString;
    }
    
    module.exports = generateHTML;