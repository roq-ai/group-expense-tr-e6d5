/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model expense
 *
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>;
/**
 * Model group
 *
 */
export type group = $Result.DefaultSelection<Prisma.$groupPayload>;
/**
 * Model group_expense
 *
 */
export type group_expense = $Result.DefaultSelection<Prisma.$group_expensePayload>;
/**
 * Model group_member
 *
 */
export type group_member = $Result.DefaultSelection<Prisma.$group_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   */
  get expense(): Prisma.expenseDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **group** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   */
  get group(): Prisma.groupDelegate<ExtArgs>;

  /**
   * `prisma.group_expense`: Exposes CRUD operations for the **group_expense** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Group_expenses
   * const group_expenses = await prisma.group_expense.findMany()
   * ```
   */
  get group_expense(): Prisma.group_expenseDelegate<ExtArgs>;

  /**
   * `prisma.group_member`: Exposes CRUD operations for the **group_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Group_members
   * const group_members = await prisma.group_member.findMany()
   * ```
   */
  get group_member(): Prisma.group_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    expense: 'expense';
    group: 'group';
    group_expense: 'group_expense';
    group_member: 'group_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'expense' | 'group' | 'group_expense' | 'group_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>;
        fields: Prisma.expenseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[];
          };
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$expensePayload>;
          };
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExpense>;
          };
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseGroupByOutputType>[];
          };
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number;
          };
        };
      };
      group: {
        payload: Prisma.$groupPayload<ExtArgs>;
        fields: Prisma.groupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.groupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.groupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          findFirst: {
            args: Prisma.groupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.groupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          findMany: {
            args: Prisma.groupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>[];
          };
          create: {
            args: Prisma.groupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          createMany: {
            args: Prisma.groupCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.groupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          update: {
            args: Prisma.groupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          deleteMany: {
            args: Prisma.groupDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.groupUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.groupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$groupPayload>;
          };
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroup>;
          };
          groupBy: {
            args: Prisma.groupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GroupGroupByOutputType>[];
          };
          count: {
            args: Prisma.groupCountArgs<ExtArgs>;
            result: $Utils.Optional<GroupCountAggregateOutputType> | number;
          };
        };
      };
      group_expense: {
        payload: Prisma.$group_expensePayload<ExtArgs>;
        fields: Prisma.group_expenseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.group_expenseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.group_expenseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          findFirst: {
            args: Prisma.group_expenseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.group_expenseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          findMany: {
            args: Prisma.group_expenseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>[];
          };
          create: {
            args: Prisma.group_expenseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          createMany: {
            args: Prisma.group_expenseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.group_expenseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          update: {
            args: Prisma.group_expenseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          deleteMany: {
            args: Prisma.group_expenseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.group_expenseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.group_expenseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_expensePayload>;
          };
          aggregate: {
            args: Prisma.Group_expenseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroup_expense>;
          };
          groupBy: {
            args: Prisma.group_expenseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Group_expenseGroupByOutputType>[];
          };
          count: {
            args: Prisma.group_expenseCountArgs<ExtArgs>;
            result: $Utils.Optional<Group_expenseCountAggregateOutputType> | number;
          };
        };
      };
      group_member: {
        payload: Prisma.$group_memberPayload<ExtArgs>;
        fields: Prisma.group_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.group_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.group_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          findFirst: {
            args: Prisma.group_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.group_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          findMany: {
            args: Prisma.group_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>[];
          };
          create: {
            args: Prisma.group_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          createMany: {
            args: Prisma.group_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.group_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          update: {
            args: Prisma.group_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          deleteMany: {
            args: Prisma.group_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.group_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.group_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$group_memberPayload>;
          };
          aggregate: {
            args: Prisma.Group_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroup_member>;
          };
          groupBy: {
            args: Prisma.group_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Group_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.group_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Group_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    group_expense: number;
  };

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_expense?: boolean | ExpenseCountOutputTypeCountGroup_expenseArgs;
  };

  // Custom InputTypes

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountGroup_expenseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: group_expenseWhereInput;
  };

  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    group_expense: number;
    group_member: number;
  };

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_expense?: boolean | GroupCountOutputTypeCountGroup_expenseArgs;
    group_member?: boolean | GroupCountOutputTypeCountGroup_memberArgs;
  };

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroup_expenseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: group_expenseWhereInput;
  };

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountGroup_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: group_memberWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    group_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    group_member?: boolean | UserCountOutputTypeCountGroup_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroup_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: group_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseSumAggregateOutputType = {
    amount: number | null;
  };

  export type ExpenseMinAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseMaxAggregateOutputType = {
    id: string | null;
    amount: number | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExpenseCountAggregateOutputType = {
    id: number;
    amount: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ExpenseAvgAggregateInputType = {
    amount?: true;
  };

  export type ExpenseSumAggregateInputType = {
    amount?: true;
  };

  export type ExpenseMinAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseMaxAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExpenseCountAggregateInputType = {
    id?: true;
    amount?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned expenses
     **/
    _count?: true | ExpenseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExpenseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExpenseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExpenseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExpenseMaxAggregateInputType;
  };

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>;
  };

  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput;
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[];
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum;
    having?: expenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
  };

  export type ExpenseGroupByOutputType = {
    id: string;
    amount: number;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ExpenseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
          : GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
      }
    >
  >;

  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      amount?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      group_expense?: boolean | expense$group_expenseArgs<ExtArgs>;
      _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type expenseSelectScalar = {
    id?: boolean;
    amount?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_expense?: boolean | expense$group_expenseArgs<ExtArgs>;
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'expense';
    objects: {
      group_expense: Prisma.$group_expensePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        amount: number;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['expense']
    >;
    composites: {};
  };

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<
    Prisma.$expensePayload,
    S
  >;

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    expenseFindManyArgs,
    'select' | 'include'
  > & {
    select?: ExpenseCountAggregateInputType | true;
  };

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense']; meta: { name: 'expense' } };
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends expenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Expense that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<
      $Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends expenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     *
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends expenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     *
     **/
    create<T extends expenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseCreateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Expenses.
     *     @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     *     @example
     *     // Create many Expenses
     *     const expense = await prisma.expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends expenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     *
     **/
    delete<T extends expenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends expenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends expenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends expenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     **/
    upsert<T extends expenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>,
    ): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
     **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExpenseAggregateArgs>(
      args: Subset<T, ExpenseAggregateArgs>,
    ): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the expense model
     */
    readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group_expense<T extends expense$group_expenseArgs<ExtArgs> = {}>(
      args?: Subset<T, expense$group_expenseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<'expense', 'String'>;
    readonly amount: FieldRef<'expense', 'Int'>;
    readonly description: FieldRef<'expense', 'String'>;
    readonly created_at: FieldRef<'expense', 'DateTime'>;
    readonly updated_at: FieldRef<'expense', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` expenses.
     */
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to create a expense.
     */
    data: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
  };

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>;
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput;
  };

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput;
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>;
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>;
  };

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput;
  };

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput;
  };

  /**
   * expense.group_expense
   */
  export type expense$group_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    where?: group_expenseWhereInput;
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    cursor?: group_expenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Group_expenseScalarFieldEnum | Group_expenseScalarFieldEnum[];
  };

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: expenseInclude<ExtArgs> | null;
  };

  /**
   * Model group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  export type GroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group to aggregate.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned groups
     **/
    _count?: true | GroupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GroupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GroupMaxAggregateInputType;
  };

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>;
  };

  export type groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupWhereInput;
    orderBy?: groupOrderByWithAggregationInput | groupOrderByWithAggregationInput[];
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum;
    having?: groupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
  };

  export type GroupGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: GroupCountAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
  };

  type GetGroupGroupByPayload<T extends groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GroupGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
          : GetScalarType<T[P], GroupGroupByOutputType[P]>;
      }
    >
  >;

  export type groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      group_expense?: boolean | group$group_expenseArgs<ExtArgs>;
      group_member?: boolean | group$group_memberArgs<ExtArgs>;
      _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['group']
  >;

  export type groupSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type groupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_expense?: boolean | group$group_expenseArgs<ExtArgs>;
    group_member?: boolean | group$group_memberArgs<ExtArgs>;
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'group';
    objects: {
      group_expense: Prisma.$group_expensePayload<ExtArgs>[];
      group_member: Prisma.$group_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['group']
    >;
    composites: {};
  };

  type groupGetPayload<S extends boolean | null | undefined | groupDefaultArgs> = $Result.GetResult<
    Prisma.$groupPayload,
    S
  >;

  type groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    groupFindManyArgs,
    'select' | 'include'
  > & {
    select?: GroupCountAggregateInputType | true;
  };

  export interface groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group']; meta: { name: 'group' } };
    /**
     * Find zero or one Group that matches the filter.
     * @param {groupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends groupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, groupFindUniqueArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {groupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends groupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends groupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindFirstArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends groupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     *
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends groupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Group.
     * @param {groupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     *
     **/
    create<T extends groupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, groupCreateArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Groups.
     *     @param {groupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends groupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Group.
     * @param {groupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     *
     **/
    delete<T extends groupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, groupDeleteArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Group.
     * @param {groupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends groupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpdateArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Groups.
     * @param {groupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends groupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends groupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Group.
     * @param {groupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     **/
    upsert<T extends groupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, groupUpsertArgs<ExtArgs>>,
    ): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
     **/
    count<T extends groupCountArgs>(
      args?: Subset<T, groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroupAggregateArgs>(
      args: Subset<T, GroupAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroupAggregateType<T>>;

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends groupGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupGroupByArgs['orderBy'] }
        : { orderBy?: groupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, groupGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the group model
     */
    readonly fields: groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group_expense<T extends group$group_expenseArgs<ExtArgs> = {}>(
      args?: Subset<T, group$group_expenseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findMany'> | Null>;

    group_member<T extends group$group_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, group$group_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the group model
   */
  interface groupFieldRefs {
    readonly id: FieldRef<'group', 'String'>;
    readonly name: FieldRef<'group', 'String'>;
    readonly description: FieldRef<'group', 'String'>;
    readonly created_at: FieldRef<'group', 'DateTime'>;
    readonly updated_at: FieldRef<'group', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * group findUnique
   */
  export type groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group findUniqueOrThrow
   */
  export type groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group findFirst
   */
  export type groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group findFirstOrThrow
   */
  export type groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group findMany
   */
  export type groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter, which groups to fetch.
     */
    where?: groupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing groups.
     */
    cursor?: groupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` groups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` groups.
     */
    skip?: number;
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[];
  };

  /**
   * group create
   */
  export type groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The data needed to create a group.
     */
    data: XOR<groupCreateInput, groupUncheckedCreateInput>;
  };

  /**
   * group createMany
   */
  export type groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupCreateManyInput | groupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * group update
   */
  export type groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The data needed to update a group.
     */
    data: XOR<groupUpdateInput, groupUncheckedUpdateInput>;
    /**
     * Choose, which group to update.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group updateMany
   */
  export type groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupUpdateManyMutationInput, groupUncheckedUpdateManyInput>;
    /**
     * Filter which groups to update
     */
    where?: groupWhereInput;
  };

  /**
   * group upsert
   */
  export type groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * The filter to search for the group to update in case it exists.
     */
    where: groupWhereUniqueInput;
    /**
     * In case the group found by the `where` argument doesn't exist, create a new group with this data.
     */
    create: XOR<groupCreateInput, groupUncheckedCreateInput>;
    /**
     * In case the group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupUpdateInput, groupUncheckedUpdateInput>;
  };

  /**
   * group delete
   */
  export type groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
    /**
     * Filter which group to delete.
     */
    where: groupWhereUniqueInput;
  };

  /**
   * group deleteMany
   */
  export type groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupWhereInput;
  };

  /**
   * group.group_expense
   */
  export type group$group_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    where?: group_expenseWhereInput;
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    cursor?: group_expenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Group_expenseScalarFieldEnum | Group_expenseScalarFieldEnum[];
  };

  /**
   * group.group_member
   */
  export type group$group_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    where?: group_memberWhereInput;
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    cursor?: group_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Group_memberScalarFieldEnum | Group_memberScalarFieldEnum[];
  };

  /**
   * group without action
   */
  export type groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupInclude<ExtArgs> | null;
  };

  /**
   * Model group_expense
   */

  export type AggregateGroup_expense = {
    _count: Group_expenseCountAggregateOutputType | null;
    _min: Group_expenseMinAggregateOutputType | null;
    _max: Group_expenseMaxAggregateOutputType | null;
  };

  export type Group_expenseMinAggregateOutputType = {
    id: string | null;
    group_id: string | null;
    expense_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Group_expenseMaxAggregateOutputType = {
    id: string | null;
    group_id: string | null;
    expense_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Group_expenseCountAggregateOutputType = {
    id: number;
    group_id: number;
    expense_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Group_expenseMinAggregateInputType = {
    id?: true;
    group_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Group_expenseMaxAggregateInputType = {
    id?: true;
    group_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Group_expenseCountAggregateInputType = {
    id?: true;
    group_id?: true;
    expense_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Group_expenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_expense to aggregate.
     */
    where?: group_expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_expenses to fetch.
     */
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: group_expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned group_expenses
     **/
    _count?: true | Group_expenseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Group_expenseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Group_expenseMaxAggregateInputType;
  };

  export type GetGroup_expenseAggregateType<T extends Group_expenseAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup_expense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_expense[P]>
      : GetScalarType<T[P], AggregateGroup_expense[P]>;
  };

  export type group_expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_expenseWhereInput;
    orderBy?: group_expenseOrderByWithAggregationInput | group_expenseOrderByWithAggregationInput[];
    by: Group_expenseScalarFieldEnum[] | Group_expenseScalarFieldEnum;
    having?: group_expenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Group_expenseCountAggregateInputType | true;
    _min?: Group_expenseMinAggregateInputType;
    _max?: Group_expenseMaxAggregateInputType;
  };

  export type Group_expenseGroupByOutputType = {
    id: string;
    group_id: string;
    expense_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Group_expenseCountAggregateOutputType | null;
    _min: Group_expenseMinAggregateOutputType | null;
    _max: Group_expenseMaxAggregateOutputType | null;
  };

  type GetGroup_expenseGroupByPayload<T extends group_expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_expenseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Group_expenseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Group_expenseGroupByOutputType[P]>
          : GetScalarType<T[P], Group_expenseGroupByOutputType[P]>;
      }
    >
  >;

  export type group_expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        group_id?: boolean;
        expense_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        expense?: boolean | expenseDefaultArgs<ExtArgs>;
        group?: boolean | groupDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['group_expense']
    >;

  export type group_expenseSelectScalar = {
    id?: boolean;
    group_id?: boolean;
    expense_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type group_expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | expenseDefaultArgs<ExtArgs>;
    group?: boolean | groupDefaultArgs<ExtArgs>;
  };

  export type $group_expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'group_expense';
    objects: {
      expense: Prisma.$expensePayload<ExtArgs>;
      group: Prisma.$groupPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        group_id: string;
        expense_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['group_expense']
    >;
    composites: {};
  };

  type group_expenseGetPayload<S extends boolean | null | undefined | group_expenseDefaultArgs> = $Result.GetResult<
    Prisma.$group_expensePayload,
    S
  >;

  type group_expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    group_expenseFindManyArgs,
    'select' | 'include'
  > & {
    select?: Group_expenseCountAggregateInputType | true;
  };

  export interface group_expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_expense']; meta: { name: 'group_expense' } };
    /**
     * Find zero or one Group_expense that matches the filter.
     * @param {group_expenseFindUniqueArgs} args - Arguments to find a Group_expense
     * @example
     * // Get one Group_expense
     * const group_expense = await prisma.group_expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends group_expenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseFindUniqueArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Group_expense that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {group_expenseFindUniqueOrThrowArgs} args - Arguments to find a Group_expense
     * @example
     * // Get one Group_expense
     * const group_expense = await prisma.group_expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends group_expenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Group_expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseFindFirstArgs} args - Arguments to find a Group_expense
     * @example
     * // Get one Group_expense
     * const group_expense = await prisma.group_expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends group_expenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseFindFirstArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Group_expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseFindFirstOrThrowArgs} args - Arguments to find a Group_expense
     * @example
     * // Get one Group_expense
     * const group_expense = await prisma.group_expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends group_expenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Group_expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_expenses
     * const group_expenses = await prisma.group_expense.findMany()
     *
     * // Get first 10 Group_expenses
     * const group_expenses = await prisma.group_expense.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const group_expenseWithIdOnly = await prisma.group_expense.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends group_expenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Group_expense.
     * @param {group_expenseCreateArgs} args - Arguments to create a Group_expense.
     * @example
     * // Create one Group_expense
     * const Group_expense = await prisma.group_expense.create({
     *   data: {
     *     // ... data to create a Group_expense
     *   }
     * })
     *
     **/
    create<T extends group_expenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseCreateArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Group_expenses.
     *     @param {group_expenseCreateManyArgs} args - Arguments to create many Group_expenses.
     *     @example
     *     // Create many Group_expenses
     *     const group_expense = await prisma.group_expense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends group_expenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Group_expense.
     * @param {group_expenseDeleteArgs} args - Arguments to delete one Group_expense.
     * @example
     * // Delete one Group_expense
     * const Group_expense = await prisma.group_expense.delete({
     *   where: {
     *     // ... filter to delete one Group_expense
     *   }
     * })
     *
     **/
    delete<T extends group_expenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseDeleteArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Group_expense.
     * @param {group_expenseUpdateArgs} args - Arguments to update one Group_expense.
     * @example
     * // Update one Group_expense
     * const group_expense = await prisma.group_expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends group_expenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseUpdateArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Group_expenses.
     * @param {group_expenseDeleteManyArgs} args - Arguments to filter Group_expenses to delete.
     * @example
     * // Delete a few Group_expenses
     * const { count } = await prisma.group_expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends group_expenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_expenseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Group_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_expenses
     * const group_expense = await prisma.group_expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends group_expenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Group_expense.
     * @param {group_expenseUpsertArgs} args - Arguments to update or create a Group_expense.
     * @example
     * // Update or create a Group_expense
     * const group_expense = await prisma.group_expense.upsert({
     *   create: {
     *     // ... data to create a Group_expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_expense we want to update
     *   }
     * })
     **/
    upsert<T extends group_expenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, group_expenseUpsertArgs<ExtArgs>>,
    ): Prisma__group_expenseClient<
      $Result.GetResult<Prisma.$group_expensePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Group_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseCountArgs} args - Arguments to filter Group_expenses to count.
     * @example
     * // Count the number of Group_expenses
     * const count = await prisma.group_expense.count({
     *   where: {
     *     // ... the filter for the Group_expenses we want to count
     *   }
     * })
     **/
    count<T extends group_expenseCountArgs>(
      args?: Subset<T, group_expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_expenseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_expenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Group_expenseAggregateArgs>(
      args: Subset<T, Group_expenseAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroup_expenseAggregateType<T>>;

    /**
     * Group by Group_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends group_expenseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_expenseGroupByArgs['orderBy'] }
        : { orderBy?: group_expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, group_expenseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGroup_expenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the group_expense model
     */
    readonly fields: group_expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_expenseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    expense<T extends expenseDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, expenseDefaultArgs<ExtArgs>>,
    ): Prisma__expenseClient<
      $Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    group<T extends groupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, groupDefaultArgs<ExtArgs>>,
    ): Prisma__groupClient<
      $Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the group_expense model
   */
  interface group_expenseFieldRefs {
    readonly id: FieldRef<'group_expense', 'String'>;
    readonly group_id: FieldRef<'group_expense', 'String'>;
    readonly expense_id: FieldRef<'group_expense', 'String'>;
    readonly created_at: FieldRef<'group_expense', 'DateTime'>;
    readonly updated_at: FieldRef<'group_expense', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * group_expense findUnique
   */
  export type group_expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter, which group_expense to fetch.
     */
    where: group_expenseWhereUniqueInput;
  };

  /**
   * group_expense findUniqueOrThrow
   */
  export type group_expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter, which group_expense to fetch.
     */
    where: group_expenseWhereUniqueInput;
  };

  /**
   * group_expense findFirst
   */
  export type group_expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter, which group_expense to fetch.
     */
    where?: group_expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_expenses to fetch.
     */
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for group_expenses.
     */
    cursor?: group_expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of group_expenses.
     */
    distinct?: Group_expenseScalarFieldEnum | Group_expenseScalarFieldEnum[];
  };

  /**
   * group_expense findFirstOrThrow
   */
  export type group_expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter, which group_expense to fetch.
     */
    where?: group_expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_expenses to fetch.
     */
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for group_expenses.
     */
    cursor?: group_expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of group_expenses.
     */
    distinct?: Group_expenseScalarFieldEnum | Group_expenseScalarFieldEnum[];
  };

  /**
   * group_expense findMany
   */
  export type group_expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter, which group_expenses to fetch.
     */
    where?: group_expenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_expenses to fetch.
     */
    orderBy?: group_expenseOrderByWithRelationInput | group_expenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing group_expenses.
     */
    cursor?: group_expenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_expenses.
     */
    skip?: number;
    distinct?: Group_expenseScalarFieldEnum | Group_expenseScalarFieldEnum[];
  };

  /**
   * group_expense create
   */
  export type group_expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * The data needed to create a group_expense.
     */
    data: XOR<group_expenseCreateInput, group_expenseUncheckedCreateInput>;
  };

  /**
   * group_expense createMany
   */
  export type group_expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_expenses.
     */
    data: group_expenseCreateManyInput | group_expenseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * group_expense update
   */
  export type group_expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * The data needed to update a group_expense.
     */
    data: XOR<group_expenseUpdateInput, group_expenseUncheckedUpdateInput>;
    /**
     * Choose, which group_expense to update.
     */
    where: group_expenseWhereUniqueInput;
  };

  /**
   * group_expense updateMany
   */
  export type group_expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_expenses.
     */
    data: XOR<group_expenseUpdateManyMutationInput, group_expenseUncheckedUpdateManyInput>;
    /**
     * Filter which group_expenses to update
     */
    where?: group_expenseWhereInput;
  };

  /**
   * group_expense upsert
   */
  export type group_expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * The filter to search for the group_expense to update in case it exists.
     */
    where: group_expenseWhereUniqueInput;
    /**
     * In case the group_expense found by the `where` argument doesn't exist, create a new group_expense with this data.
     */
    create: XOR<group_expenseCreateInput, group_expenseUncheckedCreateInput>;
    /**
     * In case the group_expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_expenseUpdateInput, group_expenseUncheckedUpdateInput>;
  };

  /**
   * group_expense delete
   */
  export type group_expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
    /**
     * Filter which group_expense to delete.
     */
    where: group_expenseWhereUniqueInput;
  };

  /**
   * group_expense deleteMany
   */
  export type group_expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_expenses to delete
     */
    where?: group_expenseWhereInput;
  };

  /**
   * group_expense without action
   */
  export type group_expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_expense
     */
    select?: group_expenseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_expenseInclude<ExtArgs> | null;
  };

  /**
   * Model group_member
   */

  export type AggregateGroup_member = {
    _count: Group_memberCountAggregateOutputType | null;
    _min: Group_memberMinAggregateOutputType | null;
    _max: Group_memberMaxAggregateOutputType | null;
  };

  export type Group_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    group_id: string | null;
    joined_at: Date | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Group_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    group_id: string | null;
    joined_at: Date | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Group_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    group_id: number;
    joined_at: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Group_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Group_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Group_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    group_id?: true;
    joined_at?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Group_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_member to aggregate.
     */
    where?: group_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: group_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned group_members
     **/
    _count?: true | Group_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Group_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Group_memberMaxAggregateInputType;
  };

  export type GetGroup_memberAggregateType<T extends Group_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_member[P]>
      : GetScalarType<T[P], AggregateGroup_member[P]>;
  };

  export type group_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_memberWhereInput;
    orderBy?: group_memberOrderByWithAggregationInput | group_memberOrderByWithAggregationInput[];
    by: Group_memberScalarFieldEnum[] | Group_memberScalarFieldEnum;
    having?: group_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Group_memberCountAggregateInputType | true;
    _min?: Group_memberMinAggregateInputType;
    _max?: Group_memberMaxAggregateInputType;
  };

  export type Group_memberGroupByOutputType = {
    id: string;
    user_id: string;
    group_id: string;
    joined_at: Date;
    role: string;
    created_at: Date;
    updated_at: Date;
    _count: Group_memberCountAggregateOutputType | null;
    _min: Group_memberMinAggregateOutputType | null;
    _max: Group_memberMaxAggregateOutputType | null;
  };

  type GetGroup_memberGroupByPayload<T extends group_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Group_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Group_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Group_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type group_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        group_id?: boolean;
        joined_at?: boolean;
        role?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        group?: boolean | groupDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['group_member']
    >;

  export type group_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    group_id?: boolean;
    joined_at?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type group_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $group_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'group_member';
    objects: {
      group: Prisma.$groupPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        group_id: string;
        joined_at: Date;
        role: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['group_member']
    >;
    composites: {};
  };

  type group_memberGetPayload<S extends boolean | null | undefined | group_memberDefaultArgs> = $Result.GetResult<
    Prisma.$group_memberPayload,
    S
  >;

  type group_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    group_memberFindManyArgs,
    'select' | 'include'
  > & {
    select?: Group_memberCountAggregateInputType | true;
  };

  export interface group_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_member']; meta: { name: 'group_member' } };
    /**
     * Find zero or one Group_member that matches the filter.
     * @param {group_memberFindUniqueArgs} args - Arguments to find a Group_member
     * @example
     * // Get one Group_member
     * const group_member = await prisma.group_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends group_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__group_memberClient<
      $Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Group_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {group_memberFindUniqueOrThrowArgs} args - Arguments to find a Group_member
     * @example
     * // Get one Group_member
     * const group_member = await prisma.group_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends group_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__group_memberClient<
      $Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Group_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberFindFirstArgs} args - Arguments to find a Group_member
     * @example
     * // Get one Group_member
     * const group_member = await prisma.group_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends group_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__group_memberClient<
      $Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Group_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberFindFirstOrThrowArgs} args - Arguments to find a Group_member
     * @example
     * // Get one Group_member
     * const group_member = await prisma.group_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends group_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__group_memberClient<
      $Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Group_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_members
     * const group_members = await prisma.group_member.findMany()
     *
     * // Get first 10 Group_members
     * const group_members = await prisma.group_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const group_memberWithIdOnly = await prisma.group_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends group_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Group_member.
     * @param {group_memberCreateArgs} args - Arguments to create a Group_member.
     * @example
     * // Create one Group_member
     * const Group_member = await prisma.group_member.create({
     *   data: {
     *     // ... data to create a Group_member
     *   }
     * })
     *
     **/
    create<T extends group_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberCreateArgs<ExtArgs>>,
    ): Prisma__group_memberClient<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Group_members.
     *     @param {group_memberCreateManyArgs} args - Arguments to create many Group_members.
     *     @example
     *     // Create many Group_members
     *     const group_member = await prisma.group_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends group_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Group_member.
     * @param {group_memberDeleteArgs} args - Arguments to delete one Group_member.
     * @example
     * // Delete one Group_member
     * const Group_member = await prisma.group_member.delete({
     *   where: {
     *     // ... filter to delete one Group_member
     *   }
     * })
     *
     **/
    delete<T extends group_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberDeleteArgs<ExtArgs>>,
    ): Prisma__group_memberClient<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Group_member.
     * @param {group_memberUpdateArgs} args - Arguments to update one Group_member.
     * @example
     * // Update one Group_member
     * const group_member = await prisma.group_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends group_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberUpdateArgs<ExtArgs>>,
    ): Prisma__group_memberClient<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Group_members.
     * @param {group_memberDeleteManyArgs} args - Arguments to filter Group_members to delete.
     * @example
     * // Delete a few Group_members
     * const { count } = await prisma.group_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends group_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, group_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_members
     * const group_member = await prisma.group_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends group_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Group_member.
     * @param {group_memberUpsertArgs} args - Arguments to update or create a Group_member.
     * @example
     * // Update or create a Group_member
     * const group_member = await prisma.group_member.upsert({
     *   create: {
     *     // ... data to create a Group_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_member we want to update
     *   }
     * })
     **/
    upsert<T extends group_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, group_memberUpsertArgs<ExtArgs>>,
    ): Prisma__group_memberClient<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberCountArgs} args - Arguments to filter Group_members to count.
     * @example
     * // Count the number of Group_members
     * const count = await prisma.group_member.count({
     *   where: {
     *     // ... the filter for the Group_members we want to count
     *   }
     * })
     **/
    count<T extends group_memberCountArgs>(
      args?: Subset<T, group_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Group_memberAggregateArgs>(
      args: Subset<T, Group_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroup_memberAggregateType<T>>;

    /**
     * Group by Group_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends group_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_memberGroupByArgs['orderBy'] }
        : { orderBy?: group_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, group_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGroup_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the group_member model
     */
    readonly fields: group_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends groupDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, groupDefaultArgs<ExtArgs>>,
    ): Prisma__groupClient<
      $Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the group_member model
   */
  interface group_memberFieldRefs {
    readonly id: FieldRef<'group_member', 'String'>;
    readonly user_id: FieldRef<'group_member', 'String'>;
    readonly group_id: FieldRef<'group_member', 'String'>;
    readonly joined_at: FieldRef<'group_member', 'DateTime'>;
    readonly role: FieldRef<'group_member', 'String'>;
    readonly created_at: FieldRef<'group_member', 'DateTime'>;
    readonly updated_at: FieldRef<'group_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * group_member findUnique
   */
  export type group_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter, which group_member to fetch.
     */
    where: group_memberWhereUniqueInput;
  };

  /**
   * group_member findUniqueOrThrow
   */
  export type group_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter, which group_member to fetch.
     */
    where: group_memberWhereUniqueInput;
  };

  /**
   * group_member findFirst
   */
  export type group_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter, which group_member to fetch.
     */
    where?: group_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for group_members.
     */
    cursor?: group_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_memberScalarFieldEnum | Group_memberScalarFieldEnum[];
  };

  /**
   * group_member findFirstOrThrow
   */
  export type group_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter, which group_member to fetch.
     */
    where?: group_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for group_members.
     */
    cursor?: group_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_memberScalarFieldEnum | Group_memberScalarFieldEnum[];
  };

  /**
   * group_member findMany
   */
  export type group_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing group_members.
     */
    cursor?: group_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` group_members.
     */
    skip?: number;
    distinct?: Group_memberScalarFieldEnum | Group_memberScalarFieldEnum[];
  };

  /**
   * group_member create
   */
  export type group_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a group_member.
     */
    data: XOR<group_memberCreateInput, group_memberUncheckedCreateInput>;
  };

  /**
   * group_member createMany
   */
  export type group_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_members.
     */
    data: group_memberCreateManyInput | group_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * group_member update
   */
  export type group_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a group_member.
     */
    data: XOR<group_memberUpdateInput, group_memberUncheckedUpdateInput>;
    /**
     * Choose, which group_member to update.
     */
    where: group_memberWhereUniqueInput;
  };

  /**
   * group_member updateMany
   */
  export type group_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_members.
     */
    data: XOR<group_memberUpdateManyMutationInput, group_memberUncheckedUpdateManyInput>;
    /**
     * Filter which group_members to update
     */
    where?: group_memberWhereInput;
  };

  /**
   * group_member upsert
   */
  export type group_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the group_member to update in case it exists.
     */
    where: group_memberWhereUniqueInput;
    /**
     * In case the group_member found by the `where` argument doesn't exist, create a new group_member with this data.
     */
    create: XOR<group_memberCreateInput, group_memberUncheckedCreateInput>;
    /**
     * In case the group_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_memberUpdateInput, group_memberUncheckedUpdateInput>;
  };

  /**
   * group_member delete
   */
  export type group_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    /**
     * Filter which group_member to delete.
     */
    where: group_memberWhereUniqueInput;
  };

  /**
   * group_member deleteMany
   */
  export type group_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_members to delete
     */
    where?: group_memberWhereInput;
  };

  /**
   * group_member without action
   */
  export type group_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      group_member?: boolean | user$group_memberArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    group_member?: boolean | user$group_memberArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      group_member: Prisma.$group_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    group_member<T extends user$group_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$group_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.group_member
   */
  export type user$group_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member
     */
    select?: group_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: group_memberInclude<ExtArgs> | null;
    where?: group_memberWhereInput;
    orderBy?: group_memberOrderByWithRelationInput | group_memberOrderByWithRelationInput[];
    cursor?: group_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Group_memberScalarFieldEnum | Group_memberScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const ExpenseScalarFieldEnum: {
    id: 'id';
    amount: 'amount';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];

  export const GroupScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];

  export const Group_expenseScalarFieldEnum: {
    id: 'id';
    group_id: 'group_id';
    expense_id: 'expense_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Group_expenseScalarFieldEnum =
    (typeof Group_expenseScalarFieldEnum)[keyof typeof Group_expenseScalarFieldEnum];

  export const Group_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    group_id: 'group_id';
    joined_at: 'joined_at';
    role: 'role';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Group_memberScalarFieldEnum =
    (typeof Group_memberScalarFieldEnum)[keyof typeof Group_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[];
    OR?: expenseWhereInput[];
    NOT?: expenseWhereInput | expenseWhereInput[];
    id?: UuidFilter<'expense'> | string;
    amount?: IntFilter<'expense'> | number;
    description?: StringNullableFilter<'expense'> | string | null;
    created_at?: DateTimeFilter<'expense'> | Date | string;
    updated_at?: DateTimeFilter<'expense'> | Date | string;
    group_expense?: Group_expenseListRelationFilter;
  };

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    group_expense?: group_expenseOrderByRelationAggregateInput;
  };

  export type expenseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: expenseWhereInput | expenseWhereInput[];
      OR?: expenseWhereInput[];
      NOT?: expenseWhereInput | expenseWhereInput[];
      amount?: IntFilter<'expense'> | number;
      description?: StringNullableFilter<'expense'> | string | null;
      created_at?: DateTimeFilter<'expense'> | Date | string;
      updated_at?: DateTimeFilter<'expense'> | Date | string;
      group_expense?: Group_expenseListRelationFilter;
    },
    'id'
  >;

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: expenseCountOrderByAggregateInput;
    _avg?: expenseAvgOrderByAggregateInput;
    _max?: expenseMaxOrderByAggregateInput;
    _min?: expenseMinOrderByAggregateInput;
    _sum?: expenseSumOrderByAggregateInput;
  };

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    OR?: expenseScalarWhereWithAggregatesInput[];
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'expense'> | string;
    amount?: IntWithAggregatesFilter<'expense'> | number;
    description?: StringNullableWithAggregatesFilter<'expense'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'expense'> | Date | string;
  };

  export type groupWhereInput = {
    AND?: groupWhereInput | groupWhereInput[];
    OR?: groupWhereInput[];
    NOT?: groupWhereInput | groupWhereInput[];
    id?: UuidFilter<'group'> | string;
    name?: StringFilter<'group'> | string;
    description?: StringNullableFilter<'group'> | string | null;
    created_at?: DateTimeFilter<'group'> | Date | string;
    updated_at?: DateTimeFilter<'group'> | Date | string;
    group_expense?: Group_expenseListRelationFilter;
    group_member?: Group_memberListRelationFilter;
  };

  export type groupOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    group_expense?: group_expenseOrderByRelationAggregateInput;
    group_member?: group_memberOrderByRelationAggregateInput;
  };

  export type groupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: groupWhereInput | groupWhereInput[];
      OR?: groupWhereInput[];
      NOT?: groupWhereInput | groupWhereInput[];
      name?: StringFilter<'group'> | string;
      description?: StringNullableFilter<'group'> | string | null;
      created_at?: DateTimeFilter<'group'> | Date | string;
      updated_at?: DateTimeFilter<'group'> | Date | string;
      group_expense?: Group_expenseListRelationFilter;
      group_member?: Group_memberListRelationFilter;
    },
    'id'
  >;

  export type groupOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: groupCountOrderByAggregateInput;
    _max?: groupMaxOrderByAggregateInput;
    _min?: groupMinOrderByAggregateInput;
  };

  export type groupScalarWhereWithAggregatesInput = {
    AND?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[];
    OR?: groupScalarWhereWithAggregatesInput[];
    NOT?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'group'> | string;
    name?: StringWithAggregatesFilter<'group'> | string;
    description?: StringNullableWithAggregatesFilter<'group'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'group'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'group'> | Date | string;
  };

  export type group_expenseWhereInput = {
    AND?: group_expenseWhereInput | group_expenseWhereInput[];
    OR?: group_expenseWhereInput[];
    NOT?: group_expenseWhereInput | group_expenseWhereInput[];
    id?: UuidFilter<'group_expense'> | string;
    group_id?: UuidFilter<'group_expense'> | string;
    expense_id?: UuidFilter<'group_expense'> | string;
    created_at?: DateTimeFilter<'group_expense'> | Date | string;
    updated_at?: DateTimeFilter<'group_expense'> | Date | string;
    expense?: XOR<ExpenseRelationFilter, expenseWhereInput>;
    group?: XOR<GroupRelationFilter, groupWhereInput>;
  };

  export type group_expenseOrderByWithRelationInput = {
    id?: SortOrder;
    group_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    expense?: expenseOrderByWithRelationInput;
    group?: groupOrderByWithRelationInput;
  };

  export type group_expenseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: group_expenseWhereInput | group_expenseWhereInput[];
      OR?: group_expenseWhereInput[];
      NOT?: group_expenseWhereInput | group_expenseWhereInput[];
      group_id?: UuidFilter<'group_expense'> | string;
      expense_id?: UuidFilter<'group_expense'> | string;
      created_at?: DateTimeFilter<'group_expense'> | Date | string;
      updated_at?: DateTimeFilter<'group_expense'> | Date | string;
      expense?: XOR<ExpenseRelationFilter, expenseWhereInput>;
      group?: XOR<GroupRelationFilter, groupWhereInput>;
    },
    'id'
  >;

  export type group_expenseOrderByWithAggregationInput = {
    id?: SortOrder;
    group_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: group_expenseCountOrderByAggregateInput;
    _max?: group_expenseMaxOrderByAggregateInput;
    _min?: group_expenseMinOrderByAggregateInput;
  };

  export type group_expenseScalarWhereWithAggregatesInput = {
    AND?: group_expenseScalarWhereWithAggregatesInput | group_expenseScalarWhereWithAggregatesInput[];
    OR?: group_expenseScalarWhereWithAggregatesInput[];
    NOT?: group_expenseScalarWhereWithAggregatesInput | group_expenseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'group_expense'> | string;
    group_id?: UuidWithAggregatesFilter<'group_expense'> | string;
    expense_id?: UuidWithAggregatesFilter<'group_expense'> | string;
    created_at?: DateTimeWithAggregatesFilter<'group_expense'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'group_expense'> | Date | string;
  };

  export type group_memberWhereInput = {
    AND?: group_memberWhereInput | group_memberWhereInput[];
    OR?: group_memberWhereInput[];
    NOT?: group_memberWhereInput | group_memberWhereInput[];
    id?: UuidFilter<'group_member'> | string;
    user_id?: UuidFilter<'group_member'> | string;
    group_id?: UuidFilter<'group_member'> | string;
    joined_at?: DateTimeFilter<'group_member'> | Date | string;
    role?: StringFilter<'group_member'> | string;
    created_at?: DateTimeFilter<'group_member'> | Date | string;
    updated_at?: DateTimeFilter<'group_member'> | Date | string;
    group?: XOR<GroupRelationFilter, groupWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type group_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    group?: groupOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type group_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: group_memberWhereInput | group_memberWhereInput[];
      OR?: group_memberWhereInput[];
      NOT?: group_memberWhereInput | group_memberWhereInput[];
      user_id?: UuidFilter<'group_member'> | string;
      group_id?: UuidFilter<'group_member'> | string;
      joined_at?: DateTimeFilter<'group_member'> | Date | string;
      role?: StringFilter<'group_member'> | string;
      created_at?: DateTimeFilter<'group_member'> | Date | string;
      updated_at?: DateTimeFilter<'group_member'> | Date | string;
      group?: XOR<GroupRelationFilter, groupWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type group_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: group_memberCountOrderByAggregateInput;
    _max?: group_memberMaxOrderByAggregateInput;
    _min?: group_memberMinOrderByAggregateInput;
  };

  export type group_memberScalarWhereWithAggregatesInput = {
    AND?: group_memberScalarWhereWithAggregatesInput | group_memberScalarWhereWithAggregatesInput[];
    OR?: group_memberScalarWhereWithAggregatesInput[];
    NOT?: group_memberScalarWhereWithAggregatesInput | group_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'group_member'> | string;
    user_id?: UuidWithAggregatesFilter<'group_member'> | string;
    group_id?: UuidWithAggregatesFilter<'group_member'> | string;
    joined_at?: DateTimeWithAggregatesFilter<'group_member'> | Date | string;
    role?: StringWithAggregatesFilter<'group_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'group_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'group_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    group_member?: Group_memberListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    group_member?: group_memberOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      group_member?: Group_memberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type expenseCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUncheckedCreateInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseUncheckedCreateNestedManyWithoutExpenseInput;
  };

  export type expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUncheckedUpdateManyWithoutExpenseNestedInput;
  };

  export type expenseCreateManyInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseCreateNestedManyWithoutGroupInput;
    group_member?: group_memberCreateNestedManyWithoutGroupInput;
  };

  export type groupUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseUncheckedCreateNestedManyWithoutGroupInput;
    group_member?: group_memberUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type groupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUpdateManyWithoutGroupNestedInput;
    group_member?: group_memberUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUncheckedUpdateManyWithoutGroupNestedInput;
    group_member?: group_memberUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type groupCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type groupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense: expenseCreateNestedOneWithoutGroup_expenseInput;
    group: groupCreateNestedOneWithoutGroup_expenseInput;
  };

  export type group_expenseUncheckedCreateInput = {
    id?: string;
    group_id: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateOneRequiredWithoutGroup_expenseNestedInput;
    group?: groupUpdateOneRequiredWithoutGroup_expenseNestedInput;
  };

  export type group_expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseCreateManyInput = {
    id?: string;
    group_id: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberCreateInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: groupCreateNestedOneWithoutGroup_memberInput;
    user: userCreateNestedOneWithoutGroup_memberInput;
  };

  export type group_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    group_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: groupUpdateOneRequiredWithoutGroup_memberNestedInput;
    user?: userUpdateOneRequiredWithoutGroup_memberNestedInput;
  };

  export type group_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberCreateManyInput = {
    id?: string;
    user_id: string;
    group_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    group_member?: group_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    group_member?: group_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    group_member?: group_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    group_member?: group_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type Group_expenseListRelationFilter = {
    every?: group_expenseWhereInput;
    some?: group_expenseWhereInput;
    none?: group_expenseWhereInput;
  };

  export type group_expenseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type expenseSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type Group_memberListRelationFilter = {
    every?: group_memberWhereInput;
    some?: group_memberWhereInput;
    none?: group_memberWhereInput;
  };

  export type group_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type groupCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type groupMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type groupMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ExpenseRelationFilter = {
    is?: expenseWhereInput;
    isNot?: expenseWhereInput;
  };

  export type GroupRelationFilter = {
    is?: groupWhereInput;
    isNot?: groupWhereInput;
  };

  export type group_expenseCountOrderByAggregateInput = {
    id?: SortOrder;
    group_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type group_expenseMaxOrderByAggregateInput = {
    id?: SortOrder;
    group_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type group_expenseMinOrderByAggregateInput = {
    id?: SortOrder;
    group_id?: SortOrder;
    expense_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type group_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type group_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type group_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    group_id?: SortOrder;
    joined_at?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type group_expenseCreateNestedManyWithoutExpenseInput = {
    create?:
      | XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>
      | group_expenseCreateWithoutExpenseInput[]
      | group_expenseUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?:
      | group_expenseCreateOrConnectWithoutExpenseInput
      | group_expenseCreateOrConnectWithoutExpenseInput[];
    createMany?: group_expenseCreateManyExpenseInputEnvelope;
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
  };

  export type group_expenseUncheckedCreateNestedManyWithoutExpenseInput = {
    create?:
      | XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>
      | group_expenseCreateWithoutExpenseInput[]
      | group_expenseUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?:
      | group_expenseCreateOrConnectWithoutExpenseInput
      | group_expenseCreateOrConnectWithoutExpenseInput[];
    createMany?: group_expenseCreateManyExpenseInputEnvelope;
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type group_expenseUpdateManyWithoutExpenseNestedInput = {
    create?:
      | XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>
      | group_expenseCreateWithoutExpenseInput[]
      | group_expenseUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?:
      | group_expenseCreateOrConnectWithoutExpenseInput
      | group_expenseCreateOrConnectWithoutExpenseInput[];
    upsert?:
      | group_expenseUpsertWithWhereUniqueWithoutExpenseInput
      | group_expenseUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: group_expenseCreateManyExpenseInputEnvelope;
    set?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    disconnect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    delete?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    update?:
      | group_expenseUpdateWithWhereUniqueWithoutExpenseInput
      | group_expenseUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?:
      | group_expenseUpdateManyWithWhereWithoutExpenseInput
      | group_expenseUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
  };

  export type group_expenseUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?:
      | XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>
      | group_expenseCreateWithoutExpenseInput[]
      | group_expenseUncheckedCreateWithoutExpenseInput[];
    connectOrCreate?:
      | group_expenseCreateOrConnectWithoutExpenseInput
      | group_expenseCreateOrConnectWithoutExpenseInput[];
    upsert?:
      | group_expenseUpsertWithWhereUniqueWithoutExpenseInput
      | group_expenseUpsertWithWhereUniqueWithoutExpenseInput[];
    createMany?: group_expenseCreateManyExpenseInputEnvelope;
    set?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    disconnect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    delete?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    update?:
      | group_expenseUpdateWithWhereUniqueWithoutExpenseInput
      | group_expenseUpdateWithWhereUniqueWithoutExpenseInput[];
    updateMany?:
      | group_expenseUpdateManyWithWhereWithoutExpenseInput
      | group_expenseUpdateManyWithWhereWithoutExpenseInput[];
    deleteMany?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
  };

  export type group_expenseCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>
      | group_expenseCreateWithoutGroupInput[]
      | group_expenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_expenseCreateOrConnectWithoutGroupInput | group_expenseCreateOrConnectWithoutGroupInput[];
    createMany?: group_expenseCreateManyGroupInputEnvelope;
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
  };

  export type group_memberCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>
      | group_memberCreateWithoutGroupInput[]
      | group_memberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutGroupInput | group_memberCreateOrConnectWithoutGroupInput[];
    createMany?: group_memberCreateManyGroupInputEnvelope;
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
  };

  export type group_expenseUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>
      | group_expenseCreateWithoutGroupInput[]
      | group_expenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_expenseCreateOrConnectWithoutGroupInput | group_expenseCreateOrConnectWithoutGroupInput[];
    createMany?: group_expenseCreateManyGroupInputEnvelope;
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
  };

  export type group_memberUncheckedCreateNestedManyWithoutGroupInput = {
    create?:
      | XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>
      | group_memberCreateWithoutGroupInput[]
      | group_memberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutGroupInput | group_memberCreateOrConnectWithoutGroupInput[];
    createMany?: group_memberCreateManyGroupInputEnvelope;
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
  };

  export type group_expenseUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>
      | group_expenseCreateWithoutGroupInput[]
      | group_expenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_expenseCreateOrConnectWithoutGroupInput | group_expenseCreateOrConnectWithoutGroupInput[];
    upsert?:
      | group_expenseUpsertWithWhereUniqueWithoutGroupInput
      | group_expenseUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: group_expenseCreateManyGroupInputEnvelope;
    set?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    disconnect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    delete?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    update?:
      | group_expenseUpdateWithWhereUniqueWithoutGroupInput
      | group_expenseUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | group_expenseUpdateManyWithWhereWithoutGroupInput
      | group_expenseUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
  };

  export type group_memberUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>
      | group_memberCreateWithoutGroupInput[]
      | group_memberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutGroupInput | group_memberCreateOrConnectWithoutGroupInput[];
    upsert?: group_memberUpsertWithWhereUniqueWithoutGroupInput | group_memberUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: group_memberCreateManyGroupInputEnvelope;
    set?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    disconnect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    delete?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    update?: group_memberUpdateWithWhereUniqueWithoutGroupInput | group_memberUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: group_memberUpdateManyWithWhereWithoutGroupInput | group_memberUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
  };

  export type group_expenseUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>
      | group_expenseCreateWithoutGroupInput[]
      | group_expenseUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_expenseCreateOrConnectWithoutGroupInput | group_expenseCreateOrConnectWithoutGroupInput[];
    upsert?:
      | group_expenseUpsertWithWhereUniqueWithoutGroupInput
      | group_expenseUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: group_expenseCreateManyGroupInputEnvelope;
    set?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    disconnect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    delete?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    connect?: group_expenseWhereUniqueInput | group_expenseWhereUniqueInput[];
    update?:
      | group_expenseUpdateWithWhereUniqueWithoutGroupInput
      | group_expenseUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?:
      | group_expenseUpdateManyWithWhereWithoutGroupInput
      | group_expenseUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
  };

  export type group_memberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?:
      | XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>
      | group_memberCreateWithoutGroupInput[]
      | group_memberUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutGroupInput | group_memberCreateOrConnectWithoutGroupInput[];
    upsert?: group_memberUpsertWithWhereUniqueWithoutGroupInput | group_memberUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: group_memberCreateManyGroupInputEnvelope;
    set?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    disconnect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    delete?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    update?: group_memberUpdateWithWhereUniqueWithoutGroupInput | group_memberUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: group_memberUpdateManyWithWhereWithoutGroupInput | group_memberUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
  };

  export type expenseCreateNestedOneWithoutGroup_expenseInput = {
    create?: XOR<expenseCreateWithoutGroup_expenseInput, expenseUncheckedCreateWithoutGroup_expenseInput>;
    connectOrCreate?: expenseCreateOrConnectWithoutGroup_expenseInput;
    connect?: expenseWhereUniqueInput;
  };

  export type groupCreateNestedOneWithoutGroup_expenseInput = {
    create?: XOR<groupCreateWithoutGroup_expenseInput, groupUncheckedCreateWithoutGroup_expenseInput>;
    connectOrCreate?: groupCreateOrConnectWithoutGroup_expenseInput;
    connect?: groupWhereUniqueInput;
  };

  export type expenseUpdateOneRequiredWithoutGroup_expenseNestedInput = {
    create?: XOR<expenseCreateWithoutGroup_expenseInput, expenseUncheckedCreateWithoutGroup_expenseInput>;
    connectOrCreate?: expenseCreateOrConnectWithoutGroup_expenseInput;
    upsert?: expenseUpsertWithoutGroup_expenseInput;
    connect?: expenseWhereUniqueInput;
    update?: XOR<
      XOR<expenseUpdateToOneWithWhereWithoutGroup_expenseInput, expenseUpdateWithoutGroup_expenseInput>,
      expenseUncheckedUpdateWithoutGroup_expenseInput
    >;
  };

  export type groupUpdateOneRequiredWithoutGroup_expenseNestedInput = {
    create?: XOR<groupCreateWithoutGroup_expenseInput, groupUncheckedCreateWithoutGroup_expenseInput>;
    connectOrCreate?: groupCreateOrConnectWithoutGroup_expenseInput;
    upsert?: groupUpsertWithoutGroup_expenseInput;
    connect?: groupWhereUniqueInput;
    update?: XOR<
      XOR<groupUpdateToOneWithWhereWithoutGroup_expenseInput, groupUpdateWithoutGroup_expenseInput>,
      groupUncheckedUpdateWithoutGroup_expenseInput
    >;
  };

  export type groupCreateNestedOneWithoutGroup_memberInput = {
    create?: XOR<groupCreateWithoutGroup_memberInput, groupUncheckedCreateWithoutGroup_memberInput>;
    connectOrCreate?: groupCreateOrConnectWithoutGroup_memberInput;
    connect?: groupWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutGroup_memberInput = {
    create?: XOR<userCreateWithoutGroup_memberInput, userUncheckedCreateWithoutGroup_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutGroup_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type groupUpdateOneRequiredWithoutGroup_memberNestedInput = {
    create?: XOR<groupCreateWithoutGroup_memberInput, groupUncheckedCreateWithoutGroup_memberInput>;
    connectOrCreate?: groupCreateOrConnectWithoutGroup_memberInput;
    upsert?: groupUpsertWithoutGroup_memberInput;
    connect?: groupWhereUniqueInput;
    update?: XOR<
      XOR<groupUpdateToOneWithWhereWithoutGroup_memberInput, groupUpdateWithoutGroup_memberInput>,
      groupUncheckedUpdateWithoutGroup_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutGroup_memberNestedInput = {
    create?: XOR<userCreateWithoutGroup_memberInput, userUncheckedCreateWithoutGroup_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutGroup_memberInput;
    upsert?: userUpsertWithoutGroup_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGroup_memberInput, userUpdateWithoutGroup_memberInput>,
      userUncheckedUpdateWithoutGroup_memberInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type group_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>
      | group_memberCreateWithoutUserInput[]
      | group_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutUserInput | group_memberCreateOrConnectWithoutUserInput[];
    createMany?: group_memberCreateManyUserInputEnvelope;
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type group_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>
      | group_memberCreateWithoutUserInput[]
      | group_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutUserInput | group_memberCreateOrConnectWithoutUserInput[];
    createMany?: group_memberCreateManyUserInputEnvelope;
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type group_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>
      | group_memberCreateWithoutUserInput[]
      | group_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutUserInput | group_memberCreateOrConnectWithoutUserInput[];
    upsert?: group_memberUpsertWithWhereUniqueWithoutUserInput | group_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: group_memberCreateManyUserInputEnvelope;
    set?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    disconnect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    delete?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    update?: group_memberUpdateWithWhereUniqueWithoutUserInput | group_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: group_memberUpdateManyWithWhereWithoutUserInput | group_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type group_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>
      | group_memberCreateWithoutUserInput[]
      | group_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: group_memberCreateOrConnectWithoutUserInput | group_memberCreateOrConnectWithoutUserInput[];
    upsert?: group_memberUpsertWithWhereUniqueWithoutUserInput | group_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: group_memberCreateManyUserInputEnvelope;
    set?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    disconnect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    delete?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    connect?: group_memberWhereUniqueInput | group_memberWhereUniqueInput[];
    update?: group_memberUpdateWithWhereUniqueWithoutUserInput | group_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: group_memberUpdateManyWithWhereWithoutUserInput | group_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_member?: group_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_member?: group_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_member?: group_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_member?: group_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type group_expenseCreateWithoutExpenseInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: groupCreateNestedOneWithoutGroup_expenseInput;
  };

  export type group_expenseUncheckedCreateWithoutExpenseInput = {
    id?: string;
    group_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseCreateOrConnectWithoutExpenseInput = {
    where: group_expenseWhereUniqueInput;
    create: XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>;
  };

  export type group_expenseCreateManyExpenseInputEnvelope = {
    data: group_expenseCreateManyExpenseInput | group_expenseCreateManyExpenseInput[];
    skipDuplicates?: boolean;
  };

  export type group_expenseUpsertWithWhereUniqueWithoutExpenseInput = {
    where: group_expenseWhereUniqueInput;
    update: XOR<group_expenseUpdateWithoutExpenseInput, group_expenseUncheckedUpdateWithoutExpenseInput>;
    create: XOR<group_expenseCreateWithoutExpenseInput, group_expenseUncheckedCreateWithoutExpenseInput>;
  };

  export type group_expenseUpdateWithWhereUniqueWithoutExpenseInput = {
    where: group_expenseWhereUniqueInput;
    data: XOR<group_expenseUpdateWithoutExpenseInput, group_expenseUncheckedUpdateWithoutExpenseInput>;
  };

  export type group_expenseUpdateManyWithWhereWithoutExpenseInput = {
    where: group_expenseScalarWhereInput;
    data: XOR<group_expenseUpdateManyMutationInput, group_expenseUncheckedUpdateManyWithoutExpenseInput>;
  };

  export type group_expenseScalarWhereInput = {
    AND?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
    OR?: group_expenseScalarWhereInput[];
    NOT?: group_expenseScalarWhereInput | group_expenseScalarWhereInput[];
    id?: UuidFilter<'group_expense'> | string;
    group_id?: UuidFilter<'group_expense'> | string;
    expense_id?: UuidFilter<'group_expense'> | string;
    created_at?: DateTimeFilter<'group_expense'> | Date | string;
    updated_at?: DateTimeFilter<'group_expense'> | Date | string;
  };

  export type group_expenseCreateWithoutGroupInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    expense: expenseCreateNestedOneWithoutGroup_expenseInput;
  };

  export type group_expenseUncheckedCreateWithoutGroupInput = {
    id?: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseCreateOrConnectWithoutGroupInput = {
    where: group_expenseWhereUniqueInput;
    create: XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>;
  };

  export type group_expenseCreateManyGroupInputEnvelope = {
    data: group_expenseCreateManyGroupInput | group_expenseCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type group_memberCreateWithoutGroupInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutGroup_memberInput;
  };

  export type group_memberUncheckedCreateWithoutGroupInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_memberCreateOrConnectWithoutGroupInput = {
    where: group_memberWhereUniqueInput;
    create: XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>;
  };

  export type group_memberCreateManyGroupInputEnvelope = {
    data: group_memberCreateManyGroupInput | group_memberCreateManyGroupInput[];
    skipDuplicates?: boolean;
  };

  export type group_expenseUpsertWithWhereUniqueWithoutGroupInput = {
    where: group_expenseWhereUniqueInput;
    update: XOR<group_expenseUpdateWithoutGroupInput, group_expenseUncheckedUpdateWithoutGroupInput>;
    create: XOR<group_expenseCreateWithoutGroupInput, group_expenseUncheckedCreateWithoutGroupInput>;
  };

  export type group_expenseUpdateWithWhereUniqueWithoutGroupInput = {
    where: group_expenseWhereUniqueInput;
    data: XOR<group_expenseUpdateWithoutGroupInput, group_expenseUncheckedUpdateWithoutGroupInput>;
  };

  export type group_expenseUpdateManyWithWhereWithoutGroupInput = {
    where: group_expenseScalarWhereInput;
    data: XOR<group_expenseUpdateManyMutationInput, group_expenseUncheckedUpdateManyWithoutGroupInput>;
  };

  export type group_memberUpsertWithWhereUniqueWithoutGroupInput = {
    where: group_memberWhereUniqueInput;
    update: XOR<group_memberUpdateWithoutGroupInput, group_memberUncheckedUpdateWithoutGroupInput>;
    create: XOR<group_memberCreateWithoutGroupInput, group_memberUncheckedCreateWithoutGroupInput>;
  };

  export type group_memberUpdateWithWhereUniqueWithoutGroupInput = {
    where: group_memberWhereUniqueInput;
    data: XOR<group_memberUpdateWithoutGroupInput, group_memberUncheckedUpdateWithoutGroupInput>;
  };

  export type group_memberUpdateManyWithWhereWithoutGroupInput = {
    where: group_memberScalarWhereInput;
    data: XOR<group_memberUpdateManyMutationInput, group_memberUncheckedUpdateManyWithoutGroupInput>;
  };

  export type group_memberScalarWhereInput = {
    AND?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
    OR?: group_memberScalarWhereInput[];
    NOT?: group_memberScalarWhereInput | group_memberScalarWhereInput[];
    id?: UuidFilter<'group_member'> | string;
    user_id?: UuidFilter<'group_member'> | string;
    group_id?: UuidFilter<'group_member'> | string;
    joined_at?: DateTimeFilter<'group_member'> | Date | string;
    role?: StringFilter<'group_member'> | string;
    created_at?: DateTimeFilter<'group_member'> | Date | string;
    updated_at?: DateTimeFilter<'group_member'> | Date | string;
  };

  export type expenseCreateWithoutGroup_expenseInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseUncheckedCreateWithoutGroup_expenseInput = {
    id?: string;
    amount: number;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type expenseCreateOrConnectWithoutGroup_expenseInput = {
    where: expenseWhereUniqueInput;
    create: XOR<expenseCreateWithoutGroup_expenseInput, expenseUncheckedCreateWithoutGroup_expenseInput>;
  };

  export type groupCreateWithoutGroup_expenseInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_member?: group_memberCreateNestedManyWithoutGroupInput;
  };

  export type groupUncheckedCreateWithoutGroup_expenseInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_member?: group_memberUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type groupCreateOrConnectWithoutGroup_expenseInput = {
    where: groupWhereUniqueInput;
    create: XOR<groupCreateWithoutGroup_expenseInput, groupUncheckedCreateWithoutGroup_expenseInput>;
  };

  export type expenseUpsertWithoutGroup_expenseInput = {
    update: XOR<expenseUpdateWithoutGroup_expenseInput, expenseUncheckedUpdateWithoutGroup_expenseInput>;
    create: XOR<expenseCreateWithoutGroup_expenseInput, expenseUncheckedCreateWithoutGroup_expenseInput>;
    where?: expenseWhereInput;
  };

  export type expenseUpdateToOneWithWhereWithoutGroup_expenseInput = {
    where?: expenseWhereInput;
    data: XOR<expenseUpdateWithoutGroup_expenseInput, expenseUncheckedUpdateWithoutGroup_expenseInput>;
  };

  export type expenseUpdateWithoutGroup_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type expenseUncheckedUpdateWithoutGroup_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type groupUpsertWithoutGroup_expenseInput = {
    update: XOR<groupUpdateWithoutGroup_expenseInput, groupUncheckedUpdateWithoutGroup_expenseInput>;
    create: XOR<groupCreateWithoutGroup_expenseInput, groupUncheckedCreateWithoutGroup_expenseInput>;
    where?: groupWhereInput;
  };

  export type groupUpdateToOneWithWhereWithoutGroup_expenseInput = {
    where?: groupWhereInput;
    data: XOR<groupUpdateWithoutGroup_expenseInput, groupUncheckedUpdateWithoutGroup_expenseInput>;
  };

  export type groupUpdateWithoutGroup_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_member?: group_memberUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateWithoutGroup_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_member?: group_memberUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type groupCreateWithoutGroup_memberInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseCreateNestedManyWithoutGroupInput;
  };

  export type groupUncheckedCreateWithoutGroup_memberInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    group_expense?: group_expenseUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type groupCreateOrConnectWithoutGroup_memberInput = {
    where: groupWhereUniqueInput;
    create: XOR<groupCreateWithoutGroup_memberInput, groupUncheckedCreateWithoutGroup_memberInput>;
  };

  export type userCreateWithoutGroup_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGroup_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGroup_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGroup_memberInput, userUncheckedCreateWithoutGroup_memberInput>;
  };

  export type groupUpsertWithoutGroup_memberInput = {
    update: XOR<groupUpdateWithoutGroup_memberInput, groupUncheckedUpdateWithoutGroup_memberInput>;
    create: XOR<groupCreateWithoutGroup_memberInput, groupUncheckedCreateWithoutGroup_memberInput>;
    where?: groupWhereInput;
  };

  export type groupUpdateToOneWithWhereWithoutGroup_memberInput = {
    where?: groupWhereInput;
    data: XOR<groupUpdateWithoutGroup_memberInput, groupUncheckedUpdateWithoutGroup_memberInput>;
  };

  export type groupUpdateWithoutGroup_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUpdateManyWithoutGroupNestedInput;
  };

  export type groupUncheckedUpdateWithoutGroup_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group_expense?: group_expenseUncheckedUpdateManyWithoutGroupNestedInput;
  };

  export type userUpsertWithoutGroup_memberInput = {
    update: XOR<userUpdateWithoutGroup_memberInput, userUncheckedUpdateWithoutGroup_memberInput>;
    create: XOR<userCreateWithoutGroup_memberInput, userUncheckedCreateWithoutGroup_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGroup_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGroup_memberInput, userUncheckedUpdateWithoutGroup_memberInput>;
  };

  export type userUpdateWithoutGroup_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGroup_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type group_memberCreateWithoutUserInput = {
    id?: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    group: groupCreateNestedOneWithoutGroup_memberInput;
  };

  export type group_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    group_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_memberCreateOrConnectWithoutUserInput = {
    where: group_memberWhereUniqueInput;
    create: XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>;
  };

  export type group_memberCreateManyUserInputEnvelope = {
    data: group_memberCreateManyUserInput | group_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type group_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: group_memberWhereUniqueInput;
    update: XOR<group_memberUpdateWithoutUserInput, group_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<group_memberCreateWithoutUserInput, group_memberUncheckedCreateWithoutUserInput>;
  };

  export type group_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: group_memberWhereUniqueInput;
    data: XOR<group_memberUpdateWithoutUserInput, group_memberUncheckedUpdateWithoutUserInput>;
  };

  export type group_memberUpdateManyWithWhereWithoutUserInput = {
    where: group_memberScalarWhereInput;
    data: XOR<group_memberUpdateManyMutationInput, group_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type group_expenseCreateManyExpenseInput = {
    id?: string;
    group_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: groupUpdateOneRequiredWithoutGroup_expenseNestedInput;
  };

  export type group_expenseUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseCreateManyGroupInput = {
    id?: string;
    expense_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_memberCreateManyGroupInput = {
    id?: string;
    user_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type group_expenseUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    expense?: expenseUpdateOneRequiredWithoutGroup_expenseNestedInput;
  };

  export type group_expenseUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_expenseUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expense_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutGroup_memberNestedInput;
  };

  export type group_memberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type group_memberCreateManyUserInput = {
    id?: string;
    group_id: string;
    joined_at?: Date | string;
    role: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type group_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: groupUpdateOneRequiredWithoutGroup_memberNestedInput;
  };

  export type group_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type group_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    group_id?: StringFieldUpdateOperationsInput | string;
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ExpenseCountOutputTypeDefaultArgs instead
   */
  export type ExpenseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ExpenseCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use GroupCountOutputTypeDefaultArgs instead
   */
  export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GroupCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use expenseDefaultArgs instead
   */
  export type expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    expenseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use groupDefaultArgs instead
   */
  export type groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = groupDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use group_expenseDefaultArgs instead
   */
  export type group_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    group_expenseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use group_memberDefaultArgs instead
   */
  export type group_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    group_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
