
# Jasmine Testing

`testRunnerTAP.js` generates data in the TAP format. This can be piped into any tool that understands this, such as `faucet`.
```shell
$ node spec/testRunnerTAP.js | node_modules/.bin/faucet
```

The `tap` module takes input in TAP format and can be used to generate pretty reports that include code coverage. We use the `istanbul` module and import the tap data.
```shell
$ node_modules/.bin/istanbul cover --dir docs/coverage/ -x '**schema/**' -x '**spec/**' spec/testRunnerTAP
```