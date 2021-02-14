export class User {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public phone: string,
        public website: string,
        public address: Address,
        public geo: Geo,
        public company: Company,
    ) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.address = address
        this.geo = geo
        this.company = company
    }
}

export class Address {
    constructor(
        public street: string,
        public suite: string,
        public city: string,
        public zipcode: string
    ) {
        this.street = street
        this.suite = suite
        this.city = city
        this.zipcode = zipcode
    }
}

export class Geo {
    constructor(
        public lat: string,
        public lng: string
    ) {
        this.lat = lat
        this.lng = lng
    }
}

export class Company {
    constructor(
        public name: string,
        public catchPhrase: string,
        public bs: string
    ) {
        this.name = name
        this.catchPhrase = catchPhrase
        this.bs = bs
    }
}

export interface UserState {
    isLoading: boolean
    hasError: boolean
    errorMessage: string
    selectedUser?: User
    users: User[]
}

export enum UserAction {
    REQUEST = "request",
    SUCCESS = "success",
    ERROR = "error",
    SELECT = "select",
}

export type UserActions =
    | { type: UserAction.REQUEST }
    | { type: UserAction.SUCCESS, payload: User[] }
    | { type: UserAction.ERROR, payload: string }
    | { type: UserAction.SELECT, payload: User }
