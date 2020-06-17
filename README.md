# ricardogaefke-www

This is a simple example of ASP.NET Core + SSR React + NGINX WebApp using an Azure Linux docker-compose WebApp.

|Build status|Release status|
|---|---|
|[![Build Status](https://dev.azure.com/ricardogaefke/ricardogaefke-www/_apis/build/status/ricardogaefke-www)](https://dev.azure.com/ricardogaefke/ricardogaefke-www/_build?definitionId=31)|[(https://vsrm.dev.azure.com/ricardogaefke/_apis/public/Release/badge/473b0ccf-b380-409c-b457-5db0d7566ff8/1/1)](https://dev.azure.com/ricardogaefke/ricardogaefke-www/_release?_a=releases&view=mine&definitionId=1)|

## How it works

This could be your WebApp/website with incredible performance and really low cost.

* [WebJobs example - convert XML to JSON](https://webjobs.ricardogaefke.com/) - WebJobs example - convert XML to JSON
* [WebJobs example - generate PDF certificate](https://pdf.ricardogaefke.com/) - WebJobs example - generate PDF certificate

## GitHub Integration

The repo of this example is public and can be found [https://ricardogaefke.com/](https://ricardogaefke.com/).

## Azure Pipelines

This application is automatically built, tested and deployed by Azure Pipelines. Each git push to `master` or to a PR is built and tested by Azure Pipelines. If the build of `master` branch is ok the Release takes place and updates the app using Docker integration.

This is the public [Azure Pipeline](https://dev.azure.com/ricardogaefke/ricardogaefke-www).

## Docker Registry

The containers of this app are registered in a public repo and can be found at [docker/ricardogaefke/ricardogaefke-www](https://hub.docker.com/r/ricardogaefke/ricardogaefke-www).


## Tech summary:

* [ASP.NET Core](https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-3.1) - High-performance, open-source , multi-format framework for building modern Internet-connected and cloud-based applications.
* [Azure](https://docs.microsoft.com/pt-br/azure/) - A cloud plataform.
* [Azure Pipelines](https://docs.microsoft.com/pt-br/azure/devops/pipelines/?view=azure-devops) - Implement continuous integration and continuous delivery (CI/CD) for the app and platform of your choice.
* [Azure SQL](https://azure.microsoft.com/pt-br/services/sql-database/campaign/#documentation) - Azure SQL Server.
* [Azure Storage](https://docs.microsoft.com/pt-br/azure/storage/blobs/) - Azure Storage.
* [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/) - Language C# to .NET Platform.
* [Docker](https://docs.docker.com/) - Platform for developers and sysadmins to build, run, and share.
* [GitHub](https://help.github.com/pt/github/getting-started-with-github) - The biggest developer community in the World.
* [Material-UI](https://material-ui.com/pt/) - React components library.
* [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces.
* [Server Side Rendering](https://github.com/guardian/support-frontend/wiki/Server-Side-Rendering) - Server Side Rendering (SSR) to add pre-rendered HTML to the page.
* [Linux](https://linux.die.net/) - Linux documentation.
* [Alpine](https://wiki.alpinelinux.org/wiki/Category_talk:Developer_Documentation) - Linux Alpine documentation.
* [NGINX](https://nginx.org/en/docs/) - Free, open-source, high-performance HTTP server, reverse proxy, and IMAP/POP3 proxy server.
* [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/RicardoGaefke/ricardogaefke-www/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Ricardo Gaefke** - *Initial work* - [RicardoGaefke](https://github.com/RicardoGaefke)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/RicardoGaefke/ricardogaefke-www/blob/master/LICENSE) file for details.


