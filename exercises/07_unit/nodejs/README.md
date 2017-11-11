
# Jasmine Testing

`testRunnerTAP.js` generates data in the TAP format. This can be piped into any tool that understands this, such as `faucet`.
```shell
$ node spec/testRunnerTAP.js | node_modules/.bin/faucet
```

The `tap` module takes input in TAP format and can be used to generate pretty reports that include code coverage.
```shell
$ node spec/testRunnerTAP.js | node_modules/.bin/tap -- --cov
$ node spec/testRunnerTAP.js | node_modules/.bin/tap -- --coverage-report=lcov
```