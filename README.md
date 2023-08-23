# OpenFN CLI CHALLENGE

Some useful and common shell commands for this projects.

Run the job using the CLI:

```shell
$ openfn hello.js -o tmp/output.json
```

Using common adaptor:

```shell
$ openfn hello.js -a common -o tmp/output.json
```

Another set of common command line arguments:

```
$ openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json
```

Options for debugging errors:

```
$ openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json -l none
```

```
$ openfn getPosts.js -a http -s tmp/state.json -o tmp/output.json -l debug
```