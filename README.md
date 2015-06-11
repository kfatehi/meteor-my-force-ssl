This is my version of force-ssl, forked from https://github.com/meteor/meteor/tree/4daaa76b1291f8331cb727610d4aa79eae64b31e/packages/force-ssl

It's exactly the same except that it is only enabled if the environment variable FORCE_SSL is set.

The if statement is in the Package.onUse so make sure if you're building locally for remote deployment, you set FORCE_SSL there.

For example if you're using meteor up you should use `FORCE_SSL=1 mup deploy` which will build with force-ssl enabled
