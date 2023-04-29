
# ExtraTankz Studios Website

A Simple and messy-coded website for ExtraTankz Studios, Github and Cloudflare Pages used for hosting.

So far its just used for storage and projects of mine, If you want to see the V1 and V2 of the site then just go to https://www.extratankz.ml/v1 or https://www.extratankz.ml/v2


## Roadmap

- Additional browser support, Some browsers don't like it for some reason!

- Add more projects to the storage

- More pages.

- More contact information.


## Run Locally

### I would prefer if you didn't but If you are so inclined then here you go.

Clone the project

```bash
  git clone https://github.com/ExtraTankz/Web
```

Go to the project directory

```bash
  cd web-main
```

Get IIS

```bash
  dism /online /enable-feature /featurename:IIS-WebServer /all
```

Create the website with IIS **(Edit the command!)**
```bash
  appcmd add site /name:MyWebsite /physicalPath:C:\inetpub\wwwroot\MyWebsite /bindings:http/*:80:example.com /apppool:MyAppPool
```

Start the server

```bash
  appcmd start site /site.name:MyWebsite
```


## Authors

- [@ExtraTankz](https://github.com/ExtraTankz) Creator and Founder of ExtraTankz Studios
## Contributing

Contributions are always welcome!

Submit a pull request or an Issue to get your feature added

and your name listed
## License

[Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

