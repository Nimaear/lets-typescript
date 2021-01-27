
// generic types
type ArrayOfThings<T> = T[];

const a: ArrayOfThings<string> = ['a', 'b'];
type ApiStatus = 'Online' | 'Offline' | 'Unknown';

type MyStatus = 'Online' | 'Offline';

type UnifiedStatus = MyStatus | ApiStatus;

interface Person {
  name: string;
  lastName: string;
  status: ApiStatus;
}

interface Address {
  streetName: string;
  number: number;
  zipCode: string;
}

interface ApiResult<T, P> {
  data: T[];
  success: {
    hasSucceeded: boolean;
    code: number;
  },
  firstResult: P;
}

const addMine = (first: number, second: number): number => first + second;

type StreetName = Pick<Address, 'streetName'>;
type RestAddress = Omit<Address, 'streetName'>;
type Lookup = Record<string, ReturnType<typeof addMine>>;

const myLookup: Lookup = {
  a: 3,
  b: 4
};

// const result = {} as unknown as ApiResult<Person, Address>;
// console.log(result.data);
// console.log(result.firstResult);

// interfaces

// derived types

