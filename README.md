# API Coding Exercise

This exercise is intended to demonstrate how you work with frameworks, api integrations, and managing software projects. If you have questions then please reach out.

## The Goal

Develop a lightweight web application that returns a HTML response.

The goal of this application is to take user info and build a simple welcome HTML email.

The application should receive two URL query params:

- name
- postcode

For example: http://localhost:3000/email?name=jane&postcode=2007

The application then returns HTML suitable for a HTML email clients matching the
design provided in the `/design` folder.

https://postcodeapi.com.au/ can be used as an integration to convert the
postcode in the url to relevant location information in the email.

## You should provide with your submission

- A private repository uploaded to Github.com with access granted to roberts.chris [at] abc.net.au
- A project README.md with instructions on how to run the application locally
- Unit testing where applicable
- Brief instructions for how you would deploy this application to the host of your choice
- A history of changes recorded using git

## How long should it take?

This exercise is only intended to take 1 - 2 hours of your time.
If you run out of time then just provide all that you have completed
and a description of how you would solve the remaining work.

## Typescript starter

A `typescript` starter pack has been provided in the `/typescript` folder that you can use to get started.
However if you would prefer you can submit your solution in any language and framework
of your choice.

To get started with the `/typescript` example run:

```
cd typescript
nvm use
npm install
npm run start
```

For your convenience Jest has been configured for unit testing, to run tests use:

```
npm run test
```