# Logging in Java 9+

Since Java 9, framework-independent logging is available natively through the `System.LoggerFinder` service
and the `System.Logger` facade. Posts such as [Understanding System Logger](https://dzone.com/articles/system-logger)
already exist which explain how this works with existing logging frameworks such as SLF4J/Log4J2 as well as
custom implementations.

This post describes how you might structure logging in a Java library so that it easily hooks into a user's
environment whilst also allowing a custom implementation.

## Logging-as-a-Module

With logging available as a service, custom logging implementations ought to live in a separate `logging`
module.

Why is this?

Consumers of your library can then choose between your custom logging implementation, which could be to
`System.out` for console applications, or an existing logging framework such as SLF4J/Log4J2.

## Logging-not-as-a-Module - Multiple Service Providers

If a custom `LoggerFinder` service is provided in your application module, then users can't easily swap to
other frameworks.

Why is this?

A call to `System.getLogger()` only resolves one `LoggerFinder` service, so how does it handle multiple service
providers? The answer is that whichever appears first wins. In projects managed by Maven this means, for example,
that if a dependency which provides a `LoggerFinder` appears first in the `dependencies` list, it will be used.

## Testability of loggers

With your application code now independent of the underlying logging implementation, it becomes easier to test
different logging implementations. You simply create a test module that depends on the logging implementation you
want to test, and you can begin to verify that it works.

## Examples

### Multiple Service Providers

Let's assume that we're working on a Java project managed by Maven and we have the choice between `loggerA` and
`loggerB`, both which provide a `LoggerFinder` service. Our application also has the following line of code:

```java
private static final Logger logger = System.getLogger(Main.class.getSimpleName());
```

If our `pom.xml` has the following dependency list, then `Logger` will be whatever `loggerA` returns:

```xml
<dependencies>
  <dependency>
    <groupId>com.loggerA</groupId>
    <artifactId>loggerA</artifactId>
  </dependency>
  <dependency>
    <groupId>com.loggerB</groupId>
    <artifactId>loggerB</artifactId>
  </dependency>
</dependencies>
```

If instead our `pom.xml` has the following dependency list, then `Logger` will be whatever `loggerB` returns:

```xml
<dependencies>
  <dependency>
    <groupId>com.loggerB</groupId>
    <artifactId>loggerB</artifactId>
  </dependency>
  <dependency>
    <groupId>com.loggerA</groupId>
    <artifactId>loggerA</artifactId>
  </dependency>
</dependencies>
```

### Logging-as-a-Module

With logging in a separate module, what might an example project look like?
The following diagram shows how one might be structured. Note that `core` doesn't directly depend on `logging`
as it is up to the user to choose the logging framework they want. In tests however, you would depend on the
logging implementation you wish to test or test with.

```
parent
│   pom.xml
├───core
│   │   pom.xml
│   ├───src
│   └───target
└───logging
    │   pom.xml
    ├───src
    │   └───main
    │       ├───java
    │       │   └───logging
    │       │           CustomLogger.java
    │       │           CustomLoggerFinder.java
    │       └───resources
    │           └───META-INF
    │               └───services
    │                       java.lang.System$LoggerFinder
    └───target
```

## Conclusion

The `System.LoggerFinder` service is a neat way to allow your application to hook into the logging framework
of the environment it gets used in. However, this means that custom logging implementations need to be developed
with this in mind, and providing them as separate modules for consumers to depend on is a very flexible approach
with testability of different logging implementations as an added benefit.

#### References
- [Understanding System Logger](https://dzone.com/articles/system-logger)
- [System.LoggerFinder](https://docs.oracle.com/javase/9/docs/api/java/lang/System.LoggerFinder.html)
