# glimmer-env-hack

This is my hack how to workaround the following issue: https://github.com/glimmerjs/glimmer-application-pipeline/issues/89

It's only a hack so don't use it in production. The idea is to build an config file similar to how the module-map is built.

This is done by an in-repo addon which is called include-environment. Since the @glimmer/application-pipeline does not allow too much customization at the day of this writing it's only a quick fix to overcome the problems which are described in the issue linked above.

Although everything works as expected there is the following error message on the console:

`/src/ui/components/GlimmerEnvHack/component.ts(2,17): Cannot find module '../../../../config/user-env'.`
