const generateHTML = (roster) => {
    lineup = ""
    for (let i = 0; i < roster.length; i++)
        if (roster[i].getRole() === "Manager") {
            lineup +=
            `
            <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-success text-white m-2">
                <h3>${roster[i].getName()}</h3>
                <h4>${roster[i].getRole()}</h4>
            </div>
                    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${roster[i].getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${roster[i].getEmail()}">${roster[i].getEmail()}</a></li>
            <li class="list-group-item">Office number: ${roster[i].getOfficeNumber()}</li>
        </ul>
        </div>
</div>
`       } else if (roster[i].getRole() === "Intern") {
            lineup +=
            `
            <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-success text-white m-2">
                <h3>${roster[i].getName()}</h3>
                <h4>${roster[i].getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${roster[i].getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${roster[i].getEmail()}">${roster[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${roster[i].getSchool()}</li>
            </ul>
        </div>
        </div>
`       } else if (roster[i].getRole() === "Engineer") {
            lineup +=
            `
            <div class="card m-3" style="width: 20rem;">
            <div class="card-header bg-success text-white m-2">
                <h3>${roster[i].getName()}</h3>
                <h4> ${roster[i].getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${roster[i].getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${roster[i].getEmail()}">${roster[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href = "https://github.com/${roster[i].getGitHub()}" target="_blank">${roster[i].getGitHub()}</a></li>
                </ul>
            </div>
            </div>
            `
    } return `
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
            <div class="jumbotron jumbotron-fluid bg-secondary text-white" id="jumboTron">
                <div class="container">
                    <h1 class="display-2">My Team</h1>
                </div>
            </div>
        </nav>
    </header>

    <div class="container">
        <div class="row justify-content-center">
        ${lineup}
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
}

module.exports = generateHTML;