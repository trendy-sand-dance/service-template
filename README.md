# service template 

This repo contains the basic layout of our services, it runs a node server.

## dev pre-requisites
- Docker


## Repo setup
After you've created a repo based on this template you should setup the branch rules.
T.B.A

## Env setup
1. Set the name in `package.json` to the name of the service.
T.B.A


## Running in dev mode
- building the container
```
make devbuild
```

- running the container
```
make rundev
```

## Running in prod mode
- building the container
```
make prodbuild
```

- running the container
```
make runprod
```

## Cleaning the container
```
make clean
```

