# Issue recreation

Original issue: https://github.com/d-velop/dvelop-sdk-node/issues/119

## Testing

Install dependencies: `npm install`.

Run `npm run test` to provoke the error.

## Error message

```shell
13:37 $ npm run test

> dvelop-express-utils-issue@0.1.0 test
> tsc

index.ts:6:9 - error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, _: Response<any, Record<string, any>>, next: NextFunction) => void' is not assignable to parameter of type 'PathParams'.

6 app.use(contextMiddleware);
          ~~~~~~~~~~~~~~~~~

  node_modules/@types/express-serve-static-core/index.d.ts:157:5
    157     <
            ~
    158         P = ParamsDictionary,
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...
    166         ...handlers: Array<RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, LocalsObj>>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    167     ): T;
        ~~~~~~~~~
    The last overload is declared here.


Found 1 error in index.ts:6
```
